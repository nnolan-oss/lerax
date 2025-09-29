<template>
  <div class="my-container">
    id {{ route.params.topicId }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>