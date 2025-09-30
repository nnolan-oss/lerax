---
title: Fayllarni o‘qish
summary: Go’da fayllarni to‘liq yoki bo‘lib-bo‘lib o‘qish, seek va bufio bilan ishlash.
date: 2025-09-30
---

## Fayllarni o‘qish

<div class="my-md-content">
Ko‘plab Go dasturlarida fayl o‘qish zarur bo‘ladi. Quyida turli usullar ko‘rsatilgan.

```go
package main

import (
    "bufio"
    "fmt"
    "io"
    "os"
)

// Ko‘p chaqiriqlarda xatoni tekshirish kerak bo‘ladi — yordamchi funksiya
func check(e error) {
    if e != nil {
        panic(e)
    }
}

func main() {
    // Eng oddiy usul: faylning butun mazmunini xotiraga o‘qish
    dat, err := os.ReadFile("/tmp/dat")
    check(err)
    fmt.Print(string(dat))

    // Qaysi qismlarni va qanday o‘qishni boshqarish: faylni ochamiz
    f, err := os.Open("/tmp/dat")
    check(err)

    // Boshlanishidan bir nechta bayt o‘qish (necha o‘qilganini ham bilamiz)
    b1 := make([]byte, 5)
    n1, err := f.Read(b1)
    check(err)
    fmt.Printf("%d bytes: %s\n", n1, string(b1[:n1]))

    // Ma’lum joyga seek qilib, u yerdan o‘qish
    o2, err := f.Seek(6, io.SeekStart)
    check(err)
    b2 := make([]byte, 2)
    n2, err := f.Read(b2)
    check(err)
    fmt.Printf("%d bytes @ %d: ", n2, o2)
    fmt.Printf("%v\n", string(b2[:n2]))

    // Joriy pozitsiyaga nisbatan seek
    _, err = f.Seek(2, io.SeekCurrent)
    check(err)

    // Fayl oxiriga nisbatan seek
    _, err = f.Seek(-4, io.SeekEnd)
    check(err)

    // io paketidagi yordamchilar: ReadAtLeast bilan ishonchliroq o‘qish
    o3, err := f.Seek(6, io.SeekStart)
    check(err)
    b3 := make([]byte, 2)
    n3, err := io.ReadAtLeast(f, b3, 2)
    check(err)
    fmt.Printf("%d bytes @ %d: %s\n", n3, o3, string(b3))

    // Rewind: Seek(0, io.SeekStart)
    _, err = f.Seek(0, io.SeekStart)
    check(err)

    // bufio bilan bufferlangan o‘qish: ko‘p kichik o‘qishlarda samarali
    r4 := bufio.NewReader(f)
    b4, err := r4.Peek(5)
    check(err)
    fmt.Printf("5 bytes: %s\n", string(b4))

    // Ish tugagach faylni yopish (odatda Open’dan keyin darhol defer bilan rejalashtiriladi)
    f.Close()
}
```

Namuna:
```bash
$ echo "hello" > /tmp/dat
$ echo "go" >>   /tmp/dat
$ go run reading-files.go
hello
go
5 bytes: hello
2 bytes @ 6: go
2 bytes @ 6: go
5 bytes: hello
```
</div>
