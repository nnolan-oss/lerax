---
title: Stringlar va Runelar
summary: Go'da string — o'qish-uchun mo'ljallangan baytlar slice'i; rune — Unicode kod nuqtasi.
date: 2025-09-30
---

## Stringlar va Runelar

<div class="my-md-content">
Go'da string — o'qish-uchun mo'ljallangan baytlar slice'i. Til va standart kutubxona stringlarni UTF-8 matn konteyneri sifatida ko'rib chiqadi. Boshqa tillarda "character" tushunchasi ishlatilsa, Go'da u `rune` deb ataladi — bu Unicode kod nuqtasini ifodalovchi butun son.

```go
package main

import (
    "fmt"
    "unicode/utf8"
)

func main() {

    // Tay tilidagi "hello" so'zining literal qiymati. Go string literalari UTF-8 da kodlangan.
    const s = "สวัสดี"

    // String aslida []byte ekvivalenti; len(s) — baytlar soni
    fmt.Println("Len:", len(s))

    // Stringga indeks bo'yicha murojaat qilish — xom bayt qiymatini beradi
    // Quyidagi sikl s tarkibidagi barcha baytlarning hex ko'rinishini chiqaradi
    for i := 0; i < len(s); i++ {
        fmt.Printf("%x ", s[i])
    }
    fmt.Println()

    // Stringdagi runelar sonini sanash uchun utf8 paketidan foydalanamiz
    // RuneCountInString ish vaqti string uzunligiga bog'liq, chunki u ketma-ket dekodlaydi
    fmt.Println("Rune count:", utf8.RuneCountInString(s))

    // range stringlarda maxsus ishlaydi: har bir runeni va uning boshlanish indeksini beradi
    for idx, runeValue := range s {
        fmt.Printf("%#U starts at %d\n", runeValue, idx)
    }

    // xuddi shu iteratsiyani DecodeRuneInString bilan ham amalga oshirish mumkin
    fmt.Println("\nUsing DecodeRuneInString")
    for i, w := 0, 0; i < len(s); i += w {
        runeValue, width := utf8.DecodeRuneInString(s[i:])
        fmt.Printf("%#U starts at %d\n", runeValue, i)
        w = width
        examineRune(runeValue)
    }
}

// Rune qiymatini funksiyaga uzatishni namoyish etamiz
func examineRune(r rune) {
    // Yakkalik qo'shtirnoqdagi qiymatlar — rune literalari
    if r == 't' {
        fmt.Println("found tee")
    } else if r == 'ส' {
        fmt.Println("found so sua")
    }
}
```

Terminalda bajarish:
```bash
$ go run strings-and-runes.go
Len: 18
e0 b8 aa e0 b8 a7 e0 b8 b1 e0 b8 aa e0 b8 94 e0 b8 b5 
Rune count: 6
U+0E2A 'ส' starts at 0
U+0E27 'ว' starts at 3
U+0E31 'ั' starts at 6
U+0E2A 'ส' starts at 9
U+0E14 'ด' starts at 12
U+0E35 'ี' starts at 15

Using DecodeRuneInString
U+0E2A 'ส' starts at 0
found so sua
U+0E27 'ว' starts at 3
U+0E31 'ั' starts at 6
U+0E2A 'ส' starts at 9
found so sua
U+0E14 'ด' starts at 12
U+0E35 'ี' starts at 15
```
</div>
