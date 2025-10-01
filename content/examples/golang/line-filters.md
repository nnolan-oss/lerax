---
title: Line filtrlar
summary: stdin'dan o‘qib, qayta ishlanib chiqqan natijani stdout'ga yozish (grep/sed kabi).
date: 2025-09-30
---

## Line filtrlar

<div class="my-md-content">
Line filtr — stdin'dan kirishni o‘qib, uni qayta ishlash va natijani stdout'ga chiqaradigan dastur turi. `grep` va `sed` — keng tarqalgan line filtrlar. Quyida barcha kirish qatorlarini katta harflarga aylantirib chiqaradigan oddiy filtr.

```go
package main

import (
    "bufio"
    "fmt"
    "os"
    "strings"
)

func main() {
    // Bufferlangan skaner bilan os.Stdin — qulay Scan metodi bilan keyingi token (standartda qatordan) o'tamiz
    scanner := bufio.NewScanner(os.Stdin)

    // Har bir qatorni o‘qib, katta harfga o‘tkazib chiqaramiz
    for scanner.Scan() {
        ucl := strings.ToUpper(scanner.Text())
        fmt.Println(ucl)
    }

    // Scan paytidagi xatolarni tekshirish (EOF xato emas)
    if err := scanner.Err(); err != nil {
        fmt.Fprintln(os.Stderr, "error:", err)
        os.Exit(1)
    }
}
```

Sinab ko‘rish:
```bash
$ echo 'hello'   > /tmp/lines
$ echo 'filter' >> /tmp/lines
$ cat /tmp/lines | go run line-filters.go
HELLO
FILTER
```
</div>
