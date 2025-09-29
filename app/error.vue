<script setup lang="ts">
import type {NuxtError} from '#app'

const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  error: Object as () => NuxtError,
})

const handleReload = () => {
  window.location.reload()
}
</script>

<template>
  <div class="my-container text-center h-screen flex items-center justify-center">
    <div class="space-y-4">
      <h1>{{ error?.statusCode }}</h1>
      <p>{{ error?.statusCode === 404 ? "Yaxshiroq qidiring" : "Menimcha nimadir neto" }}</p>
      <div class="flex items-center justify-center gap-2">
        <UButton icon="tabler:chevron-left" href="/" variant="soft">Uyingga bor!</UButton>
        <UButton icon="tabler:reload" @click="handleReload">Qayta yuklash</UButton>
      </div>
    </div>
  </div>
</template>
