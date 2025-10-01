---
title: Kataloglar (directories)
summary: Katalog yaratish/ro'yxatlash/aylanish (WalkDir), ishchi katalogni o'zgartirish va vaqtinchalik daraxtni tozalash.
date: 2025-09-30
---

## Kataloglar (directories)

<div class="my-md-content">
Go fayl tizimidagi kataloglar bilan ishlash uchun bir qator foydali funksiyalarni taqdim etadi.

```go
package main

import (
    "fmt"
    "io/fs"
    "os"
    "path/filepath"
)

func check(e error) {
    if e != nil {
        panic(e)
    }
}

func main() {
    // Joriy ishchi katalog ichida yangi pastki katalog yaratish
    err := os.Mkdir("subdir", 0755)
    check(err)

    // Vaqtinchalik kataloglarni yaratganda, ularni olib tashlashni defer bilan rejalang
    // RemoveAll — butun daraxtni o'chiradi (rm -rf ga o'xshash)
    defer os.RemoveAll("subdir")

    // Bo'sh fayl yaratish uchun yordamchi funksiya
    createEmptyFile := func(name string) {
        d := []byte("")
        check(os.WriteFile(name, d, 0644))
    }

    createEmptyFile("subdir/file1")

    // Kataloglar iyerarxiyasini (ota-onalar bilan) yaratish — mkdir -p ga o'xshash
    err = os.MkdirAll("subdir/parent/child", 0755)
    check(err)

    createEmptyFile("subdir/parent/file2")
    createEmptyFile("subdir/parent/file3")
    createEmptyFile("subdir/parent/child/file4")

    // ReadDir — katalog tarkibini ro'yxatlash (os.DirEntry massivini qaytaradi)
    c, err := os.ReadDir("subdir/parent")
    check(err)

    fmt.Println("Listing subdir/parent")
    for _, entry := range c {
        fmt.Println(" ", entry.Name(), entry.IsDir())
    }

    // Chdir — ishchi katalogni o'zgartirish (cd kabi)
    err = os.Chdir("subdir/parent/child")
    check(err)

    // Endi joriy katalogni ro'yxatlasak, subdir/parent/child ko'rinadi
    c, err = os.ReadDir(".")
    check(err)

    fmt.Println("Listing subdir/parent/child")
    for _, entry := range c {
        fmt.Println(" ", entry.Name(), entry.IsDir())
    }

    // Boshlang'ich joyga qaytish
    err = os.Chdir("../../..")
    check(err)

    // Katalogni rekursiv aylanish — barcha pastki kataloglar bilan
    fmt.Println("Visiting subdir")
    err = filepath.WalkDir("subdir", visit)
    check(err)
}

// WalkDir topgan har bir fayl/katalog uchun visit chaqiriladi
func visit(path string, d fs.DirEntry, err error) error {
    if err != nil {
        return err
    }
    fmt.Println(" ", path, d.IsDir())
    return nil
}
```

Terminalda bajarish:
```bash
$ go run directories.go
Listing subdir/parent
  child true
  file2 false
  file3 false
Listing subdir/parent/child
  file4 false
Visiting subdir
  subdir true
  subdir/file1 false
  subdir/parent true
  subdir/parent/child true
  subdir/parent/child/file4 false
  subdir/parent/file2 false
  subdir/parent/file3 false
```
</div>
