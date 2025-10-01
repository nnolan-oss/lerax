---
title: Vaqtinchalik fayl va kataloglar
summary: os.CreateTemp va os.MkdirTemp bilan vaqtinchalik fayl/katalog yaratish va tozalash.
date: 2025-09-30
---

## Vaqtinchalik fayl va kataloglar

<div class="my-md-content">
Dastur bajarilishi davomida, dastur tugagach kerak bo‘lmaydigan ma’lumotlarni yaratishimiz mumkin. Vaqtinchalik fayl va kataloglar fayl tizimini iflos qilmaslik uchun qulay.

```go
package main

import (
    "fmt"
    "os"
    "path/filepath"
)

func check(e error) {
    if e != nil {
        panic(e)
    }
}

func main() {
    // Eng oson yo‘l — os.CreateTemp: fayl yaratadi va o‘qish/yozish uchun ochadi
    // Birinchi argument "" — OS ning standart vaqtinchalik joyidan foydalanish
    f, err := os.CreateTemp("", "sample")
    check(err)

    // Vaqtinchalik fayl nomi
    fmt.Println("Temp file name:", f.Name())

    // Ish tugagach faylni tozalashni rejalang — OS keyinchalik o‘zi ham tozalashi mumkin,
    // lekin aniq tozalash yaxshi amaliyot
    defer os.Remove(f.Name())

    // Faylga ma’lumot yozish
    _, err = f.Write([]byte{1, 2, 3, 4})
    check(err)

    // Ko‘p vaqtinchalik fayllar kerak bo‘lsa, vaqtinchalik katalog yaratish qulay
    // os.MkdirTemp — CreateTemp kabi, lekin katalog nomi qaytaradi
    dname, err := os.MkdirTemp("", "sampledir")
    check(err)
    fmt.Println("Temp dir name:", dname)

    // Butun katalog daraxtini tozalash
    defer os.RemoveAll(dname)

    // Endi shu katalog ichida vaqtinchalik fayl nomlarini sintez qilamiz
    fname := filepath.Join(dname, "file1")
    err = os.WriteFile(fname, []byte{1, 2}, 0666)
    check(err)
}
```

Terminalda bajarish:
```bash
$ go run temporary-files-and-directories.go
Temp file name: /tmp/sample610887201
Temp dir name: /tmp/sampledir898854668
```
</div>
