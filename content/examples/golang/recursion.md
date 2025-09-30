---
title: Rekursiya
summary: Go rekursiv funksiyalarni qo'llab-quvvatlaydi — factorial va fibonachchi misollari.
date: 2025-09-30
---

## Rekursiya

<div class="my-md-content">
Go rekursiv funksiya(ichma-ich)lar ni qo'llab-quvvatlaydi. Quyida klassik misollar keltirilgan.

```go
package main

import "fmt"

// fact funksiyasi bazaviy holat (fact(0)) ga yetguncha o'zini o'zi chaqiradi
func fact(n int) int {
    if n == 0 {
        return 1
    }
    return n * fact(n-1)
}

func main() {
    fmt.Println(fact(7))

    // Anonim funksiyalar ham rekursiv bo'lishi mumkin,
    // buning uchun funksiya aniqlanishidan oldin uni saqlaydigan o'zgaruvchini var bilan e'lon qilish kerak
    var fib func(n int) int

    fib = func(n int) int {
        if n < 2 {
            return n
        }
        // fib oldindan main ichida e'lon qilingani uchun, bu yerda aynan shu funksiyani chaqirish kerakligi ma'lum
        return fib(n-1) + fib(n-2)
    }

    fmt.Println(fib(7))
}
```

Terminalda bajarish:
```bash
$ go run recursion.go 
5040
13
```
</div>
