---
title: Epoch (Unix vaqti)
summary: Unix epoch'dan beri o'tgan sekund/millisekund/nanosekundlarni olish va konvertatsiya qilish.
date: 2025-09-30
---

## Epoch (Unix vaqti)

<div class="my-md-content">
Dasturlarda ko‘p uchraydigan talab — Unix epoch (1970-01-01 00:00:00 UTC) dan beri o‘tgan sekund, millisekund yoki nanosekundlarni olish. Go'da buni quyidagicha bajarish mumkin.

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    // Hozirgi vaqt va uning epoch'dan beri o‘tgan sekund/millisekund/nanosekund ko‘rinishlari
    now := time.Now()
    fmt.Println(now)

    fmt.Println(now.Unix())       // sekund
    fmt.Println(now.UnixMilli())  // millisekund
    fmt.Println(now.UnixNano())   // nanosekund

    // Sekund yoki nanosekundlardan vaqtga qaytarish
    fmt.Println(time.Unix(now.Unix(), 0))
    fmt.Println(time.Unix(0, now.UnixNano()))
}
```

Terminalda bajarish:
```bash
$ go run epoch.go 
2012-10-31 16:13:58.292387 +0000 UTC
1351700038
1351700038292
1351700038292387000
2012-10-31 16:13:58 +0000 UTC
2012-10-31 16:13:58.292387 +0000 UTC
```

Keyingi bo‘limda vaqtni parse qilish va formatlashni ko‘ramiz.
</div>
