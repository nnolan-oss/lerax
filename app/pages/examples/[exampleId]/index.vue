<script setup>
const exampleId = useRoute().params.exampleId
const {data: post} = await useAsyncData(`examples-${exampleId}`, () => {
  return queryCollection('examples').path(`/examples/${exampleId}`).first()
})

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
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

</script>

<template>
  <div class="my-container">
    <ContentRenderer v-if="post" :value="post"/>
  </div>
</template>
