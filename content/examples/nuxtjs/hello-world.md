---
title: Hello world
description: Nuxt da loyiha yaratish, boshlang'ich tushunchalar
date: 2025-10-01
---

## Hello World

<div class="my-md-content">
Ok unda boshladik, Nuxt bu VueJS ustiga qurilgan web frameworkligini bildik,

```bash
$ npm create nuxt@latest <project-name> # project yaratish

$ cd <project-name> # yaratilgan projectga kirish

$ npm run dev -- -o # development holatida ishga tushirish

```

Nuxtga component structuresi juda oddiy bo'lingan, har bir component o'zini alohida, template (UI), script (skriptlash va dynamic qismi), style (dizaynlash) qismlaridan iborat bo'ladi

```vue
#Vue
<script setup>
const count = ref(0);
</script>
<template>
  <button class="btn" @click="count++">
    Cook! {{ count }}
  </button>
</template>
<style>
.btn {
  background: "red";
}
</style>
```

- `template` - bu yerda huddi Reactdagi return qilinadigan react node ga o'xshaydi
- `script` - skriptlash, dynamic, logikalarni yozish uchun kerak
- `style` - dizaynlash

```tsx
#React;
export default function Button() {
  // script
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount++;
  };

  // template
  return (
    // style alohida fayl yoki inline
    <button className="btn" onClick={increment}>
      Cook! {count}
    </button>
  );
}
```

```css
.btn {
  background: "red";
}
```

</div>
