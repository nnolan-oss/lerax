---
title: Shartli renderlash
description: Shartli renderlash bo'yicha qisqacha ko'rinish
date: 2025-10-05
---

## Shartli renderlash

<div class="my-md-content">

<h3 class="my-section-tag">v-if</h3>

```vue
<h1 v-if="isLoading">Yuklanmoqda...</h1>
<h1 v-else>Vue is awesome!</h1>
```

agar `isLoading` true qiymat bo'lsagina render bo'ladi

```vue
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

<h3 class="my-section-tag">v-show</h3>

```vue
<h1 v-show="isShow">Yuklanmoqda...</h1>
```

bu `v-if` ga o'xshab ketadi, condition true bo'lsa render qiladi, `else` block yo'q shuning uchun `false` bo'lsa render
qilinmaydi

</div>

