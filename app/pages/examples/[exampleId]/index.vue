<script setup>
const exampleId = useRoute().params.exampleId
const {data: post} = await useAsyncData(`examples-${exampleId}`, () => {
  return queryCollection('examples').path(`/examples/${exampleId}`).first()
})

if (!post) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
}

</script>

<template>
  <div class="my-container">
    <ContentRenderer v-if="post" :value="post"/>
  </div>
</template>
