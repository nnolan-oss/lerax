<template>
  <div v-if="route.path !== '/'" class="my-container flex items-center justify-between">
    <UButton
      icon="tabler:chevron-left"
      variant="soft"
      @click="handleGoback"
    >
      Ortga
    </UButton>
    <UIcon
      v-if="brandIcon"
      :title="exampleId?.toUpperCase()"
      :name="brandIcon"
      class="text-3xl"
    />
  </div>
</template>

<script setup lang="ts">
import { lessons } from '~/constants/lessons'

const router = useRouter()
const route = useRoute()
const exampleId = route.params.exampleId as string | undefined

const brandIcon = computed(() => {
  if (!exampleId) return null
  const lesson = lessons.find((l) => l.link === `/examples/${exampleId}`)
  return lesson?.icon ?? null
})

const handleGoback = () => {
  router.back()
}
</script>
