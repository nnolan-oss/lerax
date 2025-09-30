---
title: Slices
summary: Go tilida slices — massivlardan kuchliroq ketma-ketlik interfeysi.
date: 2025-09-30
---

## Slices

<div class="my-md-content">
Slices Go'da muhim ma'lumot turi bo'lib, massivlarga qaraganda yanada qulay va kuchli interfeysni beradi.

```go
package main

import (
    "fmt"
    "slices"
)

func main() {

    // Massivlardan farqli ravishda, slice faqat element turi bilan tiplanadi
    // (elementlar soni emas). Initsializatsiya qilinmagan slice nil ga teng va uzunligi 0.
    var s []string
    fmt.Println("uninit:", s, s == nil, len(s) == 0)

    // Nol bo'lmagan uzunlikdagi slice yaratish uchun make ishlatiladi.
    // Bu yerda uzunligi 3 bo'lgan string slice yaratyapmiz (dastlabki qiymatlar zero-value).
    // Odatiy holatda yangi slice'ning sig'imi (capacity) uzunligiga teng bo'ladi;
    // oldindan o'sishini bilsak, make'ga qo'shimcha parametr sifatida sig'imni ham berishimiz mumkin.
    s = make([]string, 3)
    fmt.Println("emp:", s, "len:", len(s), "cap:", cap(s))

    // Massivlar kabi set/get
    s[0] = "a"
    s[1] = "b"
    s[2] = "c"
    fmt.Println("set:", s)
    fmt.Println("get:", s[2])

    // len slice uzunligini qaytaradi
    fmt.Println("len:", len(s))

    // append — slice'ni kengaytirish uchun builtin funksiya.
    // Eslatma: append qaytargan qiymatni qabul qilishimiz kerak, chunki yangi slice qaytishi mumkin.
    s = append(s, "d")
    s = append(s, "e", "f")
    fmt.Println("apd:", s)

    // copy — slice'ni nusxalash
    c := make([]string, len(s))
    copy(c, s)
    fmt.Println("cpy:", c)

    // Slice operatori: slice[low:high]
    l := s[2:5]
    fmt.Println("sl1:", l)

    // Boshlanishdan s[5] gacha (5 kiritilmaydi)
    l = s[:5]
    fmt.Println("sl2:", l)

    // s[2] dan oxirigacha
    l = s[2:]
    fmt.Println("sl3:", l)

    // E'lon va boshlang'ich qiymat berish bitta qatorda
    t := []string{"g", "h", "i"}
    fmt.Println("dcl:", t)

    // slices paketi slice'lar uchun foydali yordamchi funksiyalarni o'z ichiga oladi
    t2 := []string{"g", "h", "i"}
    if slices.Equal(t, t2) {
        fmt.Println("t == t2")
    }

    // Slice'lar ko'p o'lchamli tuzilmaga kompozitsiya qilinishi mumkin.
    // Ko'p o'lchamli massivlardan farqli o'laroq, ichki slice uzunliklari turlicha bo'lishi mumkin.
    twoD := make([][]int, 3)
    for i := range 3 {
        innerLen := i + 1
        twoD[i] = make([]int, innerLen)
        for j := range innerLen {
            twoD[i][j] = i + j
        }
    }
    fmt.Println("2d: ", twoD)
}
```

Eslatma: slice va massivlar tur jihatidan farq qiladi, biroq `fmt.Println` ularni o'xshash ko'rinishda chop etadi.

Terminalda bajarish:
```bash
$ go run slices.go
uninit: [] true true
emp: [  ] len: 3 cap: 3
set: [a b c]
get: c
len: 3
apd: [a b c d e f]
cpy: [a b c d e f]
sl1: [c d e]
sl2: [a b c d e]
sl3: [c d e f]
dcl: [g h i]
t == t2
2d:  [[0] [1 2] [2 3 4]]
```

Qo'shimcha o'qish uchun: Go jamoasining slice dizayni va implementatsiyasi haqidagi <a href="https://go.dev/blog/slices-intro" target="_blank" class="link">blog posti</a>.

Keyingi bo'limda Go'ning boshqa muhim builtin ma'lumot tuzilmasi — `map` larni ko'rib chiqamiz.
</div>
