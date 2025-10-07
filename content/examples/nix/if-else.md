---
title: If/else
description: Nixda shartli ifodalar
date: 2025-10-01
---

## If/else

<div class="my-md-content">

```nix
let
    x = 3;
in
    if x > 2
    then "katta"
    else if x = 0
    then "teng"
    else "kichik"
```

`if` bilan shart beriladi, shart to'g'ri bo'lsa `then` bilan handle qilinadi, yolg'on bo'lsa `else` ishlaydi, `else if` bilan qo'shimcha shart qo'shish mumkin.

```nix
let
  isDev = true;
in
  if isDev then "development" else "production"
```

`isDev` true qiymat, bunda siz uni true ekanligini shart bilan tekshirishiz kerakmas `isDev = true` kabi.

```nix
let
  person = { name = "Neo"; active = true; };
in
  if person.active then "Welcome ${person.name}" else "Access denied"
```

attrs (object) bilan ishlashga

```nix
let
  a = true;
  b = false;
in
  if a && !b then "ok" else "fail"
```

boolean expressionlar bilan ishlash

</div>
