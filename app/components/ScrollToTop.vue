<template>
  <Transition
    enter-active-class="transition-all duration-500 ease-out"
    enter-from-class="opacity-0 translate-y-8 scale-75"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-8 scale-75"
  >
    <UButton
      v-if="isVisible"
      icon="tabler:arrow-up"
      color="primary"
      variant="solid"
      size="lg"
      aria-label="Scroll to top"
      class="fixed bottom-6 right-6 z-50 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-transform duration-200 animate-bounce-subtle"
      @click="scrollToTop"
    />
  </Transition>
</template>

<script setup lang="ts">
const isVisible = ref(false)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  // Show button when user scrolls down more than 300px
  isVisible.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Check initial scroll position
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

