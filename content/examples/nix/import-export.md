---
title: Import/export
description: Fayllarni import qilish va atributlarni export qilish
date: 2025-10-01
---

## Import/export

<div class="my-md-content">

nix da asosan import/export nix yoki JSOn fayllar uchun ishlatiladi

```nix
# config.nix
{
    name = "Odam";
    age = 12;
}
```

```nix
# default.nix
let
    lib = import ./config.nix;
in lib.name # "Odam"
```

bu yerda config.nix dagi qiymatni `lib` variable qilib import qilib olyapmiz, va bizda `lib.` qilish orqali `config.nix` dagi qiymatlarga ruxsatimiz bo'ladi.

```nix
# myModule.nix
{ pkgs }:

{
  appName = "Odim";
  buildInputs = [ pkgs.nodejs pkgs.git ];
}
```

`myModule.nix` ga `pkgs` inheritance bo'lib kiryapti,

```nix
# default.nix
let
  pkgs = import <nixpkgs> {};
  myModule = import ./myModule.nix { inherit pkgs; };
in
  myModule.appName

# Natija: "Odim"
```

`myModule` import qilishda unga inherit qilib import qilib olingan `nixpkgs` kiryapti

</div>
