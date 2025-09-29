---
title: Qiymatlar
summary: Dasturlash tilini o'zbek tilida namunalar bilan o'rganish
date: 2025-09-29
---

## Qiymatlar

<div class="my-md-content">
Go dasturlash tilida turli xil qiymat turlari mavjud, jumladan stringlar, butun sonlar, float sonlar va mantiqiy qiymatlar. Quyida ushbu qiymat turlarini ko'rsatadigan bir nechta misollar keltirilgan.

```go
package main

import "fmt"

func main() {
    // Stringlar, + bilan birlashtirilishi mumkin
    fmt.Println("go" + "lang")
    
    // Butun sonlar
    fmt.Println("1+1 =", 1+1)
    // float sonlar
    fmt.Println("7.0/3.0 =", 7.0/3.0)

    // Mantiqiy qiymatlar, kutganingizdek mantiqiy operatorlar bilan
    fmt.Println(true && false)
    fmt.Println(true || false)
    fmt.Println(!true)
}
```

Yuqoridagi kodni bajarish uchun terminalda quyidagilarni yozing:
```bash
$ go run values.go
golang
1+1 = 2
7.0/3.0 = 2.3333333333333335
false
true
false
```
</div>