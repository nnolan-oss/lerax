---
title: Maps
summary: Go tilida map — kalit/qiymat juftliklari uchun built-in assotsiativ tuzilma.
date: 2025-09-30
---

## Maps

<div class="my-md-content">
Map — Go'dagi assotsiativ ma'lumot turi (boshqa tillarda hash yoki dict deb atalishi mumkin).

```go
package main

import (
    "fmt"
    "maps"
)

func main() {

    // Bo'sh map yaratish uchun make ishlatiladi: make(map[key-type]val-type)
    m := make(map[string]int)

    // Kalit/qiymat juftliklarini o'rnatish
    m["k1"] = 7
    m["k2"] = 13

    // map'ni chop etish — barcha kalit/qiymatlarni ko'rsatadi
    fmt.Println("map:", m)

    // Kalit bo'yicha qiymat olish
    v1 := m["k1"]
    fmt.Println("v1:", v1)

    // Mavjud bo'lmagan kalit uchun qiymat turi zero-value qaytadi
    v3 := m["k3"]
    fmt.Println("v3:", v3)

    // len — map'dagi juftliklar soni
    fmt.Println("len:", len(m))

    // delete — kalit/qiymat juftligini o'chirish
    delete(m, "k2")
    fmt.Println("map:", m)

    // clear — map'dan barcha juftliklarni olib tashlash
    clear(m)
    fmt.Println("map:", m)

    // Ikkinchi qaytish qiymati kalit mavjudligini bildiradi (true/false)
    // Bu yo'q kalit bilan 0 yoki "" kabi zero-value farqlashga yordam beradi
    _, prs := m["k2"]
    fmt.Println("prs:", prs)

    // E'lon va boshlang'ich qiymat berish bitta qatorda
    n := map[string]int{"foo": 1, "bar": 2}
    fmt.Println("map:", n)

    // maps paketi — map'lar bilan ishlash uchun turli yordamchi funksiyalar
    n2 := map[string]int{"foo": 1, "bar": 2}
    if maps.Equal(n, n2) {
        fmt.Println("n == n2")
    }
}
```

Eslatma: `fmt.Println` bilan chop etilganda map `map[k:v k:v]` ko'rinishida ko'rinadi.

Terminalda bajarish:
```bash
$ go run maps.go 
map: map[k1:7 k2:13]
v1: 7
v3: 0
len: 2
map: map[k1:7]
map: map[]
prs: false
map: map[bar:2 foo:1]
n == n2
```
</div>
