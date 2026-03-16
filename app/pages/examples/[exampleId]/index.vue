<script setup>
const { params } = useRoute();
const post = await useExampleContent(params.exampleId);

const { title, summary } = post.value;

useSeoMeta({
  title: `${title} - Lerax`,
  description: summary,
  ogTitle: `${title} - Lerax`,
  ogDescription: summary,
  ogImage: "https://lerax.nolan.uz/og/lerax-default.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="my-container">
    <ContentRenderer v-if="post" :value="post" />
  </div>
</template>
