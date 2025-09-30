---
title: Base64 kodlash
summary: encoding/base64 bilan standart va URL-ga mos base64 kodlash/dekodlash.
date: 2025-09-30
---

## Base64 kodlash

<div class="my-md-content">
Go `base64` kodlash/dekodlashni built-in qo'llab-quvvatlaydi.

```go
package main

// Paketni b64 alias bilan import qilamiz — kodda ixchamroq bo'ladi
import (
    b64 "encoding/base64"
    "fmt"
)

func main() {
    // Kodlaymiz/dekodlaymiz
    data := "abc123!?$*&()'-=@~"

    // Standart base64 kodlash (string -> []byte)
    sEnc := b64.StdEncoding.EncodeToString([]byte(data))
    fmt.Println(sEnc)

    // Dekodlash — xato qaytishi mumkin
    sDec, _ := b64.StdEncoding.DecodeString(sEnc)
    fmt.Println(string(sDec))
    fmt.Println()

    // URL-ga mos base64 ("+" o'rniga "-", "/" o'rniga "_")
    uEnc := b64.URLEncoding.EncodeToString([]byte(data))
    fmt.Println(uEnc)
    uDec, _ := b64.URLEncoding.DecodeString(uEnc)
    fmt.Println(string(uDec))
}
```

Standart va URL base64 kodlari biroz farq qiladi (oxirida `+` vs `-`), lekin ikkalasi ham asl matnga qayta dekodlanadi.

Terminalda bajarish:
```bash
$ go run base64-encoding.go
YWJjMTIzIT8kKiYoKSctPUB+
abc123!?$*&()'-=@~

YWJjMTIzIT8kKiYoKSctPUB-
abc123!?$*&()'-=@~
```
</div>
