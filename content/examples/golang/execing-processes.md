---
title: Jarayonni exec bilan almashtirish
summary: syscall.Exec bilan joriy Go jarayonini boshqa binar bilan to‘liq almashtirish.
date: 2025-09-30
---

## Jarayonni exec bilan almashtirish

<div class="my-md-content">
Oldingi misolda tashqi jarayonlarni ishga tushirishni ko‘rdik. Ba'zan joriy Go jarayonini butunlay boshqa (hatto Go bo‘lmagan) jarayon bilan almashtirish kerak bo‘ladi. Buning uchun klassik `exec` funksiyasining Go'dagi implementatsiyasidan foydalanamiz.

```go
package main

import (
    "os"
    "os/exec"
    "syscall"
)

func main() {
    // Misol sifatida ls ni exec qilamiz. Go binar yo‘lini absolyut ko‘rsatishni talab qiladi
    // exec.LookPath orqali topamiz (odatda /bin/ls)
    binary, lookErr := exec.LookPath("ls")
    if lookErr != nil {
        panic(lookErr)
    }

    // exec argumentlarni slice ko‘rinishida oladi; birinchi argument — dastur nomi
    args := []string{"ls", "-a", "-l", "-h"}

    // Atrof-muhit o‘zgaruvchilari to‘plami — joriy muhit
    env := os.Environ()

    // syscall.Exec chaqiruvi. Muvaffaqiyatli bo‘lsa, joriy jarayon shu yerda tugaydi
    // va /bin/ls -a -l -h bilan almashtiriladi. Xato bo‘lsa, qaytish qiymati bo‘ladi
    execErr := syscall.Exec(binary, args, env)
    if execErr != nil {
        panic(execErr)
    }
}
```

Ishga tushirish:
```bash
$ go run execing-processes.go
total 16
drwxr-xr-x  4 mark 136B Oct 3 16:29 .
drwxr-xr-x 91 mark 3.0K Oct 3 12:50 ..
-rw-r--r--  1 mark 1.3K Oct 3 16:28 execing-processes.go
```

Diqqat: Go klassik Unix `fork` funksiyasini taklif etmaydi. Ko‘pincha bu muammo emas — goroutina ishga tushirish, jarayonlar spawn qilish va exec aksariyat holatlarni qoplaydi.
</div>
