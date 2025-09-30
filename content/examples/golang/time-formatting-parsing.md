---
title: Vaqtni formatlash / parse qilish
summary: time paketida pattern-ga asoslangan layoutlar bilan formatlash va parse qilish.
date: 2025-09-30
---

## Vaqtni formatlash / parse qilish

<div class="my-md-content">
Go vaqtni formatlash va parse qilishni pattern-ga asoslangan layoutlar bilan qo'llab-quvvatlaydi.

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    p := fmt.Println

    // RFC3339 bo'yicha formatlash — mos layout konstantasidan foydalanamiz
    t := time.Now()
    p(t.Format(time.RFC3339))

    // Parse ham xuddi shu layoutlardan foydalanadi
    t1, e := time.Parse(time.RFC3339, "2012-11-01T22:08:41+00:00")
    p(t1)

    // Format va Parse — misolga asoslangan layoutlardan foydalanadi
    // Layoutda albatta "Mon Jan 2 15:04:05 MST 2006" referens vaqti namunasi ishlatiladi
    p(t.Format("3:04PM"))
    p(t.Format("Mon Jan _2 15:04:05 2006"))
    p(t.Format("2006-01-02T15:04:05.999999-07:00"))

    form := "3 04 PM"
    t2, e := time.Parse(form, "8 41 PM")
    p(t2)

    // Butun-son ko'rinishlar uchun komponentlarni ajratib, oddiy formatlashdan ham foydalanish mumkin
    fmt.Printf("%d-%02d-%02dT%02d:%02d:%02d-00:00\n",
        t.Year(), t.Month(), t.Day(),
        t.Hour(), t.Minute(), t.Second())

    // Noto'g'ri kirishda Parse xato qaytaradi
    ansic := "Mon Jan _2 15:04:05 2006"
    _, e = time.Parse(ansic, "8:41PM")
    p(e)
}
```

Terminalda bajarish:
```bash
$ go run time-formatting-parsing.go 
2014-04-15T18:00:15-07:00
2012-11-01 22:08:41 +0000 +0000
6:00PM
Tue Apr 15 18:00:15 2014
2014-04-15T18:00:15.161182-07:00
0000-01-01 20:41:00 +0000 UTC
2014-04-15T18:00:15-00:00
parsing time "8:41PM" as "Mon Jan _2 15:04:05 2006": ...
```
</div>
