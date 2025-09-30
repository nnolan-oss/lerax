---
title: Metodlar
summary: Go'da metodlar struct turlariga biriktiriladi — ko'rsatkich va qiymat qabul qiluvchilar.
date: 2025-09-30
---

## Metodlar

<div class="my-md-content">
Go struct turlarida metodlar aniqlashni qo'llab-quvvatlaydi.

```go
package main

import "fmt"

type rect struct {
    width, height int
}

// Ushbu area metodi qabul qiluvchi (receiver) sifatida *rect ishlatadi
func (r *rect) area() int {
    return r.width * r.height
}

// Metodlar ko'rsatkich yoki qiymat qabul qiluvchilarga ega bo'lishi mumkin
// Quyida qiymat qabul qiluvchi misoli
func (r rect) perim() int {
    return 2*r.width + 2*r.height
}

func main() {
    r := rect{width: 10, height: 5}

    // struct uchun aniqlangan 2 metodni chaqirish
    fmt.Println("area: ", r.area())
    fmt.Println("perim:", r.perim())

    // Go metod chaqirishda qiymat va ko'rsatkich o'rtasida konvertatsiyani avtomatik bajaradi
    // Ko'rsatkich qabul qiluvchi nusxa ko'chirishdan qochish yoki struct'ni o'zgartirish uchun foydali
    rp := &r
    fmt.Println("area: ", rp.area())
    fmt.Println("perim:", rp.perim())
}
```

Terminalda bajarish:
```bash
$ go run methods.go 
area:  50
perim: 30
area:  50
perim: 30
```

Keyingi bo'limda metodlar to'plamini guruhlash va nomlash mexanizmi — `interface` larni ko'rib chiqamiz.
</div>
