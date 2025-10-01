---
title: Signallar (Unix)
summary: os/signal va kanallar bilan SIGINT/SIGTERM kabi signallarni tutish va muloyim yakunlash.
date: 2025-09-30
---

## Signallar (Unix)

<div class="my-md-content">
Ba'zan Go dasturlarini Unix signallarini aqlli boshqarishini xohlaymiz. Masalan, server SIGTERM olganda muloyim yopilishi yoki CLI SIGINT (^C) olganda ishlashni to‘xtatishi. Kanallar bilan signallarni qanday tutishni ko‘ramiz.

```go
package main

import (
    "fmt"
    "os"
    "os/signal"
    "syscall"
)

func main() {
    // os.Signal qiymatlari kanalga yuboriladi; kanal bufferlangan bo‘lishi kerak
    sigs := make(chan os.Signal, 1)

    // signal.Notify — ko‘rsatilgan signallar haqida xabarnoma olish uchun kanalni ro‘yxatdan o‘tkazish
    signal.Notify(sigs, syscall.SIGINT, syscall.SIGTERM)

    // Muloyim yopilish ssenariysi uchun alohida goroutina va done kanali
    done := make(chan bool, 1)

    go func() {
        // Bloklovchi qabul: signalni olsa, chiqaradi va yakunlashni bildiradi
        sig := <-sigs
        fmt.Println()
        fmt.Println(sig)
        done <- true
    }()

    fmt.Println("awaiting signal")
    <-done
    fmt.Println("exiting")
}
```

Ishga tushirganda dastur signalni kutib bloklanadi. Terminalda ^C (SIGINT) yuborsak, `interrupt` chiqarib, dasturdan chiqadi:
```bash
$ go run signals.go
awaiting signal
^C
interrupt
exiting
```
</div>
