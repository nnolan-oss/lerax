---
title: Tickerlar
summary: Ticker — ma'lum davr bilan takroriy ish bajarish; to'xtatilmaguncha signal yuboradi.
date: 2025-09-30
---

## Tickerlar

<div class="my-md-content">
Timer bir martalik hodisalar uchun, ticker esa davriy (interval) ishlar uchun. Quyida ticker to'xtatilguncha davriy signal yuboradigan misol.

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    // Ticker ham timer kabi kanal orqali qiymat yuboradi
    // 500ms da bir qiymat olamiz
    ticker := time.NewTicker(500 * time.Millisecond)
    done := make(chan bool)

    go func() {
        for {
            select {
            case <-done:
                return
            case t := <-ticker.C:
                fmt.Println("Tick at", t)
            }
        }
    }()

    // 1600ms dan so'ng ticker'ni to'xtatamiz
    time.Sleep(1600 * time.Millisecond)
    ticker.Stop()
    done <- true
    fmt.Println("Ticker stopped")
}
```

Terminalda bajarish:
```bash
$ go run tickers.go
Tick at 2012-09-23 11:29:56.487625 -0700 PDT
Tick at 2012-09-23 11:29:56.988063 -0700 PDT
Tick at 2012-09-23 11:29:57.488076 -0700 PDT
Ticker stopped
```
</div>
