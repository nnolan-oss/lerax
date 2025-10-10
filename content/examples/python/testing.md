---
title: Testlash (pytest)
summary: pytest bilan birinchi test, assert va ishga tushirish
description: pytest bilan birinchi test, assert va ishga tushirish
date: 2025-10-10
---

## Testlash (pytest)

<div class="my-md-content">

```python
# mathx.py
def add(a, b):
    return a + b
```

```python
# test_mathx.py
from mathx import add

def test_add():
    assert add(2, 3) == 5
```

Ishga tushirish:

```bat
pip install pytest
pytest -q
```

</div>
