---
title: Closures (berkitilgan qiymatlar)
summary: Go anonim funksiyalar va berkitilgan qiymatlarlarni qo'llab-quvvatlaydi — amaliy misollar.
date: 2025-09-30
---

## Closures (berkitilgan qiymatlar)

<div class="my-md-content">
Go anonim funksiyalarni qo'llab-quvvatlaydi va ular berkitilgan qiymatlar (closure) hosil qilishi mumkin. Anonim funksiyalar nom bermasdan joyida funksiya aniqlash kerak bo'lganda foydali. Inner functionni parent outer functiondagi qiymati ustida amallar bajarishi mumkin, bunda outer functiondagi qiymat berkitilgan bo'ladi, unga tashqaridan kirishga ruxsat bo'lmaydi, agar getter function bo'lmasa :)

```go
package main

import "fmt"

// intSeq funksiyasi yana bir funksiyani qaytaradi, uni anonim tarzda intSeq ichida aniqlaymiz.
// Qaytgan funksiya i o'zgaruvchisiga yopiladi (closure hosil qiladi).
func intSeq() func() int {
    i := 0
    return func() int {
        i++
        return i
    }
}

func main() {

    // intSeq ni chaqirib, natijani (funksiya) nextInt ga tayinlaymiz.
    // Ushbu funksiya qiymati o'zining i holatini ushlab turadi va har chaqirilganda yangilanadi.
    nextInt := intSeq()

    // Yopilma effektini bir necha marta chaqirib ko'ramiz
    fmt.Println(nextInt())
    fmt.Println(nextInt())
    fmt.Println(nextInt())

    // Holat funksiya instansiyasiga xosligini tekshirish uchun yangisini yaratamiz
    newInts := intSeq()
    fmt.Println(newInts())
}
```

Terminalda bajarish:
```bash
$ go run closures.go
1
2
3
1
```

Keyingi bo'limda funksiyalarning rekursiya xususiyatini ko'rib chiqamiz.
</div>
