---
title: Command-line flag'lar
summary: flag paketi bilan CLI parametrlari — string/int/bool, StringVar va positional argumentlar.
date: 2025-09-30
---

## Command-line flag'lar

<div class="my-md-content">
Command-line flag'lar — CLI dasturlarida opsiyalar ko'rsatishning odatiy usuli (masalan, `wc -l` dagi `-l`).

```go
package main

// Go flag paketi — sodda flag parsing ni qo'llab-quvvatlaydi
import (
    "flag"
    "fmt"
)

func main() {
    // Asosiy flaglar: string, int, bool
    // String flag: default "foo" va qisqa tavsif
    // flag.String qiymat emas, balki *string pointer qaytaradi
    wordPtr := flag.String("word", "foo", "a string")

    // Shu yondashuv bilan int va bool
    numbPtr := flag.Int("numb", 42, "an int")
    forkPtr := flag.Bool("fork", false, "a bool")

    // Oldindan e'lon qilingan o'zgaruvchiga bog'lash (pointer uzatamiz)
    var svar string
    flag.StringVar(&svar, "svar", "bar", "a string var")

    // Barcha flaglar e'lon qilingach, parse qilamiz
    flag.Parse()

    // Qiymatlarni chiqarish; pointerlarni dereference qilamiz
    fmt.Println("word:", *wordPtr)
    fmt.Println("numb:", *numbPtr)
    fmt.Println("fork:", *forkPtr)
    fmt.Println("svar:", svar)
    // Qolgan positional argumentlar
    fmt.Println("tail:", flag.Args())
}
```

Sinab ko'rish uchun avval binar build qilish ma'qul:
```bash
$ go build command-line-flags.go
```

Barcha flaglarga qiymat berib ishga tushirish:
```bash
$ ./command-line-flags -word=opt -numb=7 -fork -svar=flag
word: opt
numb: 7
fork: true
svar: flag
tail: []
```

Flaglarni tashlab yuborsangiz, ular default qiymatlarni oladi:
```bash
$ ./command-line-flags -word=opt
word: opt
numb: 42
fork: false
svar: bar
tail: []
```

Flaglardan keyin positional argumentlar berish mumkin:
```bash
$ ./command-line-flags -word=opt a1 a2 a3
word: opt
...
tail: [a1 a2 a3]
```

Diqqat: `flag` paketi barcha flaglar positional argumentlardan oldin bo'lishini talab qiladi, aks holda ular positional sifatida talqin qilinadi:
```bash
$ ./command-line-flags -word=opt a1 a2 a3 -numb=7
word: opt
numb: 42
fork: false
svar: bar
tail: [a1 a2 a3 -numb=7]
```

Yordam matni:
```bash
$ ./command-line-flags -h
Usage of ./command-line-flags:
  -fork=false: a bool
  -numb=42: an int
  -svar="bar": a string var
  -word="foo": a string
```

Noma'lum flag bersangiz, xato va yordam matni ko'rsatiladi:
```bash
$ ./command-line-flags -wat
flag provided but not defined: -wat
Usage of ./command-line-flags:
...
```
</div>
