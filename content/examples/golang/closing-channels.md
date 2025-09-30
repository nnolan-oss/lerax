---
title: Kanallarni yopish (Closing Channels)
summary: Kanal yopilishi — endi qiymatlar yuborilmasligini bildiradi; qabul qiluvchilarni xabardor qilish uchun foydali.
date: 2025-09-30
---

## Kanallarni yopish

<div class="my-md-content">
Kanalni yopish — unga endi yangi qiymatlar yuborilmasligini bildiradi. Bu qabul qiluvchilarga ish tugaganini bildirish uchun qulay.

```go
package main

import "fmt"

func main() {
    // jobs — ishlarni yuborish uchun kanal; done — tugashni bildirish uchun
    jobs := make(chan int, 5)
    done := make(chan bool)

    // Worker goroutina: jobs dan takroran qabul qiladi
    // Ikki qiymatli qabul ko'rinishi: j, more := <-jobs
    // Agar kanal yopilgan va ichida qiymat qolmagan bo'lsa, more false bo'ladi
    go func() {
        for {
            j, more := <-jobs
            if more {
                fmt.Println("received job", j)
            } else {
                fmt.Println("received all jobs")
                done <- true
                return
            }
        }
    }()

    // 3 ta ish yuboramiz va kanalni yopamiz
    for j := 1; j <= 3; j++ {
        jobs <- j
        fmt.Println("sent job", j)
    }
    close(jobs)
    fmt.Println("sent all jobs")

    // Worker tugashini kutamiz
    <-done

    // Yopilgan kanaldan o'qish darhol muvaffaqiyatli bo'ladi va nol qiymat qaytaradi
    // Ikkinchi qaytish qiymati — qabul qilingan qiymat haqiqiy send orqali kelganmi (true),
    // yoki kanal yopiq va bo'sh bo'lgani uchun generatsiya qilingan nol qiymatmi (false)
    _, ok := <-jobs
    fmt.Println("received more jobs:", ok)
}
```

Terminalda bajarish:
```bash
$ go run closing-channels.go 
sent job 1
received job 1
sent job 2
received job 2
sent job 3
received job 3
sent all jobs
received all jobs
received more jobs: false
```

Yopilgan kanallar g'oyasi navbatdagi misolga olib keladi: kanallar ustida `range` qilish.
</div>
