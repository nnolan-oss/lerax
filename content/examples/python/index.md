---
title: Pythonga kirish
summary: Python haqida umumiy ma’lumot, o‘rnatish, tez start, venv va darslar ro‘yxati
description: Python haqida umumiy ma’lumot, o‘rnatish, tez start va foydali manbalar
date: 2025-10-10
---

## Python nima va nimaga kerak?

<div class="my-md-content">

Python — yuqori darajadagi, o‘qilishi oson va kuchli standart kutubxonaga ega dasturlash tili. Web-backend (Django, FastAPI), data science (NumPy, Pandas), avtomatlashtirish (skriptlar), DevOps (CI/CD), testlash (pytest) va ko‘plab boshqa sohalarda qo‘llanadi.

Afzalliklar:
- Soddalik: sintaksis sodda, boshlash oson.
- Katta ekotizim: millionlab paketlar (PyPI), keng dokumentatsiya.
- Ko‘p platformalilik: Windows, macOS, Linux.

Kamchiliklar:
- C/C++ ga nisbatan sekinroq (interpretrlangan til), lekin ko‘p holatda yetarli.
- Ba’zi joylarda versiya/virtual muhit boshqaruvi talab etiladi — venv buni hal qiladi.

<h3 class="my-section-tag">O‘rnatish</h3>

Windows (winget yoki rasmiy installer):

```bat
winget install Python.Python.3.12
python --version
py --version
```

macOS (Homebrew):

```bash
brew install python
python3 --version
```

Linux (Debian/Ubuntu):

```bash
sudo apt update && sudo apt install -y python3 python3-venv python3-pip
python3 --version
```

<h3 class="my-section-tag">Tez start</h3>

REPL (interaktiv):

```bat
python
>>> print("Salom, Python!")
```

Yoki fayl orqali:

```python
# hello.py
print("Salom, Python!")
```

```bat
python hello.py
```

<h3 class="my-section-tag">Virtual muhit (venv) va paketlar</h3>

Windows (CMD):

```bat
py -m venv .venv
.venv\Scripts\activate
python -m pip install --upgrade pip
pip install requests
pip freeze > requirements.txt
```

macOS/Linux:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install requests
pip freeze > requirements.txt
```

<h3 class="my-section-tag">Darslar</h3>

- [Hello World](/examples/python/hello-world)
- [Asosiy tushunchalar](/examples/python/basics)
- [Nazorat oqimi (if/for/while)](/examples/python/control-flow)
- [Funksiyalar](/examples/python/functions)
- [Venv va paketlar](/examples/python/venv-and-packages)
- [Fayllar va HTTP](/examples/python/files-and-http)
- [OOP va dataclass](/examples/python/oop)
- [Typing (type hints) va mypy](/examples/python/typing)
- [Asinxronlik (async/await)](/examples/python/async)
- [Testlash (pytest)](/examples/python/testing)
- [CLI (argparse)](/examples/python/cli)
- [FastAPI bilan REST API](/examples/python/fastapi)

<h3 class="my-section-tag">Foydali resurslar</h3>

- <a target="_blank" href="https://github.com/JahongirHakimjonov">Foydali loyihalar</a>
- <a target="_blank" href="https://dev.jakhangir.uz">Foydali maqolalar</a>
- <a target="_blank" href="https://www.python.org/">python.org</a>
- <a target="_blank" href="https://docs.python.org/3/">Python rasmiy hujjatlar</a>
- <a target="_blank" href="https://pypi.org/">PyPI — paketlar ombori</a>
- <a target="_blank" href="https://realpython.com/">Real Python — maqolalar</a>
- <a target="_blank" href="https://fastapi.tiangolo.com/">FastAPI hujjatlari</a>

</div>

