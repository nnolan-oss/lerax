---
title: OOP va dataclass
summary: Klasslar, meros olish, maxsus metodlar va dataclass
description: Klasslar, meros olish, maxsus metodlar va dataclass
date: 2025-10-10
---

## OOP va dataclass

<div class="my-md-content">

<h3 class="my-section-tag">Klasslar</h3>

```python
class Counter:
    def __init__(self, start=0):
        self.value = start

    def inc(self):
        self.value += 1

    def __repr__(self):
        return f"Counter(value={self.value})"

c = Counter()
c.inc()
print(c)
```

<h3 class="my-section-tag">Meros olish</h3>

```python
class Animal:
    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        return "woof"

print(Dog().speak())
```

<h3 class="my-section-tag">dataclass</h3>

```python
from dataclasses import dataclass

@dataclass
class User:
    name: str
    age: int

u = User("Ali", 20)
print(u)
```

</div>
