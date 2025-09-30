---
title: Recover
summary: Panic'dan tiklanish — defer ichida recover chaqirish orqali bajariladi.
date: 2025-09-30
---

## Recover

<div class="my-md-content">
Go `recover` built-in funksiyasi orqali `panic` dan tiklanish imkonini beradi. Recover — panic dasturga abort berishini to'xtatib, bajarilishni davom ettirishga imkon beradi.

```go
package main

import "fmt"

// Panic qiluvchi funksiya
func mayPanic() {
    panic("a problem")
}

func main() {
    // recover faqat defer qilingan funksiya ichida chaqiriladi
    // Panic yuz berganda defer ishga tushadi va recover panikani ushlaydi
    defer func() {
        // recover qaytargan qiymat — panic ga uzatilgan xato
        if r := recover(); r != nil {
            fmt.Println("Recovered. Error:\n", r)
        }
    }()

    mayPanic()

    // Bu qator bajarilmaydi — mayPanic panic qiladi
    // Bajarilish panic nuqtasida to'xtab, defer ichiga "sakraydi"
    fmt.Println("After mayPanic()")
}
```

Terminalda bajarish:
```bash
$ go run recover.go
Recovered. Error:
 a problem
```

Amaliy misol: serverda bitta mijoz ulanishi kritik xato bersa ham, butun server qulab tushmasligi kerak; o'rniga shu ulanish yopilib, qolgan mijozlarga xizmat davom etadi. Go ning `net/http` bu xatti-harakatni sukut bo'yicha ta'minlaydi.
</div>
