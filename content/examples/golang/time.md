---
title: Vaqt va davomiyliklar (time)
summary: Go vaqt va davomiyliklar bilan ishlashni keng qo'llab-quvvatlaydi — asosiy amallar.
date: 2025-09-30
---

## Vaqt va davomiyliklar

<div class="my-md-content">
Go vaqt (time.Time) va davomiylik (time.Duration) bilan ishlash uchun boy imkoniyatlarga ega.

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    p := fmt.Println

    // Joriy vaqtni olish
    now := time.Now()
    p(now)

    // Aniqlashtirilgan sana/vaqt yaratish (vaqt zonasi bilan)
    then := time.Date(
        2009, 11, 17, 20, 34, 58, 651387237, time.UTC)
    p(then)

    // Tarkibiy qismlarni ajratib olish
    p(then.Year())
    p(then.Month())
    p(then.Day())
    p(then.Hour())
    p(then.Minute())
    p(then.Second())
    p(then.Nanosecond())
    p(then.Location())

    // Haftaning kuni
    p(then.Weekday())

    // Solishtirish: oldin/ketin/teng
    p(then.Before(now))
    p(then.After(now))
    p(then.Equal(now))

    // Ikki vaqt oralig'i (Duration)
    diff := now.Sub(then)
    p(diff)

    // Davomiylikni turli birliklarda olish
    p(diff.Hours())
    p(diff.Minutes())
    p(diff.Seconds())
    p(diff.Nanoseconds())

    // Davomiylik qo'shish/ayirish
    p(then.Add(diff))
    p(then.Add(-diff))
}
```

Terminalda bajarish (namuna):
```bash
$ go run time.go
2012-10-31 15:50:13.793654 +0000 UTC
2009-11-17 20:34:58.651387237 +0000 UTC
2009
November
17
20
34
58
651387237
UTC
Tuesday
true
false
false
25891h15m15.142266763s
25891.25420618521
1.5534752523711128e+06
9.320851514226677e+07
93208515142266763
2012-10-31 15:50:13.793654 +0000 UTC
2006-12-05 01:19:43.509120474 +0000 UTC
```

Keyingi bo'limda Unix epoch ga nisbatan vaqtlar bilan ishlashni ko'ramiz.
</div>
