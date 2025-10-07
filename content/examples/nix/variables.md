---
title: O'zgaruvchilar
description: Nix da o'zgaruvchilar va let/in bloklari
date: 2025-10-01
---

## O'zgaruvchilar

<div class="my-md-content">

```nix
let
  name = "Nix";
  system = "linux";
in "Salom ${name}! ${system}"
```

`let ... in ...` o'zgaruvchilar bilan ishlash uchun kerak, bunda `let` variable e'lon qilish qismi, `in` e'lon qilingan variableni ishlatish. qator oxirida `;` qo'yishni esdan chiqarmang

```nix
let
  rec person = {
    name = "Odam";
    greeting = "Salom, ${name}!";
  };
in
  person.greeting
```

bu yerda `person` ichidan turib o'zini ichidagi qiymatlar bilan ishlashi uchun uni rekursiv qilishimiz kerak, `rec` bilan buni hal qilamiz, keyin ko'ramiz `self` ishlatiladigan joylari ham bor ), unda `self.name` qilsak ham bo'ladi

endi qilib bo'lgan ishlarimizni, bitta `.nix` faylga saqlab

```bash
nix-instantiate --eval file.nix
```

qilib yurgizamiz

</div>
