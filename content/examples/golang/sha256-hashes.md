---
title: SHA256 xeshlar
summary: crypto/sha256 bilan matn yoki baytlar uchun SHA256 xeshini hisoblash.
date: 2025-09-30
---

## SHA256 xeshlar

<div class="my-md-content">
SHA256 ko‘pincha binar yoki matn bo‘laklari uchun qisqa identifikator (xesh) hisoblashda ishlatiladi. Masalan, TLS/SSL sertifikatlarida imzo hisoblash uchun SHA256 qo‘llaniladi. Go'da SHA256 xeshini quyidagicha hisoblaymiz.

```go
package main

// Go bir nechta xesh funksiyalarini turli crypto/* paketlarda taqdim etadi
import (
    "crypto/sha256"
    "fmt"
)

func main() {
    s := "sha256 this string"

    // Yangi xesh holatini yaratamiz
    h := sha256.New()

    // Write baytlarni kutadi; string'ni []byte(s) bilan baytlarga o‘tkazamiz
    h.Write([]byte(s))

    // Sum — yakuniy xesh natijasini bayt slice sifatida qaytaradi
    // Argument mavjud slice'ga qo‘shish uchun ishlatilishi mumkin; ko‘pincha nil yetarli
    bs := h.Sum(nil)

    fmt.Println(s)
    // Inson o‘qiy oladigan hex ko‘rinishda chop etish
    fmt.Printf("%x\n", bs)
}
```

Terminalda bajarish:
```bash
$ go run sha256-hashes.go
sha256 this string
1af1dfa857bf1d8814fe1af8983c18080019922e557f15a8a...
```

Boshqa xeshlar ham o‘xshash uslubda hisoblanadi. Masalan, SHA512 uchun `crypto/sha512` paketini import qilib, `sha512.New()` dan foydalaning.

Diqqat: kriptografik xavfsiz xesh talab etilganda, algoritm kuchi va mosligini ehtiyotkorlik bilan o‘rganing.
</div>
