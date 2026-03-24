<script setup lang="ts">
import type { NuxtError } from '#app'
const router = useRouter()

const props = defineProps({
  error: Object as () => NuxtError,
})

const handleReload = () => {
  window.location.reload()
}

const handleGoBack = () => {
  router.back()
}

// 🟢 SEO meta for error pages
const errorTitle = props.error?.statusCode === 404 
  ? "Sahifa topilmadi | Lerax" 
  : "Xatolik yuz berdi | Lerax"

const errorDescription = props.error?.statusCode === 404 
  ? "Siz izlagan sahifa mavjud emas. Lerax dasturlash darslarini qidiring." 
  : "Saytda texnik nosozlik yuz berdi. Keyinroq urinib ko‘ring."

useSeoMeta({
  title: errorTitle,
  description: errorDescription,
  ogTitle: errorTitle,
  ogDescription: errorDescription,
  ogImage: 'https://lerax.nolan.uz/og/error.png',
  twitterCard: 'summary',
})

useHead({
  meta: [
    // 🔴 Prevent indexing of error pages
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<template>
  <div class="my-container text-center h-screen flex items-center justify-center">
    <div class="space-y-4">
      <h1>{{ error?.statusCode }}</h1>
      <p>
        {{ error?.statusCode === 404 
          ? "Siz izlagan sahifa topilmadi. Yaxshiroq qidiring 🚀" 
          : "Menimcha nimadir neto 😅" 
        }}
      </p>
      <div class="flex items-center justify-center gap-2">
        <UButton icon="tabler:chevron-left" variant="soft" @click="handleGoBack">
          Uyingga bor!
        </UButton>
        <UButton icon="tabler:reload" variant="solid" @click="handleReload">
          Qayta yuklash
        </UButton>
      </div>
    </div>
  </div>
</template>
