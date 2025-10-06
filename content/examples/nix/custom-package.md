---
title: Custom package yozish
description: O'z paketimizni nixpkgs uslubida yozish
date: 2025-10-01
---

## Custom package

<div class="my-md-content">

```nix
{ stdenv, fetchFromGitHub }:
stdenv.mkDerivation {
  pname = "mytool";
  version = "0.1.0";
  src = fetchFromGitHub { owner = "me"; repo = "mytool"; rev = "v0.1.0"; sha256 = "sha256-..."; };
}
```

</div>


