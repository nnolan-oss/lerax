---
title: Hello world
description: Vue da loyiha yaratish, boshlang'ich tushunchalar
date: 2025-10-05
---

## Hello World

<div class="my-md-content">

Vueda 2ta yo'l bor deb tushunsak bo'ladi, yangi Options API yoki Composition API
Composition API yangi yo'l va Options kabi strict yo'lni qo'llamaydi, ya'ni siz Options API aytgan joyga variable, method yoki statelarni yozishingiz shart emas, va buni Composition API yaxshilagan

```vue
<!-- Option API -->
<script>
export default {
  // data() - reactive statelar bilan ishlash uchun
  data() {
    return {
      count: 0,
    };
  },

  //   methods - componentdagi funksiyalar
  methods: {
    increment() {
      this.count++;
    },
  },

  // mounted - component mount (tayyor render) bo'lganidan keyin ishlovchi
  mounted() {
    console.log(`The initial count is ${this.count}.`);
  },
};
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

```vue
<!-- Composition API -->
<script setup>
import { ref, onMounted } from "vue";

// reactive state
const count = ref(0);

// stateni holatini yangilovchi funksiya
function increment() {
  count.value++;
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
</script>

<template>
  <button @click="increment">Qiymat: {{ count }}</button>
</template>
```

</div>
