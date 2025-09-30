---
title: Kanallar (Channels)
summary: Kanallar — goroutinlarni bog'lovchi quvurlar; qiymatlarni yuborish/qabul qilish.
date: 2025-09-30
---

## Kanallar (Channels)

<div class="my-md-content">
Kanallar — concurrent goroutinlarni bog'laydigan quvurlar. Bitta goroutina kanalga qiymat yuboradi, boshqasi esa shu qiymatni qabul qiladi.

```go
package main

import "fmt"

func main() {
    // Yangi kanal yaratish: make(chan val-type). Kanal turgan qiymatlar turi bilan tiplanadi
    messages := make(chan string)

    // Kanalga qiymat yuborish: channel <- value
    // Quyida "ping" matnini yuqorida yaratgan messages kanaliga yangi goroutina orqali yuboramiz
    go func() { messages <- "ping" }()

    // Kanalidan qiymat qabul qilish: <-channel
    // Yuqorida yuborilgan "ping" ni qabul qilib, chop etamiz
    msg := <-messages
    fmt.Println(msg)
}
```

Dastur ishga tushirilganda, "ping" xabari kanal orqali bitta goroutinadan boshqasiga muvaffaqiyatli uzatiladi.

Terminalda bajarish:
```bash
$ go run channels.go 
ping
```

Odatiy holatda yuborish va qabul qilish operatsiyalari ikkala tomonga tayyor bo'lmaguncha bloklanadi. Shu xususiyat tufayli qo'shimcha sinxronizatsiyasiz ham dastur oxirida xabarni kutishimiz mumkin bo'ldi.
</div>
