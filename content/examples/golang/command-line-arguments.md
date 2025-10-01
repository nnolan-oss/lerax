---
title: Command-line argumentlar
summary: os.Args bilan buyruq qatori argumentlarini olish va ishlatish.
date: 2025-09-30
---

## Command-line argumentlar

<div class="my-md-content">
Dasturlarni parametrizatsiya qilishning odatiy yo‘li — buyruq qatori argumentlari. Masalan, `go run hello.go` da `go` dasturiga `run` va `hello.go` argumentlari uzatiladi.

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    // os.Args — xom argumentlar. Birinchi element — dastur yo‘li,
    // qolganlari — dasturga uzatilgan argumentlar
    argsWithProg := os.Args
    argsWithoutProg := os.Args[1:]

    // Alohida argumentni indekslash orqali olish
    // (pastda misol sifatida 4-argument)
    arg := os.Args[3]

    fmt.Println(argsWithProg)
    fmt.Println(argsWithoutProg)
    fmt.Println(arg)
}
```

Sinab ko‘rish uchun dastlab binar yaratish ma’qul:
```bash
$ go build command-line-arguments.go
$ ./command-line-arguments a b c d
[./command-line-arguments a b c d]
[a b c d]
c
```

Keyingi bo‘limda flag'lar bilan yanada rivojlangan CLI parametrlarini ko‘ramiz.
</div>
