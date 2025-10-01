---
title: Fayl yo'llari (filepath)
summary: filepath paketi bilan ko‘chma (portable) yo‘l qurish va tahlil qilish.
date: 2025-09-30
---

## Fayl yo'llari (filepath)

<div class="my-md-content">
`filepath` paketi turli OS lar orasida ko‘chma bo‘lgan yo‘llarni qurish va tahlil qilish imkonini beradi (Linux: dir/file; Windows: dir\file).

```go
package main

import (
    "fmt"
    "path/filepath"
    "strings"
)

func main() {
    // Join — ko‘chma tarzda yo‘l qurish uchun ishlatiladi
    p := filepath.Join("dir1", "dir2", "filename")
    fmt.Println("p:", p)

    // Join — keraksiz ajratkichlar va katalog o‘zgarishlarini normallashtiradi
    fmt.Println(filepath.Join("dir1//", "filename"))
    fmt.Println(filepath.Join("dir1/../dir1", "filename"))

    // Dir va Base — yo‘lni katalog va fayl nomiga ajratish
    fmt.Println("Dir(p):", filepath.Dir(p))
    fmt.Println("Base(p):", filepath.Base(p))

    // Yo‘l absolyutmi?
    fmt.Println(filepath.IsAbs("dir/file"))
    fmt.Println(filepath.IsAbs("/dir/file"))

    filename := "config.json"

    // Fayl kengaytmasini ajratib olish
    ext := filepath.Ext(filename)
    fmt.Println(ext)

    // Kengaytmasiz nomni olish
    fmt.Println(strings.TrimSuffix(filename, ext))

    // Rel — baza va nishon orasida nisbiy yo‘lni topish
    rel, err := filepath.Rel("a/b", "a/b/t/file")
    if err != nil {
        panic(err)
    }
    fmt.Println(rel)

    rel, err = filepath.Rel("a/b", "a/c/t/file")
    if err != nil {
        panic(err)
    }
    fmt.Println(rel)
}
```

Terminalda bajarish:
```bash
$ go run file-paths.go
p: dir1/dir2/filename
dir1/filename
dir1/filename
Dir(p): dir1/dir2
Base(p): filename
false
true
.json
config
t/file
../c/t/file
```
</div>
