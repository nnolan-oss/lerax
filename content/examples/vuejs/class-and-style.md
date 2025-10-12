---
title: Classlar va style
description: Classlar va style bo'yicha qisqacha ko'rinish
date: 2025-10-05
---

## Classlar va style

<div class="my-md-content">

class va style berish `v-bind` bilan dynamic qilinadi yoki qisqacha `:`

<h3 class="my-section-tag">Object bilan</h3>

```vue
<div :class="{ active: isActive }"></div>
```

`active` class `isActive` true bo'lsagina qo'shiladi

```vue
<div
    class="static"
    :class="{ active: isActive, 'text-danger': hasError }"
></div>
```

static classlar va dynamic classlarni auto merge qiladi

<h3 class="my-section-tag">Array bilan</h3>

```vue
const activeClass = ref('active')
const errorClass = ref('text-danger')

<div :class="[activeClass, errorClass]"></div>

natija:
<div class="active text-danger"></div>
```

```vue
<div :class="[isActive ? activeClass : '', errorClass]"></div>

<div :class="[{ [activeClass]: isActive }, errorClass]"></div>
```

conditionlar bilan


<h3 class="my-section-tag">Inline style</h3>
<h4 class="my-section-tag">Object style</h3>

```vue
const activeColor = ref('red')
const fontSize = ref(30)

<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

natija:
<div style="color: red; fontSize: '30px'"></div>
```

```vue
const styleObject = reactive({
  color: 'red',
  fontSize: '30px'
})

<div :style="styleObject"></div>

natija:
<div style="color: red; fontSize: '30px'"></div>
```

<h4 class="my-section-tag">Array style</h3>

```vue
<div :style="[baseStyles, overridingStyles]"></div>
```

</div>

