---
title: Declarative konfiguratsiya
description: Tizim sozlamalarini deklarativ tarzda boshqarish
date: 2025-10-01
---

## Declarative konfiguratsiya

<div class="my-md-content">

```nix
{ config, pkgs, ... }:
{
  services.openssh.enable = true;
  users.users.me.isNormalUser = true;
}
```

</div>


