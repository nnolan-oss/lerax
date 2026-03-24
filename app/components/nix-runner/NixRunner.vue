<template>
  <div data-testid="nix-runner" class="mt-8 rounded-xl border border-primary-500/20 overflow-hidden">
    <div class="flex items-center justify-between px-4 py-2 bg-primary-500/10 border-b border-primary-500/20">
      <div class="flex items-center gap-2">
        <UIcon name="tabler:terminal-2" class="text-primary" />
        <span class="text-sm font-bold">Nix REPL</span>
      </div>
      <UButton
        v-if="history.length > 0"
        data-testid="nix-clear"
        icon="tabler:trash"
        size="xs"
        variant="soft"
        @click="clearHistory"
      />
    </div>

    <div
      ref="outputRef"
      class="bg-[#1e1e2e] text-[#cdd6f4] p-4 font-mono text-sm max-h-80 overflow-y-auto"
    >
      <div v-if="history.length === 0" class="text-[#6c7086]">
        Nix ifodalarini yozing. Masalan: 1 + 2, "hello", [ 1 2 3 ]
      </div>

      <div v-for="(entry, i) in history" :key="i" class="mb-2">
        <div class="flex gap-2">
          <span class="text-[#89b4fa] select-none shrink-0">nix&gt;</span>
          <span class="break-all">{{ entry.expr }}</span>
        </div>
        <div v-if="entry.loading" class="text-[#6c7086] pl-6 animate-pulse">
          baholanmoqda...
        </div>
        <div v-else-if="entry.error" data-testid="nix-error" class="text-[#f38ba8] pl-6 whitespace-pre-wrap break-all">
          {{ entry.error }}
        </div>
        <div v-else data-testid="nix-result" class="text-[#a6e3a1] pl-6 whitespace-pre-wrap break-all">
          {{ formatResult(entry.result) }}
        </div>
      </div>
    </div>

    <form
      class="flex items-center bg-[#1e1e2e] border-t border-[#313244] px-4 py-2"
      @submit.prevent="evaluate"
    >
      <span class="text-[#89b4fa] font-mono text-sm select-none mr-2 shrink-0">nix&gt;</span>
      <input
        ref="inputRef"
        v-model="currentExpr"
        type="text"
        class="flex-1 bg-transparent text-[#cdd6f4] font-mono text-sm outline-none placeholder-[#6c7086]"
        placeholder="1 + 2"
        :disabled="isEvaluating"
        autocomplete="off"
        spellcheck="false"
        @keydown.up.prevent="historyUp"
        @keydown.down.prevent="historyDown"
      >
    </form>
  </div>
</template>

<script setup lang="ts">
interface HistoryEntry {
  expr: string
  result?: unknown
  error?: string
  loading: boolean
}

const currentExpr = ref("")
const history = ref<HistoryEntry[]>([])
const isEvaluating = ref(false)
const outputRef = ref<HTMLElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)
const historyIndex = ref(-1)
const pastExprs = ref<string[]>([])

const scrollToBottom = () => {
  nextTick(() => {
    if (outputRef.value) {
      outputRef.value.scrollTop = outputRef.value.scrollHeight
    }
  })
}

const formatResult = (result: unknown): string => {
  if (result === null || result === undefined) return "null"
  if (typeof result === "string") return `"${result}"`
  if (typeof result === "object") return JSON.stringify(result, null, 2)
  return String(result)
}

const evaluate = async () => {
  const expr = currentExpr.value.trim()
  if (!expr || isEvaluating.value) return

  pastExprs.value.push(expr)
  historyIndex.value = -1

  const entry: HistoryEntry = { expr, loading: true }
  history.value.push(entry)
  currentExpr.value = ""
  isEvaluating.value = true
  scrollToBottom()

  try {
    const res = await $fetch<{ ok: boolean; result?: unknown; error?: string }>(
      "/api/nix-eval",
      {
        method: "POST",
        body: { expr },
      },
    )

    entry.loading = false
    if (res.ok) {
      entry.result = res.result
    } else {
      entry.error = res.error || "Xatolik yuz berdi"
    }
  } catch (err: unknown) {
    entry.loading = false
    const e = err as { data?: { statusMessage?: string }; message?: string }
    entry.error = e.data?.statusMessage || e.message || "Server bilan aloqa uzildi"
  }

  isEvaluating.value = false
  scrollToBottom()
  inputRef.value?.focus()
}

const clearHistory = () => {
  history.value = []
  pastExprs.value = []
  historyIndex.value = -1
  inputRef.value?.focus()
}

const historyUp = () => {
  if (pastExprs.value.length === 0) return
  if (historyIndex.value === -1) {
    historyIndex.value = pastExprs.value.length - 1
  } else if (historyIndex.value > 0) {
    historyIndex.value--
  }
  currentExpr.value = pastExprs.value[historyIndex.value] ?? ""
}

const historyDown = () => {
  if (historyIndex.value === -1) return
  if (historyIndex.value < pastExprs.value.length - 1) {
    historyIndex.value++
    currentExpr.value = pastExprs.value[historyIndex.value] ?? ""
  } else {
    historyIndex.value = -1
    currentExpr.value = ""
  }
}
</script>
