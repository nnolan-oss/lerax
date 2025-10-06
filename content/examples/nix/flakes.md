---
title: Flakes
description: Flake formati va lock fayllar
date: 2025-10-01
---

## Flakes

<div class="my-md-content">

```nix
{
  description = "Example flake";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  outputs = { self, nixpkgs }:
    let pkgs = import nixpkgs { system = "x86_64-linux"; };
    in {
      packages.x86_64-linux.default = pkgs.hello;
    };
}
```

</div>


