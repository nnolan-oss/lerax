---
title: Typing (type hints) va mypy
summary: Type hints va mypy bilan statik tekshirish asoslari
description: Tiplarni ko‘rsatish, foydasi, mypy bilan tekshirish
date: 2025-10-10
---

## Typing (type hints) va mypy

<div class="my-md-content">

<h3 class="my-section-tag">Asosiy ko‘rinish</h3>

```python
from typing import List, Dict, Optional

def add(a: int, b: int) -> int:
    return a + b

nums: List[int] = [1, 2, 3]
user: Dict[str, Optional[int]] = {"age": None}
```

<h3 class="my-section-tag">mypy bilan tekshirish</h3>

```bat
pip install mypy
mypy your_project/
```

<h3 class="my-section-tag">dataclass + typing</h3>

```python
from dataclasses import dataclass
from typing import Optional

@dataclass
class User:
    name: str
    age: Optional[int] = None
```

</div>
