---
title: List renderlash
description: List renderlash bo'yicha qisqacha ko'rinish
date: 2025-10-05
---

## List renderlash v-for

<div class="my-md-content">

List elementlarni render qilish vue da sal boshqacha, Reactdagi kabi JS syntax emas

<h3 class="my-section-tag">Array bilan</h3>

```vue
const items = ref([
    { message: 'Foo' }, 
    { message: 'Bar' }
])

<li v-for="item in items">
  {{ item.message }}
</li>
```
bunda `v-for` iteratsiya qilinadigan `items` ni `item` ga ajratadi, va o'rab turgan childlari uchun provider vazifasini bajaradi, `item` faqat shu provider ichida ishlaydi,


<h3 class="my-section-tag">Object bilan</h3>

```vue
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})

<ul>
  <li v-for="value in myObject">
    {{ value }}
  </li>
</ul>

<li v-for="(value, key) in myObject">
  {{ key }}: {{ value }}
</li>
```
objectlar bilan ishlashda `key` `value` ni alohida ajratib olishimiz mumkin

<h3 class="my-section-tag">Range bilan</h3>

```vue
    <span v-for="n in 10">{{ n }}</span>
```


<h3 class="my-section-tag">Template bilan</h3>
```vue
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```

<h3 class="my-section-tag">v-for va v-if</h3>

```vue
<li v-for="item in items" v-if="!item.isCompleted">
  {{item.name}}
</li>
```

bunda `v-if` dagi condition `items` ni filter qilib beryapti, lekin bu yirik calculationlar uchun ishlatish maslahat berilmaydi, `computed()` qilib keyin render qiling

</div>

