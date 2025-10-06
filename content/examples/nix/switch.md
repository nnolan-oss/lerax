---
title: Switch
description: Pattern matchingga o'xshash select-case uslubi (built-in emas)
date: 2025-10-01
---

## Switch

<div class="my-md-content">

Nixda bevosita `switch` yo'q, ammo `builtins.match` yoki attribute map orqali simulyatsiya qilish mumkin.

```nix
let
  choice = "a";
  table = { a = 1; b = 2; c = 3; };
in table.${choice}
```

</div>


