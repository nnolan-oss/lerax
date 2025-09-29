<template>
  <div class="border-b border-b-primary-500/10 sticky top-0 backdrop-blur-lg bg-opacity-50">
    <div class="my-container flex justify-between items-center">
      <NuxtLink href="/" class="font-bold font-mono">
        <span class="text-primary">{</span>
        lerax
        <span class="text-primary">}</span>
      </NuxtLink>
      <div class="space-x-2 flex items-center">

        <UButton href="/examples">Docs</UButton>
        <ToggleMode/>
        <UButton icon="tabler:brand-github" size="md" color="primary" variant="soft"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>