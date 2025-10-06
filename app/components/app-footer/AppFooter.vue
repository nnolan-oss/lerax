<template>
  <div class="border-t border-t-primary-500/10">
    <div class="my-container flex items-center justify-between">
      <span class="text-sm">
        {{ date.getFullYear() }} · by
        <a href="https://nolan.uz" class="underline" target="_blank">nnolan</a>
      </span>

      <div class="flex items-center gap-2">
        <UButton
          target="_blank"
          color="warning"
          size="sm"
          href="https://buymeacoffee.com/nnolan"
        >
          Buy me a coffee
        </UButton>
        <ToggleMode size="sm" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const date = new Date();
</script>
