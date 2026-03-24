<template>
  <UButton
    :icon="isDark ? 'tabler:moon' : 'tabler:sun'"
    :size="size"
    color="primary"
    variant="soft"
    :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
    @click="isDark = !isDark"
  />
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { isDark } = useTheme()

defineProps<{
  size?: 'sm' | 'md' | 'lg'
}>()</script>