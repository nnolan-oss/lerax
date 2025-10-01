---
title: Environment o'zgaruvchilar
summary: os.Setenv, os.Getenv va os.Environ bilan environment o'zgaruvchilarini o'rnatish, olish va ro'yxatlash.
date: 2025-09-30
---

## Environment o'zgaruvchilar

<div class="my-md-content">
Environment o'zgaruvchilar Unix dasturlariga konfiguratsiya yetkazishning universal mexanizmi. Go'da ularni o'rnatish, olish va ro'yxatlash quyidagicha.

```go
package main

import (
    "fmt"
    "os"
    "strings"
)

func main() {
    // Kalit/qiymat o'rnatish va olish
    // Agar kalit mavjud bo'lmasa, Getenv bo'sh string qaytaradi
    os.Setenv("FOO", "1")
    fmt.Println("FOO:", os.Getenv("FOO"))
    fmt.Println("BAR:", os.Getenv("BAR"))

    // Barcha environment juftliklarini ro'yxatlash
    // Environ KEY=value ko'rinishidagi stringlar slice'ini qaytaradi
    fmt.Println()
    for _, e := range os.Environ() {
        pair := strings.SplitN(e, "=", 2)
        fmt.Println(pair[0])
    }
}
```

Ishga tushirishda, dastur ichida o'rnatilgan `FOO` qiymatini olamiz, `BAR` esa bo'sh bo'ladi:
```bash
$ go run environment-variables.go
FOO: 1
BAR: 

TERM_PROGRAM
PATH
SHELL
...
FOO
```

Agar `BAR` ni muhitda oldindan o'rnatsak, dastur o'sha qiymatni oladi:
```bash
$ BAR=2 go run environment-variables.go
FOO: 1
BAR: 2
...
```
</div>

