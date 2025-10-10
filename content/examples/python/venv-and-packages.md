---
title: Venv va paketlar
summary: Virtual muhit yaratish, pip bilan ishlash va requirements.txt
description: Virtual muhit yaratish, pip bilan ishlash, requirements.txt
date: 2025-10-10
---

## Venv va paketlar

<div class="my-md-content">

<h3 class="my-section-tag">Virtual muhit yaratish</h3>

Windows (CMD):

```bat
py -m venv .venv
.venv\Scripts\activate
python -m pip install --upgrade pip
```

macOS/Linux:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
```

<h3 class="my-section-tag">Paket o‘rnatish va muzlatish</h3>

```bat
pip install requests
pip freeze > requirements.txt
```

Qayta tiklash:

```bat
pip install -r requirements.txt
```

<h3 class="my-section-tag">Kichik mashq</h3>

- `requests` bilan https://httpbin.org/json dagi ma’lumotni o‘qing.

```python
import requests
r = requests.get("https://httpbin.org/json", timeout=10)
print(r.status_code)
print(r.json())
```

</div>
