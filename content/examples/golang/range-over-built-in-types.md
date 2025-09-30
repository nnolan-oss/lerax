---
title: Range over Built-in Types
summary: range bilan slice, array, map va string ustida iteratsiya qilish.
date: 2025-09-30
---

## Range over Built-in Types

<div class="my-md-content">
`range` — Go'dagi turli built-in ma'lumot tuzilmalari elementlari ustida aylanish (iteratsiya) qilish uchun ishlatiladi. Quyida ilgari ko'rib chiqqan tuzilmalar bilan `range` dan foydalanish misollari bor.

```go
package main

import "fmt"

func main() {

    // Slice elementlari yig'indisini hisoblash (massivlar bilan ham xuddi shunday ishlaydi)
    nums := []int{2, 3, 4}
    sum := 0
    for _, num := range nums {
        sum += num
    }
    fmt.Println("sum:", sum)

    // Slice/array uchun range har bir element uchun indeks va qiymatni beradi
    // Bu yerda indeks kerak, shuning uchun i dan foydalanamiz
    for i, num := range nums {
        if num == 3 {
            fmt.Println("index:", i)
        }
    }

    // Map ustida range — kalit/qiymat juftliklari bo'yicha aylanish
    kvs := map[string]string{"a": "apple", "b": "banana"}
    for k, v := range kvs {
        fmt.Printf("%s -> %s\n", k, v)
    }

    // Faqat kalitlar bo'yicha aylanish ham mumkin
    for k := range kvs {
        fmt.Println("key:", k)
    }

    // String ustida range — Unicode kod nuqtalari (rune) bo'yicha aylanish
    // Birinchi qiymat — runening boshlang'ich bayt indeksi, ikkinchisi — runening o'zi
    for i, c := range "go" {
        fmt.Println(i, c)
    }
}
```

Terminalda bajarish:
```bash
$ go run range-over-built-in-types.go
sum: 9
index: 1
a -> apple
b -> banana
key: a
key: b
0 103
1 111
```
</div>
