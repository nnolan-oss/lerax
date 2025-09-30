---
title: Kanal bilan sinxronlash (Synchronization)
summary: Kanallar orqali goroutinalar ishini sinxronlash — bloklovchi qabul bilan kutish.
date: 2025-09-30
---

## Kanal bilan sinxronlash

<div class="my-md-content">
Kanallar yordamida goroutinlar orasida bajarilishni sinxronlash mumkin. Quyida goroutinaning tugashini kutish uchun bloklovchi qabul (receive) ishlatilgan.

```go
package main

import (
    "fmt"
    "time"
)

// Goroutina ichida ishlaydigan funksiya. done kanali ish tugaganini xabar qilish uchun ishlatiladi
func worker(done chan bool) {
    fmt.Print("working...")
    time.Sleep(time.Second)
    fmt.Println("done")

    // Tugaganimizni bildirish uchun qiymat yuboramiz
    done <- true
}

func main() {
    // Worker'ga berish uchun kanal yaratamiz (buffer=1)
    done := make(chan bool, 1)
    go worker(done)

    // Worker'dan xabar kelguncha bloklanib turamiz
    <-done
}
```

Terminalda bajarish:
```bash
$ go run channel-synchronization.go      
working...done                  
```

Agar yuqoridagi dasturdan `<-done` qatorini olib tashlasangiz, worker ishga tushishidan oldin dastur yakunlanib qoladi. Bir nechta goroutinalarni kutish kerak bo'lsa, amaliyotda `sync.WaitGroup` ishlatish ma'qul.
</div>
