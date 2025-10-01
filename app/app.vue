<template>
  <div class="h-screen">
    <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  // 🔹 Default SEO meta
  title: "Lerax — O‘zbekcha dasturlash darslari",
  description:
    "Lerax — dasturlashni o‘zbek tilida namunalar bilan o‘rganing: Go, Vue, React, PHP va boshqalar.",

  // 🔹 Open Graph (social sharing)
  ogTitle: "Lerax — O‘zbekcha dasturlash darslari",
  ogDescription:
    "Go, Vue, React, JavaScript, TypeScript va boshqa dasturlash tillari bo‘yicha o‘zbekcha misollar.",
  ogImage: "https://lerax.nolan.uz/og/lerax-default.png",
  ogUrl: "https://lerax.nolan.uz",

  // 🔹 Twitter Cards
  twitterCard: "summary_large_image",
  twitterTitle: "Lerax — O‘zbekcha dasturlash darslari",
  twitterDescription: "Dasturlashni o‘zbek tilida misollar bilan o‘rganing.",
  twitterImage: "https://lerax.nolan.uz/og/lerax-default.png",
});

useHead({
  link: [
    // 🔹 Canonical URL
    { rel: "canonical", href: "https://lerax.nolan.uz" },
    // 🔹 Favicons
    { rel: "icon", type: "image/png", href: "/favicon.png" },
  ],
});
</script>
