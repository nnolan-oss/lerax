<template>
  <div>
    <UButton
        @click="isDark = !isDark"
        :icon="isDark ? 'tabler:moon' : 'tabler:sun'"
        :size="size"
        color="primary"
        variant="soft"
        :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
    />
  </div>
</template>

<script setup>
import { useTheme } from '~/composables/useTheme';

const { isDark } = useTheme();

// Props ni aniqlash
const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value), // Faqat sm, md, lg qiymatlari ruxsat etiladi
  },
});
</script>