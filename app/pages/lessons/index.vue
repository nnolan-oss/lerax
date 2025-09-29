<template>
  <div class="my-container">
    <div class="my-section-wrapper text-center">
      <h3 class="text-center">Bizda bor</h3>
      <UInput v-model="value" placeholder="Qidiruv..." icon="tabler:search" class="min-w-[80%] my-4"/>
      <div class="grid grid-cols-2 gap-5 mt-4">
        <div class="bg-primary-500/10 p-4 rounded-xl text-center">
          <UIcon name="tabler:brand-golang" class="text-5xl"/>
        </div>
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
const value = ref('')
</script>