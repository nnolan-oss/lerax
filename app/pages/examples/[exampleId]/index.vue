<script setup>
const { params } = useRoute();
const post = await useExampleContent(params.exampleId);
const isNix = params.exampleId === "nix";

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
    <div v-if="post" class="my-md-content">
      <ContentRenderer :value="post" />
    </div>
    <NixRunner v-if="isNix" />
  </div>
</template>
