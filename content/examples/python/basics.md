---
title: Asosiy tushunchalar
summary: O‘zgaruvchilar, turlar, kolleksiyalar, stringlar va amallar
description: O‘zgaruvchilar, turlar, kolleksiyalar va oddiy amallar
date: 2025-10-10
---

## Asosiy tushunchalar

<div class="my-md-content">

<h3 class="my-section-tag">O‘zgaruvchilar va turlar</h3>

```python
x = 42              # int
pi = 3.14           # float
s = "hello"         # str
is_ok = True        # bool
n = None            # NoneType
```

<h3 class="my-section-tag">Kolleksiyalar</h3>

```python
nums = [1, 2, 3]                # list
point = (10, 20)                # tuple
user = {"name": "Ali", "age": 20}  # dict
unique = {1, 2, 2, 3}           # set -> {1, 2, 3}
```

<h3 class="my-section-tag">Stringlar</h3>

```python
name = "Ali"
print(name.upper())
print(len(name))
print(f"Ism: {name}")
```

<h3 class="my-section-tag">Arifmetik va mantiqiy amallar</h3>

```python
print(1 + 2, 5 - 3, 6 * 7, 7 / 2, 7 // 2, 7 % 2, 2 ** 3)
print(True and False, True or False, not True)
```

<h3 class="my-section-tag">Kichik mashq</h3>

- Ro‘yxatdagi juft sonlarni ajratib oling.

```python
nums = [1,2,3,4,5,6]
juft = [n for n in nums if n % 2 == 0]
print(juft)  # [2, 4, 6]
```

</div>
