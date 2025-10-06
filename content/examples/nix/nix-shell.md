---
title: nix-shell
description: Izolyatsiya qilingan development muhit yaratish
date: 2025-10-01
---

## nix-shell

<div class="my-md-content">

```nix
{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  packages = [ pkgs.nodejs pkgs.git ];
}
```

```bash
nix-shell
node -v
git --version
```

</div>


