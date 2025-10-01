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
  render() {
    return h("h1", "Index page");
  },
});
```

```tsx
// https://nuxt.com/docs/4.x/examples/advanced/jsx
// https://vuejs.org/guide/extras/render-function.html#jsx-tsx
export default defineComponent({
  render() {
    return <h1>Index page</h1>;
  },
});
```

Keyin bularni `app.vue` faylida render qilamiz

```vue
<!-- app/app.vue -->
<template>
  <div>
    <!-- Boshqa componentlarni ham yozish mumkin va ular hamma pagelarda ko'rinadi, masalan: Navbar, Footer -->
    <NuxtPage />
    <!-- Bu yerda Nuxt o'zi `app/pages` papkani parse qilib routelar yaratadi -->
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
const route = useRoute(); // useRoute composable (hook) orqali, ali xo'ja = xo'ja ali

if (route.params.group === "admins" && !route.params.id) {
  console.log("Warning! Make sure user is authenticated!");
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

<h3 class="my-section-tag">Ichma-ich routelar</h3>

`<NuxtPage>` yordamida ichma-ich (nested) routelarni ko‘rsatish mumkin.

```bash
-| pages/
---| parent/
-----| child.vue
---| parent.vue
```

Nuxt routelarni bunday tree qilib generatsiya qiladi

```ts
[
  {
    path: "/parent",
    component: "~/pages/parent.vue",
    name: "parent",
    children: [
      {
        path: "child",
        component: "~/pages/parent/child.vue",
        name: "parent-child",
      },
    ],
  },
];
```

`child.vue` komponentini ko‘rsatish uchun, `app/pages/parent.vue` ichiga `<NuxtPage>` komponentini qo‘yishingiz kerak:

```vue
<!-- pages/parent.vue -->
<template>
  <div>
    <h1>I am the parent view</h1>
    <NuxtPage :foobar="123" />
  </div>
</template>
```

```vue
<!-- pages/parent/child.vue -->
<script setup lang="ts">
const props = defineProps({
  foobar: String,
});

console.log(props.foobar);
</script>
```

<h3 class="my-section-tag">Routelarni guruhlash</h3>

```bash
-| pages/
---| index.vue
---| (marketing)/
-----| about.vue
-----| contact.vue
```

Bunda `/marketing/about` yoki `/marketing/contact` emas, `/about`, `/contact` holatida route hosil bo'ladi, guruhlash ekan development vaqtida yordam berishi mumkin

<h3 class="my-section-tag">Navigate qilish</h3>

```vue
<template>
  <NuxtLink to="/">Home page</NuxtLink>
</template>
```
`<NuxtLink/>` orqali navigate qilishimiz yoki `navigateTo()`  Nuxtni built-in utility bilan navigate qilishim mumkin, bunda qo'shimcha query params berib yuborsak ham bo'ladi

```vue
<script setup lang="ts">
const name = ref('')
const type = ref(1)

function navigate () {
  return navigateTo({
    path: '/search',
    query: {
      name: name.value,
      type: type.value,
    },
  })
}
</script>
```

<h3 class="my-section-tag">Client-only pagelar</h3>

Sahifani faqat mijoz (client) tomonida ishlaydigan qilib belgilash uchun unga `.client.vue` qo‘shimchasini berishingiz mumkin. Bu sahifadagi kontentning hech biri serverda render qilinmaydi.

<h3 class="my-section-tag">Server-only pagelar</h3>

Sahifani faqat server tomonida ishlaydigan qilib belgilash uchun unga `.server.vue` qo‘shimchasini berishingiz mumkin. Siz ushbu sahifaga **vue-router** orqali mijoz (client) tomondan navigatsiya qilib o‘ta olasiz, lekin u avtomatik ravishda server komponent sifatida render qilinadi. Bu esa sahifani render qilish uchun kerak bo‘ladigan kod mijoz (client) tomondagi bundlega kiritilmasligini anglatadi.


</div>
