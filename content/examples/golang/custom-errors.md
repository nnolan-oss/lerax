---
title: Maxsus xatolar (custom errors)
summary: Go'da Error() metodini amalga oshirib, o'z xato turingizni yaratish mumkin.
date: 2025-09-30
---

## Maxsus xatolar (custom errors)

<div class="my-md-content">
Go'da `error` interfeysini (Error() metodi) amalga oshirgan holda o'z xato turingizni yaratishingiz mumkin. Quyida argument xatosini aniq ifodalovchi misol keltirilgan.

```go
package main

import (
    "errors"
    "fmt"
)

// Odatda maxsus xato turlarida nom "...Error" bilan tugaydi
type argError struct {
    arg     int
    message string
}

// Error metodi — argError turini error interfeysiga mos qiladi
func (e *argError) Error() string {
    return fmt.Sprintf("%d - %s", e.arg, e.message)
}

func f(arg int) (int, error) {
    if arg == 42 {
        // O'z maxsus xatoyimizni qaytaramiz
        return -1, &argError{arg, "can't work with it"}
    }
    return arg + 3, nil
}

func main() {
    // errors.As — errors.Is dan kengroq: zanjirdagi xatoni ma'lum turga moslashtirishga urinadi
    _, err := f(42)
    var ae *argError
    if errors.As(err, &ae) {
        fmt.Println(ae.arg)
        fmt.Println(ae.message)
    } else {
        fmt.Println("err doesn't match argError")
    }
}
```

Terminalda bajarish:
```bash
$ go run custom-errors.go
42
can't work with it
```
</div>
