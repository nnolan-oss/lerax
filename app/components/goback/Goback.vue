<template>
  <div class="my-container flex items-center justify-between" v-if="route.path !== '/'">
    <UButton
      @click="handleGoback"
      leading-icon="tabler:chevron-left"
      variant="soft"
      >Ortga</UButton
    >
    <UIcon :title="exampleId?.toUpperCase()" :name="'tabler:brand-'+exampleId" class="text-3xl"/>
  </div>
</template>

<script setup>
const router = useRouter();
const route = useRoute();
const exampleId = route.params.exampleId

const handleGoback = () => {
  router.back();
};
</script>
