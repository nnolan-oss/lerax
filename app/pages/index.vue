<template>
  <div class="my-container">
    <div class="my-section-wrapper text-center my-12">
      <div class="flex items-center justify-center gap-2">
        <UIcon name="tabler:bolt" class="text-xl text-primary"/>
        <h2>
          lerax
        </h2>
      </div>
      <p>Dasturlashni namunalar bilan o'rganing</p>
    </div>

    <div class="my-section-wrapper">
      <h5>· Sizni kutyapti</h5>
      <div class="grid grid-cols-2 gap-5 mt-4">
        <template v-for="lesson in lessons" :key="lesson.title">
          <NuxtLink
              v-if="lesson.link"
              :href="lesson.link"
              class="hover:text-primary backdrop-blur bg-primary-500/10 p-4 rounded-xl flex items-center justify-center gap-2">
            <UIcon :name="lesson.icon" class="text-3xl stroke-1"/>
            <h4 class="font-bold">{{ lesson.title }}</h4>
          </NuxtLink>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {lessons} from "~/constants/lessons"
</script>