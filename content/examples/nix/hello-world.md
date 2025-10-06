---
title: Hello World
description: Nix bilan eng sodda dastur va asosiy tushunchalar
date: 2025-10-01
---

## Hello World

<div class="my-md-content">

Nix — bu ishonchli va takrorlanadigan paketlarni boshqarish uchun moʻljallangan kuchli vosita (package manager), asosan Linux va boshqa Unix (masalan macOS)tizimlarida ishlatiladi. U paketlarni izolyatsiyada quradi, yaʼni bir paketni oʻrnatish yoki yangilash boshqalarni buzmaydi, versiyalarni orqaga qaytarish mumkin va `dependency hell` muammosini hal qiladi. Nix oʻziga xos deklarativ va sof funksional tilga asoslangan boʻlib, paketlar `/nix/store` da hash orqali saqlanadi, bu esa takrorlanuvchanlikni taʼminlaydi.

NixOS bu to'liq nix tili asosida configuration qilinadigan Linux distributive.

- Deklarativlik: Tizim sozlamalari bitta faylda aniqlanadi, bu avtomatlashtirish va barqarorlikni osonlashtiradi.
- Izolatsiya: Paketlar `/nix/store` da alohida saqlanadi, shuning uchun versiya konfliktlari yuzaga kelmaydi.
- Orqaga qaytarish: Tizim yangilanishlari yoki oʻzgarishlarini osongina qaytarish mumkin.
- Nixpkgs: 120 000+ paketlardan iborat katta repozitoriyga ega.

Biz bu qo'llanmada asosan nix package manageri bilan ishlaymiz

```bash
# Nix package managerni o'rnatish macOS
$ sh <(curl --proto '=https' --tlsv1.2 -L https://nixos.org/nix/install)
```

<a class="link" target="_blank" href="https://nixos.org/download/">Boshqa versiyalar</a>

```bash
$ nix --version
```

versiyani ko'rsangiz ishlashi kerak bo'lmasa qayta urinib ko'ring.

va sizda endi nix package manageri bor.

<h3 class="my-section-tag">Foydali resurslar</h3>

- <a target="_blank" href="https://mynixos.com/">mynixos.com - package config bilan ishlash</a>
- <a target="_blank" href="https://discourse.nixos.org/">discourse.nixos.org - savollarga javob topishga</a>
- <a target="_blank" href="https://search.nixos.org">package qidirishga market</a>

</div>
