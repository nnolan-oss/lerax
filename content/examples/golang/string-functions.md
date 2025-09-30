---
title: String funksiyalari (strings paketi)
summary: Standart kutubxonadagi strings paketi — foydali string funksiyalariga qisqa kirish.
date: 2025-09-30
---

## String funksiyalari (strings paketi)

<div class="my-md-content">
Standart kutubxonaning `strings` paketi stringlar bilan ishlash uchun ko'plab foydali funksiyalarni beradi. Quyidagi misollar paketning imkoniyatlariga qisqa kirish uchun.

```go
package main

import (
    "fmt"
    s "strings"
)

// fmt.Println ni tez-tez ishlatamiz, shuning uchun qisqa alias
var p = fmt.Println

func main() {
    // Funksiyalar — paketdagi erkin funksiyalar; shu sabab string qiymat birinchi argument bo'lib uzatiladi
    p("Contains:  ", s.Contains("test", "es"))
    p("Count:     ", s.Count("test", "t"))
    p("HasPrefix: ", s.HasPrefix("test", "te"))
    p("HasSuffix: ", s.HasSuffix("test", "st"))
    p("Index:     ", s.Index("test", "e"))
    p("Join:      ", s.Join([]string{"a", "b"}, "-"))
    p("Repeat:    ", s.Repeat("a", 5))
    p("Replace:   ", s.Replace("foo", "o", "0", -1))
    p("Replace:   ", s.Replace("foo", "o", "0", 1))
    p("Split:     ", s.Split("a-b-c-d-e", "-"))
    p("ToLower:   ", s.ToLower("TEST"))
    p("ToUpper:   ", s.ToUpper("test"))
}
```

Terminalda bajarish:
```bash
$ go run string-functions.go
Contains:   true
Count:      2
HasPrefix:  true
HasSuffix:  true
Index:      1
Join:       a-b
Repeat:     aaaaa
Replace:    f00
Replace:    f0o
Split:      [a b c d e]
ToLower:    test
ToUpper:    TEST
```

Qo'shimcha funksiyalar uchun `strings` paketi hujjatlarini ko'ring.
</div>
