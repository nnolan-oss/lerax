---
title: Rate limiting
summary: Resurslardan foydalanishni boshqarish — goroutina, kanal va ticker bilan tezlikni cheklash.
date: 2025-09-30
---

## Rate limiting

<div class="my-md-content">
Rate limiting — tashqi resurslar va xizmat sifatini boshqarish uchun muhim mexanizm. Go'da goroutina, kanallar va ticker yordamida bu juda qulay.

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    // Asosiy rate limiting: kelayotgan so'rovlarni cheklash
    requests := make(chan int, 5)
    for i := 1; i <= 5; i++ {
        requests <- i
    }
    close(requests)

    // limiter — har 200ms da bitta qiymat yuboradi (tezlik regulyatori)
    limiter := time.Tick(200 * time.Millisecond)

    // Har so'rovni xizmat qilishdan oldin limiter'dan qiymat kutamiz — shu bilan 200ms ga cheklaymiz
    for req := range requests {
        <-limiter
        fmt.Println("request", req, time.Now())
    }

    // Burst (qisqa muddatli "portlash") imkonini ham qo'shish mumkin: bufferlangan limiter
    burstyLimiter := make(chan time.Time, 3)

    // Dastlab 3 ta ruxsat berilgan "slot" bilan to'ldiramiz
    for range 3 {
        burstyLimiter <- time.Now()
    }

    // Har 200ms da yana bitta slot qo'shishga urinib boramiz (3 tagacha)
    go func() {
        for t := range time.Tick(200 * time.Millisecond) {
            burstyLimiter <- t
        }
    }()

    // Yana 5 ta so'rovni simulyatsiya qilamiz: dastlabki 3 tasi zudlik bilan xizmat qilinadi
    burstyRequests := make(chan int, 5)
    for i := 1; i <= 5; i++ {
        burstyRequests <- i
    }
    close(burstyRequests)
    for req := range burstyRequests {
        <-burstyLimiter
        fmt.Println("request", req, time.Now())
    }
}
```

Terminalda bajarish:
```bash
$ go run rate-limiting.go
request 1 2012-10-19 00:38:18.687438 +0000 UTC
request 2 2012-10-19 00:38:18.887471 +0000 UTC
request 3 2012-10-19 00:38:19.087238 +0000 UTC
request 4 2012-10-19 00:38:19.287338 +0000 UTC
request 5 2012-10-19 00:38:19.487331 +0000 UTC

request 1 2012-10-19 00:38:20.487578 +0000 UTC
request 2 2012-10-19 00:38:20.487645 +0000 UTC
request 3 2012-10-19 00:38:20.487676 +0000 UTC
request 4 2012-10-19 00:38:20.687483 +0000 UTC
request 5 2012-10-19 00:38:20.887542 +0000 UTC
```
</div>
