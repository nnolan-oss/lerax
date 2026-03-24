<template>
  <div class="my-container">
    <div class="my-section-wrapper text-center">
      <h1 class="font-bold mb-4">Dasturlash namunalarini o’rganing</h1>
      <AppSearchInput v-model="searchQuery" placeholder="Qidiruv..." />

      <div
        v-if="filteredLessons.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4"
      >
        <NuxtLink
          v-for="lesson in filteredLessons"
          :key="lesson.title"
          :to="lesson.link"
          :aria-label="`${lesson.title} darslarini ko’rish`"
          class="hover:text-primary bg-primary-500/10 p-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
        >
          <UIcon :name="lesson.icon" class="text-xl md:text-3xl stroke-1" />
          <h3 class="font-bold">{{ lesson.title }}</h3>
        </NuxtLink>
      </div>

      <div v-else class="mt-4 text-gray-500">
        "{{ searchQuery }}" bo’yicha natija topilmadi.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { lessons } from "~/constants/lessons";

const route = useRoute();
const searchQuery = ref<string>((route.query.search as string) || "");

const filteredLessons = computed(() => {
  if (!searchQuery.value) {
    return lessons;
  }
  const query = searchQuery.value.toLowerCase().trim();
  return lessons.filter((lesson) =>
    lesson.title.toLowerCase().includes(query),
  );
});

// 🟢 SEO metadata
useSeoMeta({
  title: "Dasturlash namunalarini o‘rganing — Lerax",
  description:
    "O‘zbek tilida dasturlash bo‘yicha namunalar: Go, JavaScript, Vue, React, PHP va boshqa texnologiyalarni amaliy misollar orqali o‘rganing.",
  ogTitle: "Dasturlash darslari va misollar — Lerax",
  ogDescription:
    "Go, Vue, React, PHP, JavaScript kabi dasturlash tillarini o‘zbek tilida misollar orqali o‘rganing.",
  ogUrl: "https://lerax.nolan.uz/examples",
  ogImage: "https://lerax.nolan.uz/og/lerax-examples.png",
  twitterCard: "summary_large_image",
});

useHead({
  link: [{ rel: "canonical", href: "https://lerax.nolan.uz/examples" }],
});
</script>
