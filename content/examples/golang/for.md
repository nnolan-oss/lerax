---
title: For sikllari
summary: Go tilida for — yagona sikl operatori. Asosiy turlari va misollar.
date: 2025-09-30
---

## For (takrorlash) sikli

<div class="my-md-content">
Go tilida `for` — yagona takrorlash (loop) konstruksiyasi. Quyida `for` siklining asosiy turlari keltirilgan.

```go
package main

import "fmt"

func main() {

    // 1) Eng oddiy ko'rinish: bitta shart bilan.
    i := 1
    for i <= 3 {
        fmt.Println(i)
        i = i + 1
    }

    // 2) Klassik boshlanish/shart/inkrement ko'rinishi.
    for j := 0; j < 3; j++ {
        fmt.Println(j)
    }

    // 3) "N marta bajar" usuli: butun songa range qilish.
    for i := range 3 {
        fmt.Println("range", i)
    }

    // 4) Shartsiz for: break yoki return bo'lmaguncha davom etadi.
    for {
        fmt.Println("loop")
        break
    }

    // 5) continue bilan keyingi iteratsiyaga o'tish.
    for n := range 6 {
        if n%2 == 0 {
            continue
        }
        fmt.Println(n)
    }
}
```

Yuqoridagi dastur qanday ishlashini ko'rish uchun terminalda quyidagilarni bajaring:
```bash
$ go run for.go
1
2
3
0
1
2
range 0
range 1
range 2
loop
1
3
5
```

`range` ifodasi, kanallar va boshqa ma'lumot tuzilmalarini ko'rib chiqqanimizda, `for` ning yana boshqa ko'rinishlarini ham ko'ramiz.
</div>