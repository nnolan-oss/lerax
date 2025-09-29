<script setup lang="ts">
const route = useRoute()
const exampleId = route.params.exampleId as string
const topicId = route.params.topicId as string

const { data: post } = await useAsyncData(
  `examples-${exampleId}-${topicId}`,
  () => queryCollection('examples').path(`/examples/${exampleId}/${topicId}`).first()
)
</script>

<template>
  <div class="my-container">
    <ContentRenderer v-if="post" :value="post" />
    <div v-else>Loading...</div>
  </div>
</template>