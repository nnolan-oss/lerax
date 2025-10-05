---
title: Hello world
description: Vue da loyiha yaratish, boshlang'ich tushunchalar
date: 2025-10-05
---

## Hello World

<div class="my-md-content">

Vue'da UI component qismi `template` deb nomlanadi

```vue
<template>
  <button>Bos!</button>
</template>
```

Dynamic kontentni ko'rsatish

```vue
<span>Message: {{ msg }}</span>
```

HTML ni raw (oddiy text) holatida renderlash

```html
<p>Kontent: {{ rawHtml }}</p>
<p>v-html bilan: <span v-html="rawHtml"></span></p>
```

```html
Oddiy dynamik content: <span style="color: red">Qizil.</span>

v-html bilan: Qizil.
```

Attributelar bilan ishlash

```vue
<div v-bind:id="dynamicId" v-bind:class="card"></div>
```

```vue
<div :id="dynamicId"></div>
```

Ikkala variant ham to'g'ri siz `v-bind` ni qisqartirib yozishiz mumkin `:` singari.

Agar ikkovi birga yozilsa ham ishlaydi

```vue
<div v-bind:id="dynamicId" v-bind:class="card"></div>
<div :id="dynamicId"></div>
```

Dynamik holatda attributelarni bog'lash

```js
const objectOfAttrs = {
  id: "container",
  class: "wrapper",
  style: "background-color:green",
};
```

```vue
<div v-bind="objectOfAttrs"></div>
```

### Javscript expressionlar

```vue
{{ number + 1 }}

{{ ok ? "YES" : "NO" }}

{{ message.split("").reverse().join("") }}

<div :id="`list-${id}`"></div>
```

Funksiyalar e'lon qilish

```vue
<time :title="toTitleDate(date)" :datetime="date">
  {{ formatDate(date) }}
</time>
```

</div>
