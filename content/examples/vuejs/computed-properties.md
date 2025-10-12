---
title: Computed properties
description: Computed properties bo'yicha qisqacha ko'rinish
date: 2025-10-05
---

## Computed properties

<div class="my-md-content">

Ok unda davom etamiz, `reactive` ni ko'rdik, endi shuni keshlashni o'rganamiz. 

`reactive()` biz began reference qiymatni watch modega o'tkazadi va ichidagi qiymat change bo'lsa UI da shu reactive ishlatilgan joyni qayta render qiladi.

```ts
import { reactive } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide'
  ]
})

const publishedBooksMessage = author.books.length > 0 ? 'Yes' : 'No'
```

bunda avtorni publish qilingan kitoblari bor yoki yo'qligi aniqlanyapti, va bu jarayon har bir renderda qayda hisoblanadi, tasavvur qiling sizda 10klik qiymat bor shuni ichidan bitta filter calculation qilishiz sizga qanchalik qimmatga tushadi? shu muammo yechimi sifatida `computed()` ga tayanamiz, bu huddi Reactdagi `useCallback` `useMemo` larga o'xshaydi

`computed()`

```ts
import { reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: ['Vue 2', 'Vue 3', 'Vue 4']
})

const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
```
bunday holatda birinchi renderda publish books qiymati aniqlanadi va keyingi renderlarda bu process qayta amalga oshirilmaydi, bu esa performanceni oshiradi, qayta render faqat `author.books` o'zgarsa amalga oshadi

</div>

