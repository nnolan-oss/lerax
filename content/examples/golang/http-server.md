---
title: HTTP server
summary: net/http bilan sodda HTTP server — handler'lar, marshrutlar va ListenAndServe.
date: 2025-09-30
---

## HTTP server

<div class="my-md-content">
`net/http` paketi yordamida sodda HTTP server yozish oson.

```go
package main

import (
    "fmt"
    "net/http"
)

// Handler — http.Handler interfeysini bajaruvchi obyekt yoki mos imzodagi funksiya
// http.HandlerFunc adapteri funksiyalarni handler sifatida ishlatishga imkon beradi
func hello(w http.ResponseWriter, req *http.Request) {
    // Handlerlar http.ResponseWriter va *http.Request qabul qiladi
    // Javobga oddiy matn yozamiz
    fmt.Fprintf(w, "hello\n")
}

func headers(w http.ResponseWriter, req *http.Request) {
    // Barcha request headerlarini o‘qib, javobga chiqaramiz
    for name, headers := range req.Header {
        for _, h := range headers {
            fmt.Fprintf(w, "%v: %v\n", name, h)
        }
    }
}

func main() {
    // Marshrutlarga handlerlarni ro‘yxatdan o‘tkazish (default router)
    http.HandleFunc("/hello", hello)
    http.HandleFunc("/headers", headers)

    // Serverni ishga tushirish. nil — default router'dan foydalanish
    http.ListenAndServe(":8090", nil)
}
```

Ishga tushirish:
```bash
$ go run http-server.go &
```

So‘rov yuborish:
```bash
$ curl localhost:8090/hello
hello
```
</div>
