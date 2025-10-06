---
title: Overlays & package override
description: Paketlarni override qilish va overlays bilan kengaytirish
date: 2025-10-01
---

## Overlays & package override

<div class="my-md-content">

```nix
self: super: {
  hello = super.hello.overrideAttrs (old: { pname = "hello-custom"; });
}
```

</div>


