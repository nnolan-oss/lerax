---
title: Variadic funksiyalar
summary: Go'da variadic funksiyalar — istalgan sondagi argumentlarni qabul qilish misollari.
date: 2025-09-30
---

## Variadic funksiyalar

<div class="my-md-content">
Variadic funksiyalar oxirida istalgan sondagi argumentlar bilan chaqirilishi mumkin. Masalan, `fmt.Println` keng tarqalgan variadic funksiyadir.

```go
package main

import "fmt"

// Istalgan sondagi int argumentlarni qabul qiluvchi funksiya
func sum(nums ...int) {
    fmt.Print(nums, " ")
    total := 0

    // Funksiya ichida nums turi []int ga teng bo'ladi;
    // len(nums) chaqirish, range bilan aylanish mumkin
    for _, num := range nums {
        total += num
    }
    fmt.Println(total)
}

func main() {

    // Variadic funksiyalar oddiy usulda individual argumentlar bilan chaqiriladi
    sum(1, 2)
    sum(1, 2, 3)

    // Agar argumentlar slice ko'rinishida bo'lsa, func(slice...) sintaksisi orqali uzatish mumkin
    nums := []int{1, 2, 3, 4}
    sum(nums...)
}
```

Terminalda bajarish:
```bash
$ go run variadic-functions.go 
[1 2] 3
[1 2 3] 6
[1 2 3 4] 10
```

Funksiyalarning yana bir muhim jihati — closures (yopilmalar) hosil qilish qobiliyati; keyingi bo'limda shu mavzuni ko'rib chiqamiz.
</div>
