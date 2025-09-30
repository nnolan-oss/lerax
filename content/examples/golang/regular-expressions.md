---
title: Muntazam ifodalar (regexp)
summary: regexp paketi bilan moslashtirish, qidirish va almashtirish — amaliy misollar.
date: 2025-09-30
---

## Muntazam ifodalar (regexp)

<div class="my-md-content">
Go muntazam ifodalarni kuchli qo'llab-quvvatlaydi. Quyida keng tarqalgan vazifalardan misollar.

```go
package main

import (
    "bytes"
    "fmt"
    "regexp"
)

func main() {
    // Andoza stringga mos keladimi?
    match, _ := regexp.MatchString("p([a-z]+)ch", "peach")
    fmt.Println(match)

    // Ko'proq vazifalar uchun oldindan Compile qilish qulay
    r, _ := regexp.Compile("p([a-z]+)ch")

    // Struct metodlari
    fmt.Println(r.MatchString("peach"))

    // Mos kelgan matnni topish
    fmt.Println(r.FindString("peach punch"))

    // Mos kelishning indekslarini olish
    fmt.Println("idx:", r.FindStringIndex("peach punch"))

    // Submatch'lar: butun andoza va ichki guruhlar haqida ma'lumot
    fmt.Println(r.FindStringSubmatch("peach punch"))

    // Indekslar bilan submatch'lar
    fmt.Println(r.FindStringSubmatchIndex("peach punch"))

    // All* variantlar — barcha mosliklar uchun
    fmt.Println(r.FindAllString("peach punch pinch", -1))

    fmt.Println("all:", r.FindAllStringSubmatchIndex("peach punch pinch", -1))

    // Ikkinchi argument mosliklar sonini cheklaydi
    fmt.Println(r.FindAllString("peach punch pinch", 2))

    // []byte bilan ishlash — *String suffiksiz metodlar
    fmt.Println(r.Match([]byte("peach")))

    // Global o'zgaruvchilar uchun MustCompile — xato o'rniga panic
    r = regexp.MustCompile("p([a-z]+)ch")
    fmt.Println("regexp:", r)

    // Almashtirish
    fmt.Println(r.ReplaceAllString("a peach", "<fruit>"))

    // Funksiya bilan almashtirish
    in := []byte("a peach")
    out := r.ReplaceAllFunc(in, bytes.ToUpper)
    fmt.Println(string(out))
}
```

Terminalda bajarish:
```bash
$ go run regular-expressions.go
true
true
peach
idx: [0 5]
[peach ea]
[0 5 1 3]
[peach punch pinch]
all: [[0 5 1 3] [6 11 7 9] [12 17 13 15]]
[peach punch]
true
regexp: p([a-z]+)ch
a <fruit>
a PEACH
```

To'liq ma'lumot uchun `regexp` paketi hujjatlarini ko'ring.
</div>
