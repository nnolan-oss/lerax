---
title: Routing
description: Nuxt da loyiha yaratish, boshlang'ich tushunchalar
date: 2025-10-01
---

## Routing

<div class="my-md-content">

Nuxtda routing folder/file based structure bo'yicha ishlaydi.

`/app/pages` asosiy routing qilinadigan folder/file lardan iborat bo'lishi kerak. Sizga hech qanday qo'shimcha router package kerak bo'lmaydi

Page routinglar uchun `.jsx`, `.tsx`, `.vue`, `.js`, `.ts`, `.mjs` extensionlar valid hisoblanadi.


```vue
<!-- vue - /app/pages/index.vue -->
<template>
  <h1>Index page</h1>
</template>
```

```ts
// ts - /pages/index.ts
// https://vuejs.org/guide/extras/render-function.html
export default defineComponent({
  render () {
    return h('h1', 'Index page')
  },
})
```

```tsx
// https://nuxt.com/docs/4.x/examples/advanced/jsx
// https://vuejs.org/guide/extras/render-function.html#jsx-tsx
export default defineComponent({
  render () {
    return <h1>Index page</h1>
  },
})
```

Keyin bularni `app.vue` faylida render qilamiz

```vue
<!-- app/app.vue -->
<template>
  <div>
    <!-- Boshqa componentlarni ham yozish mumkin va ular hamma pagelarda ko'rinadi, masalan: Navbar, Footer -->
    <NuxtPage /> <!-- Bu yerda Nuxt o'zi `app/pages` papkani parse qilib routelar yaratadi -->
  </div>
</template>
```

<h3 class="my-section-tag">Dynamic routelar</h3>

```bash
-| pages/
---| index.vue
---| users-[group]/
-----| [id].vue
```

Page componentga tegishli routelarni `$route` shaklida olishimiz mumkin
```vue
<!-- app/pages/users-[group]/[id].vue -->
<template>
  <p>{{ $route.params.group }} - {{ $route.params.id }}</p>
</template>
```

Yoki Composition API orqali
```vue
<script setup lang="ts">
const route = useRoute() // useRoute composable (hook) orqali, ali xo'ja = xo'ja ali

if (route.params.group === 'admins' && !route.params.id) {
  console.log('Warning! Make sure user is authenticated!')
}
</script>
```

<h3 class="my-section-tag">Barcha routelarni handle qilish</h3>

```vue
<!-- app/pages/[...slug].vue -->
<template>
  <p>{{ $route.params.slug }}</p>
</template>
```

/hello/world ga o'tilsa, quyidagisi ko‘rinadi:
```vue
<p>["hello", "world"]</p>
```

</div>
