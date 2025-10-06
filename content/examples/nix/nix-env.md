---
title: nix-env
description: Paketlarni foydalanuvchi darajasida boshqarish
date: 2025-10-01
---

## nix-env

<div class="my-md-content">

`nix-env` - bu Nix paket menejeri bilan ishlaydigan buyruqlar vositasi (command-line tool) bo‘lib, foydalanuvchi muhitida paketlarni o‘rnatish, yangilash, o‘chirish va boshqarish uchun ishlatiladi. U Nixning asosiy vositalaridan biri hisoblanadi va foydalanuvchilarning o‘z OS'larida dasturlarni boshqarishini osonlashtiradi. Ba'zi muammolar bo'lgani uchun uni ishini nix ni 2.4 versiondan `nix profile` bajaryapti

<h3 class="my-section-tag">nix profile install</h3>

```bash
# profilega nixpkgs o'rnatish, bizni holatda `cowsay` package o'rnatilyapti
$ nix profile install nixpkgs#cowsay

# aniq version kerak bo'lsa
$ nix profile install nixpkgs/release-1.09#cowsay

$ nix profile install nixpkgs#nodejs
```

<h3 class="my-section-tag">nix profile list</h3>

```bash
# profilega o'rnatilgan packagelarni ko'rsatadi
$ nix profile list
```

<h3 class="my-section-tag">nix profile remove</h3>

```bash
# o'rnatilgan packageni o'chirish
$ nix profile remove cowsay

# o'rnatilgan hamma packagelarni o'chirish
$ nix profile remove --all

# regex orqali filter qilib o'chirish
$ nix profile remove --regex '.*vim.*'

# nix-store dagi joyidan to'g'ridan-to'g'ri o'chirish
$ nix profile remove /nix/store/rr3y0c6zyk7kjjl8y19s4lsrhn4aiq1z-hello-2.10
```

<h3 class="my-section-tag">nix profile rollback</h3>

```bash
# qovun tushirib o'chirvorgan bo'lsak, profile versioni ortga qaytarishimiz mumkin. bunda har bir rollback qilganimizda version ortga qaytib boraveradi
$ nix profile rollback

# aniq profile versionga qaytish, version 510
$ nix profile rollback --to 510
```

<h3 class="my-section-tag">nix profile rollback</h3>

```bash
# profiledaggi hamma packagelarni yangilash
$ nix profile upgrade --all

# bitta packageni update qilish (cowsay package nomi)
$ nix profile upgrade cowsay

# regex orqali filter qilib yangilash qilish
$ nix profile upgrade --regex '.*vim.*'

```

</div>
