---
title: Mutexlar
summary: Murakkab holatni bir nechta goroutina orasida xavfsiz boshqarish uchun mutexdan foydalanish.
date: 2025-09-30
---

## Mutexlar

<div class="my-md-content">
Oldingi misolda atomik sanagichlardan foydalandik. Murakkabroq holat uchun `sync.Mutex` orqali aniq bloklashdan foydalanamiz.

```go
package main

import (
    "fmt"
    "sync"
)

// Container — xaritalar to'plami; uni bir nechta goroutina parallel yangilaydi
// Shu sabab kirishni sinxronlash uchun Mutex qo'shamiz
// Eslatma: mutexlarni nusxalash mumkin emas, struct ko'rsatkich orqali uzatilishi lozim
type Container struct {
    mu       sync.Mutex
    counters map[string]int
}

// Kirishdan oldin lock, oxirida defer orqali unlock
func (c *Container) inc(name string) {
    c.mu.Lock()
    defer c.mu.Unlock()
    c.counters[name]++
}

func main() {
    c := Container{
        counters: map[string]int{"a": 0, "b": 0},
    }

    var wg sync.WaitGroup

    // Belgilangan sanagichni ko'p marotaba oshiruvchi funksiya
    doIncrement := func(name string, n int) {
        for range n {
            c.inc(name)
        }
    }

    // Bir nechta goroutina parallel ishga tushadi; ikkitasi bir xil "a" ga murojaat qiladi
    wg.Go(func() {
        doIncrement("a", 10000)
    })
    wg.Go(func() {
        doIncrement("a", 10000)
    })
    wg.Go(func() {
        doIncrement("b", 10000)
    })

    // Tugashini kutamiz
    wg.Wait()
    fmt.Println(c.counters)
}
```

Terminalda bajarish:
```bash
$ go run mutexes.go
map[a:20000 b:10000]
```

Keyingi bo'limda shu vazifani faqat goroutina va kanallar yordamida qanday bajarishni ko'ramiz.
</div>
