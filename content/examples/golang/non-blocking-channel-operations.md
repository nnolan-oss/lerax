---
title: Netyopiluvchi (non-blocking) kanal operatsiyalari
summary: select + default bilan netyopiluvchi yuborish/qabul qilish va multi-way select.
date: 2025-09-30
---

## Netyopiluvchi kanal operatsiyalari

<div class="my-md-content">
Asosiy kanal yuborish/qabul qilish operatsiyalari bloklovchi. Biroq `select` ning `default` holati bilan netyopiluvchi yuborish, qabul qilish va hatto multi-way netyopiluvchi select qilish mumkin.

```go
package main

import "fmt"

func main() {
    messages := make(chan string)
    signals := make(chan bool)

    // Netyopiluvchi qabul: agar messages da qiymat bo'lsa — o'sha case ishlaydi,
    // bo'lmasa darhol default bajariladi
    select {
    case msg := <-messages:
        fmt.Println("received message", msg)
    default:
        fmt.Println("no message received")
    }

    // Netyopiluvchi yuborish: bu yerda messages unbuffered va qabul qiluvchi yo'q,
    // shu sabab default ishlaydi
    msg := "hi"
    select {
    case messages <- msg:
        fmt.Println("sent message", msg)
    default:
        fmt.Println("no message sent")
    }

    // Multi-way netyopiluvchi select: bir nechta case va default
    select {
    case msg := <-messages:
        fmt.Println("received message", msg)
    case sig := <-signals:
        fmt.Println("received signal", sig)
    default:
        fmt.Println("no activity")
    }
}
```

Terminalda bajarish:
```bash
$ go run non-blocking-channel-operations.go 
no message received
no message sent
no activity
```
</div>
