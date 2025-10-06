---
title: Language-specific dev environment
description: Tilga xos dev muhitlarini yaratish (Node, Python, Go)
date: 2025-10-01
---

## Language-specific dev environment

<div class="my-md-content">

```nix
{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  packages = [ pkgs.nodejs pkgs.python3 pkgs.go ];
}
```

</div>


