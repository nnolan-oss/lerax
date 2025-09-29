<template>
  <div class="my-container">
    id {{ route.params.exampleId }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>