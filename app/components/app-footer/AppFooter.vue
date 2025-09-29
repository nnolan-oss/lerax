<template>
  <div class="border-t border-t-primary-500/10">
    <div class="my-container flex items-center justify-between">
      <span>
        {{date.getFullYear()}} · by <a href="https://nolan.uz" class="underline" target="_blank">nnolan</a>
      </span>

      <ToggleMode size="sm"/>
    </div>
  </div>
</template>
<script setup lang="ts">
  const date = new Date();
</script>