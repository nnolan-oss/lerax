---
title: Hello World
description: Nix bilan eng sodda dastur va asosiy tushunchalar
date: 2025-10-01
---

## Hello World

<div class="my-md-content">

Nix bu declarative


```nix
{ pkgs ? import <nixpkgs> {} }:
pkgs.stdenv.mkDerivation {
  name = "hello-nix";
  src = ./.;
  buildInputs = [ pkgs.hello ];
  installPhase = ''
    mkdir -p $out/bin
    ln -s ${pkgs.hello}/bin/hello $out/bin/hello
  '';
}
```

</div>


