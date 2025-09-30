---
title: Funksiyalar
summary: Go tilida funksiyalar markaziy tushuncha. Asosiy misollar va izohlar.
date: 2025-09-30
---

## Funksiyalar

<div class="my-md-content">
Go tilida funksiyalar juda muhim. Bir nechta misollar orqali funksiyalarni ko'rib chiqamiz.

```go
package main

import "fmt"

// Ikki ta int qabul qilib, ularning yig'indisini int sifatida qaytaruvchi funksiya
func plus(a int, b int) int {
    // Go'da aniq return talab qilinadi — oxirgi ifoda qiymati avtomatik qaytarilmaydi
    return a + b
}

// Bir xil turdagi ketma-ket parametrlar uchun tur nomini oxirgisida qoldirib, boshqalaridan olib tashlash mumkin
func plusPlus(a, b, c int) int {
    return a + b + c
}

func main() {
    // Funksiyani odatdagidek name(args) bilan chaqiramiz
    res := plus(1, 2)
    fmt.Println("1+2 =", res)

    res = plusPlus(1, 2, 3)
    fmt.Println("1+2+3 =", res)
}
```

Terminalda bajarish:
```bash
$ go run functions.go 
1+2 = 3
1+2+3 = 6
```

Go funksiyalarining yana bir nechta xususiyatlari mavjud. Ulardan biri — bir nechta qiymat qaytarish; keyingi bo'limda shu mavzuni ko'ramiz.
</div>
