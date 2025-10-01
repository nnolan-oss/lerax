---
title: Loglash (log va log/slog)
summary: Standart log bilan erkin format, log/slog bilan strukturali (JSON) loglar.
date: 2025-09-30
---

## Loglash (log va log/slog)

<div class="my-md-content">
Go standart kutubxonasi log chiqarish uchun qulay vositalarni taqdim etadi: `log` — erkin matn ko‘rinishida; `log/slog` — strukturali (masalan, JSON) chiqish.

```go
package main

import (
    "bytes"
    "fmt"
    "log"
    "os"

    "log/slog"
)

func main() {
    // Oddiy log — standart logger oldindan sozlangan va os.Stderr ga yozadi
    // Fatal*/Panic* — log yozgach, mos ravishda chiqadi yoki panic qiladi
    log.Println("standard logger")

    // Flaglar bilan formatni o'zgartirish: LstdFlags (sana+vaqt), Lmicroseconds va boshqalar
    log.SetFlags(log.LstdFlags | log.Lmicroseconds)
    log.Println("with micro")

    // Chaqqirilgan fayl/qatordan chiqarish
    log.SetFlags(log.LstdFlags | log.Lshortfile)
    log.Println("with file/line")

    // Maxsus logger yaratish va prefiks qo'yish
    mylog := log.New(os.Stdout, "my:", log.LstdFlags)
    mylog.Println("from mylog")

    // Mavjud loggerlarda prefiksni o'zgartirish
    mylog.SetPrefix("ohmy:")
    mylog.Println("from mylog")

    // Ixtiyoriy io.Writer ga log yozish
    var buf bytes.Buffer
    buflog := log.New(&buf, "buf:", log.LstdFlags)

    // Bu yozuv buf ichiga ketadi
    buflog.Println("hello")

    // Aslida ekranga chiqaramiz
    fmt.Print("from buflog:", buf.String())

    // slog — strukturali loglar (mas., JSON)
    jsonHandler := slog.NewJSONHandler(os.Stderr, nil)
    myslog := slog.New(jsonHandler)
    myslog.Info("hi there")

    // Xabar bilan birga key=value juftliklari
    myslog.Info("hello again", "key", "val", "age", 25)
}
```

Namunaviy chiqish (sana/vaqt ishga tushirilgan vaqtdan bog'liq):
```bash
$ go run logging.go
2023/08/22 10:45:16 standard logger
2023/08/22 10:45:16.904141 with micro
2023/08/22 10:45:16 logging.go:40: with file/line
my:2023/08/22 10:45:16 from mylog
ohmy:2023/08/22 10:45:16 from mylog
from buflog:buf:2023/08/22 10:45:16 hello
```

JSON ko‘rinishi:
```json
{"time":"2023-08-22T10:45:16.904166391-07:00","level":"INFO","msg":"hi there"}
{"time":"2023-08-22T10:45:16.904178985-07:00","level":"INFO","msg":"hello again","key":"val","age":25}
```
</div>
