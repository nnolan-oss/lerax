<template>
  <div class="my-container">
    <div class="my-section-wrapper text-center">
      <h3 class="text-center">Bizda bor</h3>
      <AppSearchInput/>
      <div class="grid grid-cols-2 gap-5 mt-4">
        <template v-for="lesson in lessons" :key="lesson.title">
          <NuxtLink
              v-if="lesson.link"
              :href="lesson.link"
              class="hover:text-primary bg-primary-500/10 p-4 rounded-xl flex items-center justify-center gap-2">
            <UIcon :name="lesson.icon" class="text-3xl"/>
            <h4 class="font-bold">{{ lesson.title }}</h4>
          </NuxtLink>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppSearchInput from "~/components/app-search-input/AppSearchInput.vue";
import {lessons} from "~/constants/lessons";
</script>