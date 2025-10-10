---
title: Funksiyalar
summary: Parametrlar, qaytarish, *args/**kwargs, lambda va docstring
description: Parametrlar, qaytarish, *args/**kwargs, lambda va docstring
date: 2025-10-10
---

## Funksiyalar

<div class="my-md-content">

```python
def add(a, b):
    """Ikki sonni qo‘shadi"""
    return a + b

print(add(2, 3))
```

<h3 class="my-section-tag">Default qiymatlar va *args/**kwargs</h3>

```python
def greet(name, greeting="Salom"):
    print(f"{greeting}, {name}!")

def total(*nums):
    return sum(nums)

def show(**opts):
    print(opts)
```

<h3 class="my-section-tag">Lambda</h3>

```python
inc = lambda x: x + 1
print(inc(5))
```

</div>
