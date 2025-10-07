---
title: Cachix va binary cache
description: Binary cache bilan tezroq buildlar
date: 2025-10-01
---

## Builtins

<div class="my-md-content">

nixda `builtins` default o'zida bo'lgan funksiya va xususiyatlar

```nix
    # qiymatni stringa o'tkazish
    builtins.toString 12 # "12"

    builtins.isInt 12 # true
    builtins.isString "12" # true
    builtins.isBool false # true
    builtins.isList [ 12 22] # true
    builtins.isNull null # true

    builtins.typeOf "salom" # string

    builtins.stringLength "salom" # 5

    builtins.filter (x: x > 2) [2, 4, 1, 0, 5] # [ 4 5 ]
    builtins.map (x: x * 2) [2 4 1] # [ 4 8 2 ]
    builtins.elemAt [100 23 12] 1 # 23 index 0 dan boshlanadi

    builtins.attrNames {name = "Neo"; age = 12;} # ["name" "age"]
    builtins.attrValues {name = "Neo"; age = 12;} # ["Neo" 12]
    builtins.hasAttr "name" {name = "Neo"; age = 12;} # true
    builtins.getAttr "name" {name = "Neo"; age = 12;} # "Neo"
    builtins.removeAttr {name = "Neo"; age = 12;} ["name"] # { age = 12;}

    builtins.readFile ./readme.txt # readme dagi text content
    builtins.toPath "./readme.txt" # stringdan pathga
    builtins.pathExists ./readme.txt # fayl mavjudligini tekshirish
    builtins.readDir ./. # papkalar ro'yxatini olish

    builtins.toJSON { name = "Neo" } # nix -> JSON
    builtins.fromJSON ''{ "name": "Neo" }'' # JSON -> nix
    builtins.toFile "test.txt" "Salom kontent!"

```

<a class="link" target="_blank" href="https://nix.dev/manual/nix/2.23/language/builtins">Ko'proq builtins</a>

</div>
