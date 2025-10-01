---
title: Context
summary: net/http da context.Context bilan bekor qilish signallari va deadline'lar bilan ishlash.
date: 2025-09-30
---

## Context

<div class="my-md-content">
Oldingi misolda sodda HTTP serverni ko'rdik. `context.Context` — bekor qilish (cancellation), deadline va so'rov doirasidagi qiymatlarni API chegaralari va goroutinalar osha tashishga xizmat qiladi.

```go
package main

import (
    "fmt"
    "net/http"
    "time"
)

func hello(w http.ResponseWriter, req *http.Request) {
    // Har bir so'rov uchun net/http tomonidan Context yaratiladi; Context() bilan olinadi
    ctx := req.Context()
    fmt.Println("server: hello handler started")
    defer fmt.Println("server: hello handler ended")

    // Javobni yuborishdan oldin biroz kutamiz (server bajaradigan ishni simulyatsiya qilish)
    // Ishlayotganda ctx.Done() kanalini kuzatib, bekor qilish signali bo'lsa, iloji boricha tezroq qaytamiz
    select {
    case <-time.After(10 * time.Second):
        fmt.Fprintf(w, "hello\n")
    case <-ctx.Done():
        // Done yopilganda, Err() bekor qilish sababini qaytaradi
        err := ctx.Err()
        fmt.Println("server:", err)
        internalError := http.StatusInternalServerError
        http.Error(w, err.Error(), internalError)
    }
}

func main() {
    // Marshrut va handlerni ro'yxatdan o'tkazib, serverni ishga tushiramiz
    http.HandleFunc("/hello", hello)
    http.ListenAndServe(":8090", nil)
}
```

Ishga tushirish:
```bash
$ go run context.go &
```

Mijoz so'rov yuborib, tez orada Ctrl+C bilan bekor qilishni simulyatsiya qilish:
```bash
$ curl localhost:8090/hello
server: hello handler started
^C
server: context canceled
server: hello handler ended
```
</div>
