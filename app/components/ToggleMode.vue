<template>
  <div>
    <UButton
        :icon="isDark ? 'tabler:moon' : 'tabler:sun'"
        :size="size"
        color="primary"
        variant="soft"
        :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
        @click="isDark = !isDark"
    />
  </div>
</template>

<script setup>
import { useTheme } from '~/composables/useTheme';
const { isDark } = useTheme();
const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value), // Faqat sm, md, lg qiymatlari ruxsat etiladi
  },
});
</script>