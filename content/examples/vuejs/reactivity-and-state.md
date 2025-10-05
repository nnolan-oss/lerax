---
title: Hello world
description: Vue da loyiha yaratish, boshlang'ich tushunchalar
date: 2025-10-05
---

## Hello World

<div class="my-md-content">

Reactivity dynamic contentlar bilan ishlashga ham keldik!

### ref()
Vue'da odatda `ref()` ishlatiladi Reactdagi `useState()` kabi, lekin ishlatilishi sal boshqacha

`ref` qiymatni saqlab turadi, va uni yangilash mumkin

```js
import { ref } from "vue";

const count = ref(0);
```

qiymatni olish `refName.value` orqali bo'ladi

```ts
const count = ref(0);

console.log(count); // { value: 0 }
console.log(count.value); // 0

count.value++;
console.log(count.value); // 1
```

Nega biz `ref` qiymatiga to'g'ridan to'g'ri kira olmaymiz? `refName.value` kerak

```js
// Ref shunday tuzilgan va u qiymat object ichida yotibdi
const myRef = {
  _value: 0,
  get value() {
    track()
    return this._value
  },
  set value(newValue) {
    this._value = newValue
    trigger()
  }
}
```


### reactive()

`ref` dan farqli u object ichida qiymatni saqlamaydi, o'zi uchun alohida object yaratadi

```js
import { reactive } from 'vue'

const state = reactive({ count: 0 })
```

```vue
<button @click="state.count++">
  {{ state.count }}
</button>
```

* Qisqa qilib aytadigan bo'lsa, `ref()` bu primitive qiymatlar uchun, `reactive()` esa object turdagilar uchun deb tushunsak bo'ladi

</div>
