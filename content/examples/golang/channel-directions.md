---
title: Kanal yo'nalishlari (send-only / receive-only)
summary: Funksiya parametrlarida kanal yo'nalishini ko'rsatish tip xavfsizligini oshiradi.
date: 2025-09-30
---

## Kanal yo'nalishlari

<div class="my-md-content">
Kanallarni funksiya parametrlarida ishlatganda, kanal faqat yuborish (send-only) yoki faqat qabul qilish (receive-only) uchun ekanini ko'rsatish mumkin. Bu dastur tip xavfsizligini oshiradi.

```go
package main

import "fmt"

// ping faqat yuborish uchun mo'ljallangan kanal qabul qiladi (chan<-)
// Bu kanaldan qabul qilishga urinish kompilyatsiya xatosi bo'ladi
func ping(pings chan<- string, msg string) {
    pings <- msg
}

// pong — bitta qabul qilish (<-chan) va bitta yuborish (chan<-) kanalini oladi
func pong(pings <-chan string, pongs chan<- string) {
    msg := <-pings
    pongs <- msg
}

func main() {
    pings := make(chan string, 1)
    pongs := make(chan string, 1)

    ping(pings, "passed message")
    pong(pings, pongs)

    fmt.Println(<-pongs)
}
```

Terminalda bajarish:
```bash
$ go run channel-directions.go
passed message
```
</div>
