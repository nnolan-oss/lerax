---
title: O'zgarmaslar
summary: Dasturlash tilini o'zbek tilida namunalar bilan o'rganish
date: 2025-09-29
---

## O'zgarmaslar

<div class="my-md-content">
Go'da string, character, boolean va raqam turdagi o'zgarmaslarni qabul qiladi, ularni e'lon qilish vaqtida qiymat berish majburiy, chunki o'zgarmas

```go
package main

import (
    "fmt"
    "math" // Hisoblash amallari uchun package import qilinyapti
)

// o'zgarmaslar "const" kaliti bilan e'lon qilinadi
const s string = "constant"

func main() {
    fmt.Println(s)

    // var ishlata olgan har qaysi joyda const ishlatishimiz mumkin
    const n = 500000000

    // arifmatik amallarda aniqlik beradi
    const d = 3e20 / n
    fmt.Println(d)

    // Raqamli doimiy qiymat aniq konversiya orqali berilguncha turga ega emas.
    fmt.Println(int64(d))

    // Raqamga o'zgaruvchi tayinlash yoki funksiya chaqiruvi kabi tur talab qiladigan kontekstda foydalanish orqali tur berilishi mumkin. Masalan, bu yerda math.Sin float64 turini kutadi.
    fmt.Println(math.Sin(n))
}
```

Yuqoridagi kodni bajarish uchun terminalda quyidagilarni yozing:
```bash
$ go run constant.go 
constant
6e+11
600000000000
-0.28470407323754404
```
</div>