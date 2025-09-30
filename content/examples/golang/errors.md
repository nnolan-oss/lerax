---
title: Xatolar (errors)
summary: Go'da xatolar alohida qaytish qiymati sifatida uzatiladi — idiomatik ishlatish.
date: 2025-09-30
---

## Xatolar (errors)

<div class="my-md-content">
Go'da xatolarni alohida, aniq qaytish qiymati orqali uzatish — idiomatik yondashuv. Bu Java/Python/Ruby dagi istisnolardan (exceptions) farq qiladi va C dagi bitta natija/xato qiymatini yuklashdan ham qulayroq. Shu uslub qaysi funksiyalar xato qaytarishi va ularni qanday boshqarishni aniq ko'rsatadi.

Qo'shimcha ma'lumot uchun `errors` paketi hujjatini va blog maqolasini ko'ring.

```go
package main

import (
    "errors"
    "fmt"
)

// Odatiy bo'yicha xatolar oxirgi qaytish qiymati bo'ladi va tipi error (built-in interface)
func f(arg int) (int, error) {
    if arg == 42 {
        // errors.New — berilgan xabar bilan oddiy error qiymati yaratadi
        return -1, errors.New("can't work with 42")
    }
    // error o'rnida nil bo'lsa, xato yo'q degani
    return arg + 3, nil
}

// "sentinel" xato — oldindan e'lon qilingan o'zgaruvchi, aniq xatolik holatini bildiradi
var ErrOutOfTea = fmt.Errorf("no more tea available")
var ErrPower = fmt.Errorf("can't boil water")

func makeTea(arg int) error {
    if arg == 2 {
        return ErrOutOfTea
    } else if arg == 4 {
        // Yuqori darajadagi kontekst qo'shish uchun xatolarni o'rash mumkin (%w bilan)
        // O'ralgan zanjirni keyin errors.Is/errors.As bilan tekshirish mumkin
        return fmt.Errorf("making tea: %w", ErrPower)
    }
    return nil
}

func main() {
    for _, i := range []int{7, 42} {
        // Idiomatik: inline xatoni tekshirish
        if r, e := f(i); e != nil {
            fmt.Println("f failed:", e)
        } else {
            fmt.Println("f worked:", r)
        }
    }

    for i := range 5 {
        if err := makeTea(i); err != nil {
            // errors.Is — berilgan xato (yoki zanjirdagi istalgan xato) ma'lum qiymatga tengmi, tekshiradi
            if errors.Is(err, ErrOutOfTea) {
                fmt.Println("We should buy new tea!")
            } else if errors.Is(err, ErrPower) {
                fmt.Println("Now it is dark.")
            } else {
                fmt.Printf("unknown error: %s\n", err)
            }
            continue
        }
        fmt.Println("Tea is ready!")
    }
}
```

Terminalda bajarish:
```bash
$ go run errors.go
f worked: 10
f failed: can't work with 42
Tea is ready!
Tea is ready!
We should buy new tea!
Tea is ready!
Now it is dark.
```
</div>
