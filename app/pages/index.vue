<template>
  <div class="my-container">
    <div class="my-section-wrapper text-center">
      <div class="flex items-center justify-center gap-2">
        <UIcon name="tabler:bolt" class="text-xl text-primary"/>
        <h2>
          lerax
        </h2>
      </div>
      <p>Dasturlashni namunalar bilan o'rganing</p>
    </div>

    <div class="my-section-wrapper mt-12">
      <h4>- Sizni kutyapti</h4>
      <div class="grid grid-cols-2 gap-5 mt-4">
        <NuxtLink href="/lessons/golang" class="bg-primary-500/10 p-4 rounded-xl text-center">
          <UIcon name="tabler:brand-golang" class="text-5xl"/>
        </NuxtLink>
        <div class="bg-primary-500/10 p-4 rounded-xl text-center">
          <UIcon name="tabler:brand-nuxt" class="text-5xl"/>
        </div>
        <div class="bg-primary-500/10 p-4 rounded-xl text-center">
          <UIcon name="tabler:brand-vue" class="text-5xl"/>
        </div>
        <div class="bg-primary-500/10 p-4 rounded-xl text-center">
          <UIcon name="tabler:brand-golang" class="text-5xl"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>