---
title: Bir nechta qaytish qiymatlari
summary: Go funksiyalari bir nechta qiymat qaytara oladi — amaliy misollar.
date: 2025-09-30
---

## Bir nechta qaytish qiymatlari

<div class="my-md-content">
Go'da funksiyalar bir nechta qaytish qiymatini qo'llab-quvvatlaydi. Bu idiomatik Go'da tez-tez ishlatiladi, masalan, natija va xatolikni birga qaytarishda.

```go
package main

import "fmt"

// (int, int) imzosi funksiya 2 ta int qaytarishini bildiradi
func vals() (int, int) {
    return 3, 7
}

func main() {

    // Bir nechta qaytish qiymatini ko'pikli tayinlash (multiple assignment) bilan qabul qilish
    a, b := vals()
    fmt.Println(a)
    fmt.Println(b)

    // Qaytgan qiymatlarning faqat bir qismini olish uchun bo'sh identifikator _ dan foydalaning
    _, c := vals()
    fmt.Println(c)
}
```

Terminalda bajarish:
```bash
$ go run multiple-return-values.go
3
7
7
```

Keyingi bo'limda funksiyalarning o'zgaruvchan sonli argumentlarni (variadic) qabul qilish xususiyatini ko'ramiz.
</div>
