<template>
  <div class="my-container">
    id {{ route.params.lessonId }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>