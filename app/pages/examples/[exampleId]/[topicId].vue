<script setup lang="ts">
const route = useRoute()
const exampleId = route.params.exampleId as string
const topicId = route.params.topicId as string

const { data: post } = await useAsyncData(
  `examples-${exampleId}-${topicId}`,
  () => queryCollection('examples').path(`/examples/${exampleId}/${topicId}`).first()
)

if (!post?.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
}
</script>

<template>
  <div class="my-container">
    <ContentRenderer v-if="post" :value="post" />
  </div>
</template>