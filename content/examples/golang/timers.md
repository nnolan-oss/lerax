---
title: Timerlar
summary: Kelajakdagi bitta hodisani kutish va uni bekor qilish — time.Timer bilan.
date: 2025-09-30
---

## Timerlar

<div class="my-md-content">
Ko'pincha kodni kelajakda ma'lum vaqtdan keyin yoki davriy ishlatish kerak bo'ladi. Go'da `timer` va `ticker` bu ishlarni osonlashtiradi. Avval `timer` ni ko'ramiz, keyin `ticker` ni.

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    // Timer — kelajakdagi bitta hodisani ifodalaydi. 2 soniya kutamiz
    timer1 := time.NewTimer(2 * time.Second)

    // <-timer1.C — timer ishga tushganini bildiruvchi kanal; qiymat kelguncha bloklanadi
    <-timer1.C
    fmt.Println("Timer 1 fired")

    // Agar shunchaki kutish kerak bo'lsa, time.Sleep ham mumkin
    // Lekin timer'ni ishga tushishidan oldin bekor qilish (Stop) ham mumkin — bu foydali
    timer2 := time.NewTimer(time.Second)
    go func() {
        <-timer2.C
        fmt.Println("Timer 2 fired")
    }()

    // timer2 ni bekor qilamiz; Stop true qaytarsa, vaqtida to'xtatildi degani
    stop2 := timer2.Stop()
    if stop2 {
        fmt.Println("Timer 2 stopped")
    }

    // timer2 ishga tushishga ulgurmasligini ko'rsatish uchun biroz kutamiz
    time.Sleep(2 * time.Second)
}
```

Terminalda bajarish:
```bash
$ go run timers.go
Timer 1 fired
Timer 2 stopped
```
</div>
