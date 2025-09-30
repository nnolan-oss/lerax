---
title: Kanallar ustida range
summary: Kanal yopilgunga qadar qabul qilingan qiymatlar ustida range bilan iteratsiya qilish.
date: 2025-09-30
---

## Kanallar ustida range

<div class="my-md-content">
Oldingi misollarda `for` va `range` bilan asosiy tuzilmalar ustida aylanishni ko'rdik. Xuddi shu sintaksisni kanal orqali qabul qilingan qiymatlar ustida ham ishlatish mumkin.

```go
package main

import "fmt"

func main() {
    // queue kanaliga 2 ta qiymat yuboramiz
    queue := make(chan string, 2)
    queue <- "one"
    queue <- "two"
    close(queue)

    // range kanalga kelayotgan har bir element ustida aylanadi
    // Kanal yuqorida yopilgani uchun, 2 ta elementdan keyin iteratsiya tugaydi
    for elem := range queue {
        fmt.Println(elem)
    }
}
```

Terminalda bajarish:
```bash
$ go run range-over-channels.go
one
two
```

Ushbu misolda bo'sh bo'lmagan kanalni yopish mumkinligi va undagi qolgan qiymatlar baribir qabul qilinishini ham ko'rdik.
</div>
