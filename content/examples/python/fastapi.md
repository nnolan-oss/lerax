---
title: FastAPI bilan REST API
summary: FastAPI bilan minimal REST API, endpointlar va ishga tushirish
description: Minimal API, ishga tushirish va oddiy endpointlar
date: 2025-10-10
---

## FastAPI bilan REST API

<div class="my-md-content">

O‘rnatish va ishga tushirish:

```bat
pip install fastapi uvicorn[standard]
uvicorn app:app --reload --port 8000
```

`app.py`:

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float

@app.get("/")
def root():
    return {"hello": "world"}

@app.post("/items")
def create_item(item: Item):
    return {"ok": True, "item": item}
```

Brauzer: http://127.0.0.1:8000/docs — avtomatik Swagger UI.

</div>
