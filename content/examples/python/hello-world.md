---
title: Hello World (Python)
summary: Python’da birinchi dastur va REPL
description: Python’da birinchi dastur va REPL
date: 2025-10-10
---

## Hello World

<div class="my-md-content">

Python’ni ishlatishning ikki asosiy yo‘li bor: REPL (interaktiv) va fayl ishga tushirish.

<h3 class="my-section-tag">REPL</h3>

```bat
python
>>> print("Salom, Python!")
Salom, Python!
```

Chiqish uchun: `exit()` yoki `Ctrl+Z` so‘ng Enter (Windows), `Ctrl+D` (Unix).

<h3 class="my-section-tag">Fayl orqali</h3>

```python
# hello.py
print("Salom, Python!")
```

```bat
python hello.py
```

<h3 class="my-section-tag">F-string va o‘zgaruvchilar</h3>

```python
name = "Lerax"
print(f"Salom, {name}!")
```

<h3 class="my-section-tag">Kichik mashq</h3>

- Foydalanuvchidan ism so‘rang va salom bering.

```python
name = input("Ismingiz? ")
print(f"Salom, {name}!")
```

</div>
