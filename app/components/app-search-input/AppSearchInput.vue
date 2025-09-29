<template>
    <UInput
        v-model="searchValue"
        @input="handleSearch"
        placeholder="Qidiruv..."
        icon="tabler:search"
        class="min-w-[80%] my-4"
    />
</template>

<script setup lang="ts">
import { useDebounceFn } from "@vueuse/core";

const route = useRoute();
const router = useRouter();

const searchValue = ref(route.query.search as string | undefined)

watch(() => route.query.search, (newVal) => {
  searchValue.value = newVal as string | undefined
})

const updateQuery = () => {
  router.replace({
    query: {
      ...route.query,
      search: searchValue.value || undefined
    }
  })
}

const handleSearch = useDebounceFn(updateQuery, 400)
</script>

<style lang="scss" scoped>

</style>