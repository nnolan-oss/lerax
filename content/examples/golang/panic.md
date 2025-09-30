---
title: Panic
summary: Kutilmagan xatolarda tezda to'xtash uchun panic — odatda noodatiy holatlar uchun.
date: 2025-09-30
---

## Panic

<div class="my-md-content">
`panic` odatda biror narsa kutilmaganda noto'g'ri ketganini bildiradi. Uni ko'pincha normal ish jarayonida yuz bermasligi kerak bo'lgan, chiroyli boshqarishga tayyor bo'lmagan xatolarda tezda to'xtash uchun ishlatamiz.

```go
package main

import "os"

func main() {
    // Bu saytda noodatiy xatolarni ko'rsatish uchun ba'zan panic ishlatamiz
    // (Bu yerda ataylab panic chaqirilyapti)
    panic("a problem")

    // Ko'p uchraydigan holat: funksiya xato qaytarsa va uni boshqarishni istamasak — darhol to'xtash
    // Quyida yangi fayl yaratishda kutilmagan xato bo'lsa, panic qilamiz
    _, err := os.Create("/tmp/file")
    if err != nil {
        panic(err)
    }
}
```

Dastur ishga tushirilganda panic yuz beradi, xabar va goroutina izlari (stack trace) chiqariladi, hamda nol bo'lmagan status bilan tugaydi.

Eslatma: `main` ichidagi birinchi `panic` ishga tushgach, keyingi kodga yetib bormaydi. Agar vaqtinchalik fayl yaratish qismiga ham qaramoqchi bo'lsangiz, birinchi `panic` ni izohga oling.

Terminalda bajarish (namuna):
```bash
$ go run panic.go
panic: a problem


goroutine 1 [running]:
main.main()
    /.../panic.go:12 +0x47
...
exit status 2
```

Diqqat: Ba'zi tillarda ko'plab xatolarni istisnolar (exceptions) bilan boshqarish odatiy bo'lsa, Go'da imkon qadar xatolarni qaytish qiymati orqali boshqarish **idiomatik** hisoblanadi.
</div>
