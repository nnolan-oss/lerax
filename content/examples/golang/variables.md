---
title: O'zgaruvchilar
summary: Dasturlash tilini o'zbek tilida namunalar bilan o'rganish
date: 2025-09-29
---

## O'zgaruvchilar

<div class="my-md-content">
Go'da o'zgaruvchilar aniq e'lon qilinadi va kompilyator tomonidan, masalan, funksiya chaqiruvlarining tur to'g'riligini tekshirish uchun ishlatiladi.

```go
package main

import "fmt"

func main() {

    // o'zgaruvchilar "var" kaliti bilan yaratiladi 
    var a = "initial"
    fmt.Println(a)

    // boshqa dasturlash tillari singari multiple variable declare qilish mumkin, qiymatlar turi berilyapti int
    var b, c int = 1, 2 // b = 1, c = 2
    fmt.Println(b, c)

    // boolean qiymatlar
    var d = true
    fmt.Println(d)

    // o'zgaruvchini qiymatsiz e'lon qilish, (type berish kerak)
    var e int
    fmt.Println(e)

    // qisqa qilib e'lon qilish 
    // var f = "apple" -> f:= "apple" bir xil
    f := "apple"
    fmt.Println(f)
}
```

Yuqoridagi kodni bajarish uchun terminalda quyidagilarni yozing:
```bash
$ go run variables.go
initial
1 2
true
0
apple
```
</div>