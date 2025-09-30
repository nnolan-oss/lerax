---
title: Sonlarni parse qilish
summary: strconv paketi bilan stringlardan sonlarni parse qilish (int, uint, float, hex, Atoi).
date: 2025-09-30
---

## Sonlarni parse qilish

<div class="my-md-content">
Ko'plab dasturlarda stringdan sonlarni parse qilishga to'g'ri keladi; Go'da buni `strconv` paketi bilan bajarish mumkin.

```go
package main

// Sonlarni parse qilish uchun built-in paket
import (
    "fmt"
    "strconv"
)

func main() {
    // ParseFloat — bu yerda 64 aniqlik biti (float64)
    f, _ := strconv.ParseFloat("1.234", 64)
    fmt.Println(f)

    // ParseInt — 0 bazani stringdan avtomatik aniqlashni bildiradi; 64 — natija 64 bitga sig'ishi shart
    i, _ := strconv.ParseInt("123", 0, 64)
    fmt.Println(i)

    // ParseInt hex formatni ham taniydi
    d, _ := strconv.ParseInt("0x1c8", 0, 64)
    fmt.Println(d)

    // Unsigned ham mavjud
    u, _ := strconv.ParseUint("789", 0, 64)
    fmt.Println(u)

    // Atoi — 10-lik asosidagi int uchun qulay yordamchi funksiya
    k, _ := strconv.Atoi("135")
    fmt.Println(k)

    // Noto'g'ri kirishda parse funksiyalar xato qaytaradi
    _, e := strconv.Atoi("wat")
    fmt.Println(e)
}
```

Terminalda bajarish:
```bash
$ go run number-parsing.go 
1.234
123
456
789
135
strconv.ParseInt: parsing "wat": invalid syntax
```

Keyingi bo'limda URL'larni parse qilishni ko'ramiz.
</div>
