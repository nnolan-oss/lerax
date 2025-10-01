---
title: State va props
description: Nuxt da state va propslar bilan ishlash
date: 2025-10-01
---

## State va props

<div class="my-md-content">

<h3 class="my-section-tag">Props</h3>

Props parent componentdan child componentga ma'lumot uzatish uchun ishlatiladi. Qiymat doim `readonly` hisoblanadi.

```vue
<!-- components/Child.vue -->
<template>
  <div>
    <p>Salom, {{ name }}!</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>
```

```vue
<!-- pages/index.vue -->
<template>
  <div>
    <Child name="Neo" />
  </div>
</template>

<script setup lang="ts">
import Child from "~/components/Child.vue";
</script>
```

bu yerda `name` uzatilmoqda

<h3 class="my-section-tag">State</h3>

State componentning dynamic holatini saqlovchi qismi, agar u o'zgaradigan taqdirda component rerender bo'lishiga olib keladi. Ular `local` va `global` turlarga bo'linadi. Agar component ichki qismida ishlatilib, boshqa componentlarga qiymat share qilmasa, u `local`, agar qiymatni turli componentlar orasida ishlatsak unda `global` hisoblanadi.

- ref / reactive state ustida amallar bajaramiz asosan local

```ts
const count = ref(0);
```

- useState (Composition API) bu ham state bilan ishlash uchun lekin global maqsad

```ts
const counter = useState<number>("counter", () => 0);
```

<h3 class="my-section-tag">State management (Pinia)</h3>

Nuxt bilan integratsiya

```ts
export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
});
```

Alohida store yaratish

```ts
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count += 1;
    },
    setCount(val: number) {
      this.count = val;
    },
  },
});
```

Komponent ichida foydalanish

```vue
<script setup lang="ts">
import { useCounterStore } from "~/stores/counter";

const counter = useCounterStore();

function inc() {
  counter.increment();
}
</script>

<template>
  <div>
    <p>Count: {{ counter.count }}</p>
    <p>Double: {{ counter.double }}</p>
    <button @click="inc">Increment</button>
  </div>
</template>
```

</div>
