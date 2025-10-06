---
title: DevShell yaratish
description: Flake yordamida rivojlantirish muhiti
date: 2025-10-01
---

## DevShell

<div class="my-md-content">

```nix
devShells.x86_64-linux.default = pkgs.mkShell { packages = [ pkgs.nodejs ]; };
```

</div>


