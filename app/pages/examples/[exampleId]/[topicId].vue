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
  title: `${title} - Lerax`,
  description: summary,
  ogTitle: `${title} - Lerax`,
  ogDescription: summary,
  ogImage: 'https://lerax.nolan.uz/og/lerax-default.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="my-container">
    <ContentRenderer v-if="post" :value="post" />
  </div>
</template>