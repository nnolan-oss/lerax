---
title: Select
summary: Go'da select — bir vaqtning o'zida bir nechta kanal operatsiyalarini kutish.
date: 2025-09-30
---

## Select

<div class="my-md-content">
`select` yordamida bir nechta kanal operatsiyalarini bir paytning o'zida kutish mumkin. Goroutina va kanallarni `select` bilan uyg'unlashtirish Go'ning kuchli xususiyatlaridan.

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    // Misolda ikki kanal ustidan select qilamiz
    c1 := make(chan string)
    c2 := make(chan string)

    // Har bir kanal ma'lum vaqtdan so'ng qiymat oladi (bloklovchi RPC'ni taqlid qilish kabi)
    go func() {
        time.Sleep(1 * time.Second)
        c1 <- "one"
    }()
    go func() {
        time.Sleep(2 * time.Second)
        c2 <- "two"
    }()

    // select bilan ikkala qiymatni ham kutamiz va kelganini darhol chop etamiz
    for range 2 {
        select {
        case msg1 := <-c1:
            fmt.Println("received", msg1)
        case msg2 := <-c2:
            fmt.Println("received", msg2)
        }
    }
}
```

Kutilganidek, avval "one", keyin "two" qiymatlari olinadi.

Terminalda bajarish:
```bash
$ time go run select.go 
received one
received two

real    0m2.245s
```

E'tibor bering, umumiy bajarilish vaqti ~2 soniya, chunki 1 va 2 soniyalik kutishlar goroutinalarda parallel bajariladi.
</div>
