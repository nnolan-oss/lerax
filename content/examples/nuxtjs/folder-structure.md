---
title: Papka structure
description: Nuxt da papkalar strukturasi
date: 2025-10-01
---

# Papka tuzilishi

<div class="my-md-content">

Nuxt da loyiha papka structurasi strict (qat'iy) hisoblanib, community undan foydalanishni maslahat beradi.
Quyida <a href="https://nuxt.com/docs/4.x/guide" class="link" target="_blank">Nuxt 4 loyihasi </a> ning odatiy papka strukturasini ko‘rib chiqamiz.

```zsh
├── .nuxt/          # Nuxt runtime build fayllari (auto generated)
├── .output/        # Production build
├── app/
│   ├── assets/     # CSS, image, font va boshqa resurslar
│   ├── components/ # Vue komponentlari
│   ├── composables/ # Reusable composable (hooks) funksiyalar
│   ├── layouts/    # Umumiy layout fayllari
│   ├── middleware/ # Route middleware
│   ├── pages/      # Routelar asosiy papkasi
│   ├── plugins/    # Vue/Nuxt pluginlari
│   ├── utils/      # Yordamchi funksiyalar
│   ├── app.vue     # Root komponent (App.tsx)
│   ├── app.config.ts # Global konfiguratsiya
│   └── error.vue   # Error page
├── content/        # Markdown kontent (nuxt/content)
├── modules/        # Custom yoki external Nuxt modullar
├── node_modules/   # NPM paketlar
├── public/         # Static fayllar (to‘g‘ridan-to‘g‘ri / orqali serve qilinadi)
├── server/         # API endpoint va server taraf kod
├── shared/         # Client & serverda ishlatiladigan umumiy kod
├── .env            # Environment o‘zgaruvchilari
├── .gitignore      # Git ignor fayli
├── .nuxtignore     # Nuxt uchun ignor fayli
├── .nuxtrc         # Nuxt RC konfiguratsiya fayli
├── nuxt.config.ts  # Asosiy Nuxt konfiguratsiya fayli
├── package.json    # Project dependencies va scriptlar
└── tsconfig.json   # TypeScript konfiguratsiya
```

</div>
