---
title: URL'larni parse qilish
summary: net/url bilan URL qismlarini ajratib olish — scheme, userinfo, host/port, path, fragment, query.
date: 2025-09-30
---

## URL'larni parse qilish

<div class="my-md-content">
URL'lar resurslarni topishning yagona usulini beradi. Go'da URL'larni quyidagicha parse qilamiz.

```go
package main

import (
    "fmt"
    "net"
    "net/url"
)

func main() {
    // Misol URL: scheme, autentifikatsiya, host, port, path, query va fragment mavjud
    s := "postgres://user:pass@host.com:5432/path?k=v#f"

    // URL'ni parse qilish va xatoni tekshirish
    u, err := url.Parse(s)
    if err != nil {
        panic(err)
    }

    // Scheme
    fmt.Println(u.Scheme)

    // User — autentifikatsiya ma'lumotlari; Username/Password bilan ajratib olamiz
    fmt.Println(u.User)
    fmt.Println(u.User.Username())
    p, _ := u.User.Password()
    fmt.Println(p)

    // Host — host va port; SplitHostPort bilan ajratish
    fmt.Println(u.Host)
    host, port, _ := net.SplitHostPort(u.Host)
    fmt.Println(host)
    fmt.Println(port)

    // Path va fragment (# dan keyingi qism)
    fmt.Println(u.Path)
    fmt.Println(u.Fragment)

    // RawQuery — k=v ko'rinishidagi query qismi; ParseQuery bilan map'ga parse qilamiz
    fmt.Println(u.RawQuery)
    m, _ := url.ParseQuery(u.RawQuery)
    fmt.Println(m)
    fmt.Println(m["k"][0])
}
```

Terminalda bajarish:
```bash
$ go run url-parsing.go 
postgres
user:pass
user
pass
host.com:5432
host.com
5432
/path
f
k=v
map[k:[v]]
v
```
</div>
