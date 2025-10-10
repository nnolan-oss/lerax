---
title: Asinxronlik (async/await)
summary: asyncio, tasklar, await va gather yordamida I/O asinxronligi
description: asyncio, tasklar, await va gather
date: 2025-10-10
---

## Asinxronlik (async/await)

<div class="my-md-content">

```python
import asyncio

async def work(n):
    await asyncio.sleep(1)
    return f"done {n}"

async def main():
    tasks = [asyncio.create_task(work(i)) for i in range(3)]
    res = await asyncio.gather(*tasks)
    print(res)

asyncio.run(main())
```

Diqqat: CPU-yonalishli ishlar uchun `multiprocessing` yoki C kutubxonalaridan foydalanish ma’qul, `asyncio` I/O uchun kuchli.

</div>
