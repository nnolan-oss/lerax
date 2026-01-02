<template>
  <div class="my-container">
    <!-- Hero Section -->
    <div class="my-section-wrapper text-center my-12">
      <div class="flex items-center justify-center gap-2">
        <UIcon name="tabler:bolt" class="text-2xl text-primary" />
        <h1 class="font-bold">lerax</h1>
      </div>
      <p class="text-lg">
        Dasturlashni o‘zbek tilida namunalar bilan o‘rganing
      </p>
    </div>

    <!-- Lessons Section -->
    <div class="my-section-wrapper">
      <h2 class="font-semibold">· Sizni kutyapti</h2>
      <div class="grid grid-cols-2 gap-5 mt-4">
        <template v-for="lesson in lessons" :key="lesson.title">
          <NuxtLink
            v-if="lesson.link"
            :to="lesson.link"
            :aria-label="`${lesson.title} darslarini ko'rish`"
            class="hover:text-primary backdrop-blur bg-primary-500/10 p-4 rounded-xl flex items-center justify-center gap-2"
          >
            <UIcon :name="lesson.icon" class="text-xl md:text-3xl stroke-1" />
            <h3 class="font-bold">{{ lesson.title }}</h3>
          </NuxtLink>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { lessons } from "~/constants/lessons";

// 🟢 SEO metadata
useSeoMeta({
  title: "Lerax — O‘zbekcha dasturlash darslari va misollar",
  description:
    "Lerax — dasturlashni o‘zbek tilida misollar orqali o‘rganing. Go, JavaScript, TypeScript, Vue, React, Nuxt, PHP, Laravel va boshqa darslar.",
  ogTitle: "Lerax — O‘zbekcha dasturlash darslari",
  ogDescription:
    "Go, Vue, React, PHP, JavaScript va boshqa dasturlash tillarini o‘zbek tilida amaliy misollar bilan o‘rganing.",
  ogImage: "https://lerax.nolan.uz/og/lerax-home.png",
  ogUrl: "https://lerax.nolan.uz",
  twitterCard: "summary_large_image",
});

useHead({
  link: [{ rel: "canonical", href: "https://lerax.nolan.uz" }],
});
</script>
