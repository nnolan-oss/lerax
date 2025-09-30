---
title: Atomik sanagichlar (atomic counters)
summary: sync/atomic yordamida ko'p goroutinali muhitda xavfsiz sanash.
date: 2025-09-30
---

## Atomik sanagichlar

<div class="my-md-content">
Go'da holatni boshqarishning asosiy usuli — kanallar orqali aloqa. Biroq ba'zi hollarda `sync/atomic` orqali atomik sanagichlar ham qulay.

```go
package main

import (
    "fmt"
    "sync"
    "sync/atomic"
)

func main() {
    // Ijobiy sanagich: atomik tip
    var ops atomic.Uint64

    // Barcha goroutinalar tugashini kutish uchun WaitGroup
    var wg sync.WaitGroup

    // 50 ta goroutina ishga tushiramiz; har biri 1000 martadan oshiradi
    for range 50 {
        wg.Go(func() {
            for range 1000 {
                // Atomik oshirish
                ops.Add(1)
            }
        })
    }

    // Hamma tugaguncha kutamiz
    wg.Wait()

    // Hech kim yozmayapti, lekin Load bilan atomik o'qish xavfsiz
    fmt.Println("ops:", ops.Load())
}
```

Natija kutilganidek 50,000 bo'ladi. Oddiy `ops++` ishlatilsa, raqamlar runlar orasida o'zgarib ketishi va `-race` bilan data race aniqlanishi mumkin.

Terminalda bajarish:
```bash
$ go run atomic-counters.go
ops: 50000
```

Keyingi bo'limda holatni boshqarish uchun `mutex` larni ko'rib chiqamiz.
</div>
