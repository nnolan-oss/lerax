<template>
  <UInput
    :model-value="modelValue"
    @update:model-value="onInput"
    placeholder="Qidiruv..."
    icon="tabler:search"
    class="min-w-[80%] my-4"
  />
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'

const props = defineProps<{
  modelValue: string
  placeholder?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const route = useRoute()
const router = useRouter()

const updateQuery = (value: string) => {
  router.replace({
    query: {
      ...route.query,
      search: value || undefined,
    },
  })
}

const debouncedUpdateQuery = useDebounceFn(updateQuery, 400)

const onInput = (value: string) => {
  emit('update:modelValue', value)
  debouncedUpdateQuery(value)
}
</script>