---
title: Kanalni bufferlash (Buffered Channels)
summary: Odatiy kanallar unbuffered; buffered kanallar esa cheklangan miqdorda qiymatlarni qabul qila oladi.
date: 2025-09-30
---

## Kanalni bufferlash (Buffered Channels)

<div class="my-md-content">
Odatiy holatda kanallar unbuffered bo'ladi — ya'ni yuborish (chan <-) faqat mos qabul qilish (<- chan) tayyor bo'lsa amalga oshadi. Buffered kanallar esa mos qabul qiluvchi bo'lmasa ham, cheklangan miqdorda qiymatlarni qabul qila oladi.

```go
package main

import "fmt"

func main() {
    // 2 ta qiymatgacha bufferlanuvchi string kanali yaratamiz
    messages := make(chan string, 2)

    // Bu kanal buffered bo'lgani uchun, mos keluvchi qabul qiluvchisiz ham yubora olamiz
    messages <- "buffered"
    messages <- "channel"

    // Keyin odatdagidek qabul qilib olamiz
    fmt.Println(<-messages)
    fmt.Println(<-messages)
}
```

Terminalda bajarish:
```bash
$ go run channel-buffering.go 
buffered
channel
```
</div>
