<script setup>
const route = useRoute()
const exampleId = route.params?.exampleId
const topicId = route.params?.topicId

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

const { title, summary, date } = post.value

useSeoMeta({
  title,
  description: summary,
  ogTitle: title,
  ogDescription: summary,
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

</script>

<template>
  <div class="my-container">
    <ContentRenderer v-if="post" :value="post" />
  </div>
</template>