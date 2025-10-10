---
title: CLI (argparse)
summary: argparse yordamida buyruq qatori utilitasi yozish
description: buyruq qatori utilitasi yozish
date: 2025-10-10
---

## CLI (argparse)

<div class="my-md-content">

```python
# greet.py
import argparse

p = argparse.ArgumentParser()
p.add_argument("name")
p.add_argument("--greeting", default="Salom")
args = p.parse_args()

print(f"{args.greeting}, {args.name}!")
```

```bat
python greet.py Ali --greeting=Assalomu alaykum
```

</div>
