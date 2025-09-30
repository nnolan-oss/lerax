---
title: If/Else
summary: Go tilida if va else bilan shoxlanish — asosiy misollar va izohlar.
date: 2025-09-30
---

## If/Else shartlar

<div class="my-md-content">
Go tilida `if` va `else` bilan ishlash boshqa tillar kabi juda oson. Quyidagi misollar asosiy holatlarni ko'rsatadi.

```go
package main

import "fmt"

func main() {

    // Oddiy misol
    if 7%2 == 0 {
        fmt.Println("7 is even")
    } else {
        fmt.Println("7 is odd")
    }

    // else bo'lmagan if
    if 8%4 == 0 {
        fmt.Println("8 is divisible by 4")
    }

    // Mantiqiy operatorlar: && va ||
    if 8%2 == 0 || 7%2 == 0 {
        fmt.Println("either 8 or 7 are even")
    }

    // Shartdan oldin ifoda: shu yerda e'lon qilingan o'zgaruvchi
    // joriy va keyingi barcha shartlarda mavjud bo'ladi
    if num := 9; num < 0 {
        fmt.Println(num, "is negative")
    } else if num < 10 {
        fmt.Println(num, "has 1 digit")
    } else {
        fmt.Println(num, "has multiple digits")
    }
}
```

E'tibor bering: Go tilida shart atrofida qavslar kerak emas, lekin jingalak qavslar `{}` majburiy.

Terminalda bajarish:
```bash
$ go run if-else.go
7 is odd
8 is divisible by 4
either 8 or 7 are even
9 has 1 digit
```

Go tilida ternary (`?:`) operatori yo'q. Hatto sodda shartlar uchun ham to'liq `if` yozish kerak bo'ladi.
</div>
