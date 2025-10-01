---
title: Komponentlar
description: Nuxt da komponentlar bilan ishlash
date: 2025-10-01
---

# Komponentlar

<div class="my-md-content">

Nuxt da componentlar `/components` papka ichiga yoziladi, bu asosan auto import qilish va project structure tartibli bo'lishi uchun,

Component nomlari HTML tagname bilan bir xil bo'lmasligi kerak.
Masalan, `Button.vue` emas `AppButton.vue` yoki `CustomButton.vue` shaklida bo'lishi kerak

Agar komponentlarni faqat nomi bo‘yicha (yo‘lini ko‘rsatmasdan) avtomatik import qilishni xohlasangiz, konfiguratsiya obyektining kengaytirilgan shaklida `pathPrefix` opsiyasini `false` qilib qo‘yishingiz kerak:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
```

<h3 class="my-section-tag">Dynamic componentlar</h3>

Agar siz Vue’da `<component :is="someComputedComponent">` sintaksisini ishlatmoqchi bo‘lsangiz, unda Vue tomonidan taqdim etilgan `resolveComponent` yordamchisidan foydalanishingiz yoki komponentni to‘g‘ridan-to‘g‘ri `#components` dan import qilib, uni `is` propiga berishingiz kerak.

```vue
<!-- app/pages/index.vue -->

<script setup lang="ts">
import { SomeComponent } from "#components";

const MyButton = resolveComponent("MyButton");
</script>

<template>
  <component :is="clickable ? MyButton : 'div'" />
  <component :is="SomeComponent" />
</template>
```
