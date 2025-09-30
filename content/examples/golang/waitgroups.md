---
title: WaitGroup
summary: Bir nechta goroutinalarni kutish uchun WaitGroup'dan foydalanish.
date: 2025-09-30
---

## WaitGroup

<div class="my-md-content">
Bir nechta goroutinalar tugashini kutish uchun `sync.WaitGroup` dan foydalanish mumkin.

```go
package main

import (
    "fmt"
    "sync"
    "time"
)

// Har bir goroutina ichida ishlaydigan funksiya
func worker(id int) {
    fmt.Printf("Worker %d starting\n", id)

    // Qimmat ishni taqlid qilish uchun uxlaymiz
    time.Sleep(time.Second)
    fmt.Printf("Worker %d done\n", id)
}

func main() {
    // WaitGroup — shu yerda ishga tushirilgan barcha goroutinalarni kutish uchun
    // Eslatma: WaitGroup'ni funksiyalarga aniq uzatganda, ko'rsatkich (pointer) orqali uzatish kerak
    var wg sync.WaitGroup

    // Bir nechta goroutina ishga tushirish — WaitGroup.Go yordamida
    for i := 1; i <= 5; i++ {
        i := i // closure uchun lokal nusxa
        wg.Go(func() {
            worker(i)
        })
    }

    // Shu yerda wg orqali ishga tushgan barcha goroutinalar tugaguncha bloklanamiz
    // Goroutina ichidagi funksiya return qilganda, u tugagan hisoblanadi
    wg.Wait()

    // Eslatma: bu yondashuvda xatolarni oddiy tarqatish yo'li yo'q; murakkab holatlarda errgroup paketi mos keladi
}
```

Terminalda bajarish:
```bash
$ go run waitgroups.go
Worker 5 starting
Worker 3 starting
Worker 4 starting
Worker 1 starting
Worker 2 starting
Worker 4 done
Worker 1 done
Worker 2 done
Worker 5 done
Worker 3 done
```

Ishga tushirish va tugash tartibi har safar turlicha bo'lishi mumkin.
</div>
