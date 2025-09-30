---
title: Defer
summary: Defer — funksiyaning yakunida bajariladigan chaqiruvlar; odatda tozalash (cleanup) uchun.
date: 2025-09-30
---

## Defer

<div class="my-md-content">
`defer` — dastur bajarilishining keyinroq nuqtasida (odatda funksiya yakunida) chaqirilishi kerak bo'lgan funksiyalarni rejalash uchun ishlatiladi. Ko'pincha tozalash (cleanup) ishlarida, boshqa tillardagi ensure/finally o'rnida qo'llanadi.

```go
package main

import (
    "fmt"
    "os"
)

// Fayl yaratish, yozish va yakunda yopishni defer bilan ko'rsatamiz
func main() {
    // Fayl ochilgach darhol yopishni rejalashtiramiz — main tugaganda bajariladi
    f := createFile("/tmp/defer.txt")
    defer closeFile(f)

    writeFile(f)
}

func createFile(p string) *os.File {
    fmt.Println("creating")
    f, err := os.Create(p)
    if err != nil {
        panic(err)
    }
    return f
}

func writeFile(f *os.File) {
    fmt.Println("writing")
    fmt.Fprintln(f, "data")
}

// Fayl yopishda xatolarni tekshirish muhim — defer ichida ham
func closeFile(f *os.File) {
    fmt.Println("closing")
    err := f.Close()
    if err != nil {
        panic(err)
    }
}
```

Terminalda bajarish:
```bash
$ go run defer.go
creating
writing
closing
```
</div>
