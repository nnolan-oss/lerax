<template>
  <div class="my-container">
    <div class="my-section-wrapper text-center">
      <h3 class="text-center">Nima o'rganamiz ?</h3>
      <AppSearchInput v-model="searchQuery" placeholder="Qidiruv..."/>
      <div v-if="filteredLessons.length > 0" class="grid grid-cols-2 gap-5 mt-4">
        <NuxtLink
            v-for="lesson in filteredLessons"
            :key="lesson.title"
            :to="lesson.link"
            class="hover:text-primary bg-primary-500/10 p-4 rounded-xl flex items-center justify-center gap-2"
        >
          <UIcon :name="lesson.icon" class="text-3xl"/>
          <h4 class="font-bold">{{ lesson.title }}</h4>
        </NuxtLink>
      </div>
      <div v-else class="mt-4 text-gray-500">
        No lessons found for "{{ searchQuery || 'your search' }}".
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue';
import AppSearchInput from '~/components/app-search-input/AppSearchInput.vue';
import {lessons} from '~/constants/lessons';

interface Lesson {
  title: string;
  link: string;
  icon: string;
}

const route = useRoute();
const searchQuery = ref<string>((route.query.search as string) || '');

const filteredLessons = computed(() => {
  if (!searchQuery.value) {
    return lessons;
  }
  const query = searchQuery.value.toLowerCase().trim();
  return lessons.filter((lesson: Lesson) =>
      lesson.title.toLowerCase().includes(query)
  );
});
</script>