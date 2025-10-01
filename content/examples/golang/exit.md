---
title: Chiqish (os.Exit)
summary: os.Exit bilan darhol berilgan status kodi bilan chiqish; defer bajarilmaydi.
date: 2025-09-30
---

## Chiqish (os.Exit)

<div class="my-md-content">
`os.Exit` — dasturdan darhol berilgan status kodi bilan chiqish. E'tibor bering, `os.Exit` chaqirilganda `defer` lar bajarilmaydi.

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    // os.Exit chaqirilganda defer bajarilmaydi — bu println ishga tushmaydi
    defer fmt.Println("!")

    // Status 3 bilan chiqish
    os.Exit(3)
}
```

Eslatma: C dagidan farqli, Go da `main` funksiyasidan int qiymat qaytarib status ko‘rsatilmaydi. Nol bo‘lmagan status bilan chiqish uchun `os.Exit` dan foydalaning.

`go run` bilan ishga tushirganda, chiqish statusini go ko‘rsatadi:
```bash
$ go run exit.go
exit status 3
```

Binarni build qilib ishga tushirsangiz, statusni terminalda ko‘rasiz:
```bash
$ go build exit.go
$ ./exit
$ echo $?
3
```

Ko‘rib turganingizdek, dasturdagi `!` hech qachon chop etilmadi.
</div>
