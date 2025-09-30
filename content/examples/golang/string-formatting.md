---
title: String formatlash (fmt)
summary: Go'da printf an'anasi — fmt paketidagi formatlash verb'lari misollar bilan.
date: 2025-09-30
---

## String formatlash (fmt)

<div class="my-md-content">
Go `printf` an'anasiga mos boy formatlash imkoniyatlarini taqdim etadi. Quyida keng tarqalgan formatlash vazifalaridan namunalar.

```go
package main

import (
    "fmt"
    "os"
)

type point struct {
    x, y int
}

func main() {
    // Umumiy qiymatlar uchun bir nechta verb'lar
    p := point{1, 2}
    fmt.Printf("struct1: %v\n", p)
    // Struct maydon nomlari bilan
    fmt.Printf("struct2: %+v\n", p)
    // Go sintaksisi ko'rinishida
    fmt.Printf("struct3: %#v\n", p)

    // Qiymat turini chiqarish
    fmt.Printf("type: %T\n", p)

    // Boolean
    fmt.Printf("bool: %t\n", true)

    // Butun sonlar
    fmt.Printf("int: %d\n", 123)
    // Ikkilik
    fmt.Printf("bin: %b\n", 14)
    // Belgiga mos
    fmt.Printf("char: %c\n", 33)
    // O'n oltilik
    fmt.Printf("hex: %x\n", 456)

    // Haqiqiy sonlar
    fmt.Printf("float1: %f\n", 78.9)
    // Ilmiy ko'rinish
    fmt.Printf("float2: %e\n", 123400000.0)
    fmt.Printf("float3: %E\n", 123400000.0)

    // Stringlar
    fmt.Printf("str1: %s\n", "\"string\"")
    // Go manbasi kabi juft-qatlovli
    fmt.Printf("str2: %q\n", "\"string\"")
    // Baytlarni hex ko'rinishida
    fmt.Printf("str3: %x\n", "hex this")

    // Ko'rsatkich
    fmt.Printf("pointer: %p\n", &p)

    // Kenglik va aniqlikni boshqarish
    // O'ngga tekislash, bo'shliqlar bilan to'ldirish
    fmt.Printf("width1: |%6d|%6d|\n", 12, 345)
    // Haqiqiy sonlar uchun kenglik.va-aniqlik
    fmt.Printf("width2: |%6.2f|%6.2f|\n", 1.2, 3.45)
    // Chapga tekislash
    fmt.Printf("width3: |%-6.2f|%-6.2f|\n", 1.2, 3.45)

    // Stringlar uchun kenglik
    fmt.Printf("width4: |%6s|%6s|\n", "foo", "b")
    fmt.Printf("width5: |%-6s|%-6s|\n", "foo", "b")

    // Sprintf — formatlab string qaytaradi (chop etmaydi)
    s := fmt.Sprintf("sprintf: a %s", "string")
    fmt.Println(s)

    // Fprintf — boshqa io.Writer'ga yozish (mas., stderr)
    fmt.Fprintf(os.Stderr, "io: an %s\n", "error")
}
```

Terminalda bajarish:
```bash
$ go run string-formatting.go
struct1: {1 2}
struct2: {x:1 y:2}
struct3: main.point{x:1, y:2}
type: main.point
bool: true
int: 123
bin: 1110
char: !
hex: 1c8
float1: 78.900000
float2: 1.234000e+08
float3: 1.234000E+08
str1: "string"
str2: "\"string\""
str3: 6865782074686973
pointer: 0xc0000ba000
width1: |    12|   345|
width2: |  1.20|  3.45|
width3: |1.20  |3.45  |
width4: |   foo|     b|
width5: |foo   |b     |
sprintf: a string
io: an error
```
</div>
