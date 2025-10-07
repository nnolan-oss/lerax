---
title: nix-shell
description: Izolyatsiya qilingan development muhit yaratish
date: 2025-10-01
---

## nix-shell

<div class="my-md-content">

`nix-shell` vaqtinchalik izolatsiyalangan environment yaratish uchun. Masalan sizga `nodejs` version 20 kerak, lekin siz uchun to'g'ridan-to'g'ri OS darajasida emas shunchaki vaqtinchalik faqat bitta terminal sessiyasi uchun o'rnatishimiz mumkin.

`shell.nix` fayl ochamiz, `nix-shell` qilganimizda automatik `shell.nix` faylni qidiradi.

`shell.nix` fayl ichiga:

```nix
{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  packages = [
    pkgs.nodejs_20
    pkgs.git
  ];
}
```

bu misolda `nodejs_20` va `git` packagelaridan iborat enviroment yaratib beryapti (o'zizga moslab olishiz mumkin) paketlar <a class="link" target="_blank" href="https://search.nixos.org/packages">bu yerda</a>.

```bash
nix-shell
node -v
git --version
```

endi bizda nodejs version 20 va git mavjud bo'lgan enviroment bor, lekin bu sistemaga to'g'ridan to'g'ri emas faqat, shu terminal session uchun yaratildi, agar siz

```bash
exit
```

qilib terminaldan chiqib ketsangiz, endi sizda bu nodejs va git versionlari yo'q, bu bilan OS toza saqlanadi va qo'shimcha vaqtinchalik packagelar tizimni chalkash qilmaydi,

</div>
