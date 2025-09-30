---
title: Funksiya bilan saralash (custom comparator)
summary: slices.SortFunc va cmp.Compare bilan maxsus tartib bo'yicha saralash.
date: 2025-09-30
---

## Funksiya bilan saralash

<div class="my-md-content">
Ba'zan kolleksiyani tabiiy tartibdan farqli mezon bo'yicha saralash kerak bo'ladi. Masalan, stringlarni alifbo emas, uzunligi bo'yicha. Quyida maxsus saralash funksiyasi bilan misol.

```go
package main

import (
    "cmp"
    "fmt"
    "slices"
)

func main() {
    fruits := []string{"peach", "banana", "kiwi"}

    // Uzunlik bo'yicha solishtirish funksiyasi — cmp.Compare yordam beradi
    lenCmp := func(a, b string) int {
        return cmp.Compare(len(a), len(b))
    }

    // Maxsus comparator bilan saralash
    slices.SortFunc(fruits, lenCmp)
    fmt.Println(fruits)

    // Built-in bo'lmagan tur uchun ham xuddi shu tamoyil
    type Person struct {
        name string
        age  int
    }

    people := []Person{
        {name: "Jax", age: 37},
        {name: "TJ", age: 25},
        {name: "Alex", age: 72},
    }

    // Yoshi bo'yicha saralash
    slices.SortFunc(people, func(a, b Person) int {
        return cmp.Compare(a.age, b.age)
    })
    fmt.Println(people)
}
```

Eslatma: `Person` juda katta bo'lsa, `[]*Person` ishlatish va comparator'ni moslashtirish ma'qul bo'lishi mumkin. Shubha bo'lsa, benchmark qiling.

Terminalda bajarish:
```bash
$ go run sorting-by-functions.go 
[kiwi peach banana]
[{TJ 25} {Jax 37} {Alex 72}]
```
</div>
