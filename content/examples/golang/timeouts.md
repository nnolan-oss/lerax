---
title: Timeoutlar
summary: Tashqi resurslar bilan ishlashda timeout muhim; select va kanallar bilan sodda.
date: 2025-09-30
---

## Timeoutlar

<div class="my-md-content">
Tashqi resurslarga ulanadigan yoki bajarilish vaqtini cheklash zarur bo'lgan dasturlarda timeout juda muhim. Go'da kanallar va `select` tufayli timeout'larni sodda va chiroyli amalga oshirish mumkin.

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    // Misolda tashqi chaqiruv natijani 2s dan so'ng c1 kanaliga yuboradi deb faraz qilamiz
    // Kanal buffered, shuning uchun goroutinadagi send non-blocking bo'ladi
    // (kanal hech o'qilmasa, goroutina "oqish"ining oldini olish uchun keng tarqalgan usul)
    c1 := make(chan string, 1)
    go func() {
        time.Sleep(2 * time.Second)
        c1 <- "result 1"
    }()

    // Bu yerda select 1s timeout bilan kutilmoqda
    // res := <-c1 — natijani kutadi; <-time.After — 1s dan so'ng qiymat yuboradi
    // Qaysi receive tayyor bo'lsa, o'sha ishlaydi
    select {
    case res := <-c1:
        fmt.Println(res)
    case <-time.After(1 * time.Second):
        fmt.Println("timeout 1")
    }

    // Uzoqroq timeout bersak (3s), natijani olishga ulguramiz
    c2 := make(chan string, 1)
    go func() {
        time.Sleep(2 * time.Second)
        c2 <- "result 2"
    }()
    select {
    case res := <-c2:
        fmt.Println(res)
    case <-time.After(3 * time.Second):
        fmt.Println("timeout 2")
    }
}
```

Terminalda bajarish:
```bash
$ go run timeouts.go 
timeout 1
result 2
```
</div>
