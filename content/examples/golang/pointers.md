---
title: Ko'rsatkichlar (Pointers)
summary: Go ko'rsatkichlarni qo'llab-quvvatlaydi — qiymat va manzil orqali ishlash misollari.
date: 2025-09-30
---

## Ko'rsatkichlar (Pointers)

<div class="my-md-content">
Go dasturda qiymatlar va yozuvlarga (records) murojaatlarni uzatish uchun ko'rsatkichlardan foydalanishni qo'llab-quvvatlaydi.

```go
package main

import "fmt"

// Bu yerda qiymat orqali va ko'rsatkich orqali ishlashni solishtiramiz
// zeroval int parametr qabul qiladi — qiymat nusxasi uzatiladi
func zeroval(ival int) {
    ival = 0
}

// zeroptr esa *int (int ko'rsatkich) qabul qiladi
// *iptr — ko'rsatkichni dereferens qilib, manzildagi joriy qiymatni oladi
// Dereferens qilingan ko'rsatkichga qiymat berish — shu manzildagi qiymatni o'zgartiradi
func zeroptr(iptr *int) {
    *iptr = 0
}

func main() {
    i := 1
    fmt.Println("initial:", i)

    zeroval(i)
    fmt.Println("zeroval:", i)

    // &i — i ning xotira manzilini (ko'rsatkichini) beradi
    zeroptr(&i)
    fmt.Println("zeroptr:", i)

    // Ko'rsatkichning o'zini ham chop etish mumkin
    fmt.Println("pointer:", &i)
}
```

`zeroval` funksiyasi `main` dagi `i` ni o'zgartirmaydi, `zeroptr` esa o'zgartiradi, chunki u o'zgaruvchining xotira manziliga ega.

Terminalda bajarish:
```bash
$ go run pointers.go
initial: 1
zeroval: 1
zeroptr: 0
pointer: 0x42131100
```
</div>
