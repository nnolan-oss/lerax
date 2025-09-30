---
title: Goroutinlar
summary: Goroutina — yengil ijro oqimi; funksiyalarni concurrent bajarish.
date: 2025-09-30
---

## Goroutinlar

<div class="my-md-content">
Goroutina — Go'dagi yengil ijro oqimi (lightweight thread). Ular yordamida funksiyalarni bir vaqtda (concurrently) bajarish mumkin.

```go
package main

import (
    "fmt"
    "time"
)

func f(from string) {
    for i := range 3 {
        fmt.Println(from, ":", i)
    }
}

func main() {
    // Oddiy (synchronous) chaqiruv
    f("direct")

    // Funksiyani goroutina sifatida chaqirish: chaqiruvchi bilan parallel ishlaydi
    go f("goroutine")

    // Anonim funksiyani ham goroutina sifatida ishga tushirish mumkin
    go func(msg string) {
        fmt.Println(msg)
    }("going")

    // Ikkala goroutina ham asinxron ishlayapti; ularga imkon berish uchun biroz kutamiz
    // (amaliyotda WaitGroup ishlatish yanada to'g'ri)
    time.Sleep(time.Second)
    fmt.Println("done")
}
```

Dastur ishga tushganda avval bloklovchi chaqiruv chiqishi, so'ng goroutinlarning natijalari chiqishi mumkin. Goroutinlar parallel ishlagani sabab ularning chiqishlari aralashib ketishi tabiiy.

Terminalda bajarish:
```bash
$ go run goroutines.go
direct : 0
direct : 1
direct : 2
goroutine : 0
going
goroutine : 1
goroutine : 2
done
```

Keyingi bo'limda concurrent dasturlashdagi goroutinalarning "hamrohi" — kanallarni (channels) ko'rib chiqamiz.
</div>
