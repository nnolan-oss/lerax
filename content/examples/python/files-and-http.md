---
title: Fayllar va HTTP
summary: Fayl I/O, JSON bilan ishlash va requests orqali HTTP
description: Fayl I/O, JSON bilan ishlash, requests orqali HTTP
date: 2025-10-10
---

## Fayllar va HTTP

<div class="my-md-content">

<h3 class="my-section-tag">Fayl I/O</h3>

```python
# yozish
with open("data.txt", "w", encoding="utf-8") as f:
    f.write("salom\n")

# o‘qish
with open("data.txt", "r", encoding="utf-8") as f:
    print(f.read())
```

<h3 class="my-section-tag">JSON</h3>

```python
import json
user = {"name": "Ali", "age": 20}
js = json.dumps(user, ensure_ascii=False)
print(js)
print(json.loads(js))
```

<h3 class="my-section-tag">HTTP (requests)</h3>

```python
import requests
resp = requests.get("https://api.github.com", timeout=10)
print(resp.status_code)
print(resp.headers.get("content-type"))
print(resp.json())
```

</div>
