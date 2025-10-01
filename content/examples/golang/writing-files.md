---
title: Fayllarga yozish
summary: Go’da faylga yozish — WriteFile, Create, Write/WriteString, Sync va bufio.Writer.
date: 2025-09-30
---

## Fayllarga yozish

<div class="my-md-content">
Go’da faylga yozish o‘qishga o‘xshash andozalarda bajariladi.

```go
package main

import (
    "bufio"
    "fmt"
    "os"
)

func check(e error) {
    if e != nil {
        panic(e)
    }
}

func main() {
    // Eng sodda usul — string (yoki baytlar)ni faylga tushirish
    d1 := []byte("hello\ngo\n")
    err := os.WriteFile("/tmp/dat1", d1, 0644)
    check(err)

    // Ko‘proq boshqaruv uchun — faylni yozish uchun ochish
    f, err := os.Create("/tmp/dat2")
    check(err)

    // Idiomatik — ochgach darhol yopishni defer bilan rejalash
    defer f.Close()

    // Bayt slice yozish
    d2 := []byte{115, 111, 109, 101, 10}
    n2, err := f.Write(d2)
    check(err)
    fmt.Printf("wrote %d bytes\n", n2)

    // WriteString ham mavjud
    n3, err := f.WriteString("writes\n")
    check(err)
    fmt.Printf("wrote %d bytes\n", n3)

    // Sync — yozuvlarni barqaror xotiraga flush qilish
    f.Sync()

    // bufio — bufferlangan yozuvlar
    w := bufio.NewWriter(f)
    n4, err := w.WriteString("buffered\n")
    check(err)
    fmt.Printf("wrote %d bytes\n", n4)

    // Flush — bufferdagi yozuvlarni asosiy writer'ga qo‘llash
    w.Flush()
}
```

Ishga tushirish:
```bash
$ go run writing-files.go 
wrote 5 bytes
wrote 7 bytes
wrote 9 bytes
```

Yozilgan fayllarni tekshirish:
```bash
$ cat /tmp/dat1
hello
go
$ cat /tmp/dat2
some
writes
buffered
```

Keyin stdin/stdout oqimlari bilan fayl I/O g‘oyalarini qo‘llashni ko‘ramiz.
</div>
