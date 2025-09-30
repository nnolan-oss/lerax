---
title: Massivlar (Arrays)
summary: Go tilida massivlar — belgilangan uzunlikdagi elementlar ketma-ketligi. Asosiy misollar.
date: 2025-09-30
---

## Massivlar (Arrays)

<div class="my-md-content">
Go tilida massiv — aniq uzunlikka ega bo'lgan elementlar ketma-ketligi. Amaliy Go kodida ko'pincha «slice» lar ishlatiladi; massivlar ayrim maxsus vaziyatlarda foydali.

```go
package main

import "fmt"

func main() {

    // 5 ta int saqlovchi massiv yaratamiz. Element turi va uzunligi
    // massiv turining bir qismi hisoblanadi. Standart qiymat — nol qiymat (int uchun 0).
    var a [5]int
    fmt.Println("emp:", a)

    // Indeks bo'yicha qiymat o'rnatish va olish
    a[4] = 100
    fmt.Println("set:", a)
    fmt.Println("get:", a[4])

    // len builtin funksiyasi massiv uzunligini qaytaradi
    fmt.Println("len:", len(a))

    // Bitta qatorda e'lon qilish va boshlang'ich qiymat berish
    b := [5]int{1, 2, 3, 4, 5}
    fmt.Println("dcl:", b)

    // Elementlar sonini kompilyatorning o'zi sanashi uchun ... ishlatish mumkin
    b = [...]int{1, 2, 3, 4, 5}
    fmt.Println("dcl:", b)

    // Indeksni : bilan ko'rsatib berilsa, oradagi elementlar 0 qilinadi
    b = [...]int{100, 3: 400, 500}
    fmt.Println("idx:", b)

    // Massiv turlari bir o'lchamli, lekin ularni kompozitsiya qilib
    // ko'p o'lchamli tuzilmalar yaratish mumkin
    var twoD [2][3]int
    for i := range 2 {
        for j := range 3 {
            twoD[i][j] = i + j
        }
    }
    fmt.Println("2d: ", twoD)

    // Ko'p o'lchamli massivni birdaniga yaratish va qiymat berish
    twoD = [2][3]int{
        {1, 2, 3},
        {1, 2, 3},
    }
    fmt.Println("2d: ", twoD)
}
```

Eslatma: `fmt.Println` bilan chop etilganda massivlar `[v1 v2 v3 ...]` ko'rinishida ko'rinadi.

Terminalda bajarish:
```bash
$ go run arrays.go
emp: [0 0 0 0 0]
set: [0 0 0 0 100]
get: 100
len: 5
dcl: [1 2 3 4 5]
dcl: [1 2 3 4 5]
idx: [100 0 0 400 500]
2d:  [[0 1 2] [1 2 3]]
2d:  [[1 2 3] [1 2 3]]
```
</div>
