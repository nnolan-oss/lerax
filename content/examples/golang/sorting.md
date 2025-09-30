---
title: Saralash (built-in turlar)
summary: slices.Sort va slices.IsSorted bilan built-in tartiblangan turlarni saralash.
date: 2025-09-30
---

## Saralash (built-in turlar)

<div class="my-md-content">
Go'dagi `slices` paketi built-in va foydalanuvchi turlari uchun saralashni qo'llab-quvvatlaydi. Avval built-in turlarni ko'ramiz.

```go
package main

import (
    "fmt"
    "slices"
)

func main() {
    // Tartiblangan built-in turlar: masalan, string
    strs := []string{"c", "a", "b"}
    slices.Sort(strs)
    fmt.Println("Strings:", strs)

    // int larni saralash
    ints := []int{7, 2, 4}
    slices.Sort(ints)
    fmt.Println("Ints:   ", ints)

    // slice allaqachon tartiblanganmi — tekshirish
    s := slices.IsSorted(ints)
    fmt.Println("Sorted: ", s)
}
```

Terminalda bajarish:
```bash
$ go run sorting.go
Strings: [a b c]
Ints:    [2 4 7]
Sorted:  true
```
</div>
