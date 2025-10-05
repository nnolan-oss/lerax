---
title: Hello world
description: Vue da loyiha yaratish, boshlang'ich tushunchalar
date: 2025-10-05
---

## Hello World

<div class="my-md-content">

Vue'ni syntax ko'proq HTMl structurega tortadi, blaki shu narsa uni backendchilar tanlashiga sababdir yana kim bilsin. Agar sizda HTML template bo'ladigan bo'lsa uni React codebase'ga o'tkazishdan ko'ra Vue'ga o'tkazish siz uchun osonroq va kam harajat bo'lishi mumkin.

Ok unda boshladik!

```ts
// Minimal Vue example
import { createApp, ref } from "vue";

createApp({
  setup() {
    return {
      count: ref(0),
    };
  },
}).mount("#app");
```

- `createApp()` bu yerda HTMl rootga Vue appni bind qilyapti,
- `#app` bu root huddi Reactdagi `#root` kabi
- `setup()` shu component mount bo'lganda ishga tushadigan kod

```vue
<div id="app">
  <button @click="count++">
    Count is: {{ count }}
  </button>
</div>
```

bu esa Vue dagi template namuna,

- `@click` bu Reactdagi `onClick` kabi, Vueda `on` o'rniga `@` ishlatib ketsangi bo'ldi.
- `{{ chop_etiluvchi }}` bu Reactdagi `${}` kabi siz biror HTML code ichida dynamic ishlata olishiz uchun
</div>
