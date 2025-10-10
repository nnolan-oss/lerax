---
title: Nazorat oqimi (if/for/while)
summary: if/elif/else, for, while, enumerate va comprehension
description: Shartlar, sikllar, range/enumerate va comprehension
date: 2025-10-10
---

## Nazorat oqimi

<div class="my-md-content">

<h3 class="my-section-tag">if/elif/else</h3>

```python
x = 10
if x > 10:
    print("katta")
elif x == 10:
    print("teng")
else:
    print("kichik")
```

<h3 class="my-section-tag">for/while</h3>

```python
for i in range(3):
    print(i)

n = 3
while n > 0:
    print(n)
    n -= 1
```

<h3 class="my-section-tag">enumerate va comprehension</h3>

```python
xs = ["a", "b", "c"]
for i, v in enumerate(xs):
    print(i, v)

kv = [n*n for n in range(5)]  # [0,1,4,9,16]
```

</div>
