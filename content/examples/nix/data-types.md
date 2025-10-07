---
title: Ma'lumot turlari
description: Nixdagi asosiy ma'lumot turlari: string, number, bool, attrs, lists
date: 2025-10-01
---

## Ma'lumot turlari

<div class="my-md-content">

```nix
{
  # oddiy string 
  str = "text";

  # multiline string
  str2 = ''
    text 
    salom
  '';

  # raqamlar
  num = 42;

  # boolean 
  flag = true;

  # listlar
  list = [ 1 2 3 ];

  # attrs (object)
  attrs = { a = 1; b = 2; };

  # bo'shliq qiymat
  x = null;

  # pathlar string bo'lmaydi " " larsiz yoziladi
  path = ./default.nix;

  # biror qiymatni turini aniqlash, builtins bilan keyin batafsil gaplashamiz
  builtins.typeOf qiymat
}
```

</div>
