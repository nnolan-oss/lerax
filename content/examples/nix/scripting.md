---
title: Nix skriptlash
description: Nix tilida skript yozishning asosiy tushunchalari
date: 2025-10-01
---

## Nix skriptlash

<div class="my-md-content">

Minimal Nix ifoda misoli:

```nix
let
  pkgs = import <nixpkgs> {};
in {
  greeting = "salom";
  twoPlusTwo = 2 + 2;
}
```

</div>


