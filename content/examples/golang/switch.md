---
title: Switch
summary: Go tilida switch — ko'p shartlarni yozish uchun qulay konstruksiya.
date: 2025-09-30
---

## Switch shartlar

<div class="my-md-content">
`switch` operatori ko'p shartlarni ixcham yozish imkonini beradi.

```go
package main

import (
    "fmt"
    "time"
)

func main() {

    // Oddiy switch
    i := 2
    fmt.Print("Write ", i, " as ")
    switch i {
    case 1:
        fmt.Println("one")
    case 2:
        fmt.Println("two")
    case 3:
        fmt.Println("three")
    }

    // Bitta case ichida bir nechta ifodalarni vergul bilan ajratish mumkin
    // default ham qo'llanilishi mumkin
    switch time.Now().Weekday() {
    case time.Saturday, time.Sunday:
        fmt.Println("It's the weekend")
    default:
        fmt.Println("It's a weekday")
    }

    // Ifoda-siz switch: if/else mantiqini muqobil ifodalash
    // case lar doimiy bo'lmagan ifodalar ham bo'lishi mumkin
    t := time.Now()
    switch {
    case t.Hour() < 12:
        fmt.Println("It's before noon")
    default:
        fmt.Println("It's after noon")
    }

    // Type switch: qiymat emas, tur (type) bo'yicha solishtirish
    // Bu usul interface qiymatining turini aniqlashga yordam beradi
    whatAmI := func(i interface{}) {
        switch t := i.(type) {
        case bool:
            fmt.Println("I'm a bool")
        case int:
            fmt.Println("I'm an int")
        default:
            fmt.Printf("Don't know type %T\n", t)
        }
    }
    whatAmI(true)
    whatAmI(1)
    whatAmI("hey")
}
```

Terminalda bajarish:
```bash
$ go run switch.go 
Write 2 as two
It's a weekday
It's after noon
I'm a bool
I'm an int
Don't know type string
```
</div>
