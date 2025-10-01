---
title: Tashqi jarayonlarni ishga tushirish
summary: os/exec bilan buyruqlarni ishga tushirish, chiqishlarni o‘qish, kodlarni tekshirish va pipe.
date: 2025-09-30
---

## Tashqi jarayonlarni ishga tushirish

<div class="my-md-content">
Ba'zan Go dasturlarimiz boshqa jarayonlarni ishga tushirishi kerak bo‘ladi.

```go
package main

import (
    "errors"
    "fmt"
    "io"
    "os/exec"
)

func main() {
    // Argument va kirishsiz, stdout ga chiqaradigan buyruq
    dateCmd := exec.Command("date")

    // Output — buyruqni ishga tushirib, tugashini kutadi va stdout ni qaytaradi
    dateOut, err := dateCmd.Output()
    if err != nil {
        panic(err)
    }
    fmt.Println("> date")
    fmt.Println(string(dateOut))

    // Noto‘g‘ri argument bilan ishga tushirish
    // Output va boshqa metodlar:
    //  - *exec.Error — bajarishda muammo (noto‘g‘ri yo‘l va h.k.)
    //  - *exec.ExitError — buyruq ishga tushdi, ammo 0 dan farqli kod bilan chiqdi
    _, err = exec.Command("date", "-x").Output()
    if err != nil {
        var execErr *exec.Error
        var exitErr *exec.ExitError
        switch {
        case errors.As(err, &execErr):
            fmt.Println("failed executing:", err)
        case errors.As(err, &exitErr):
            exitCode := exitErr.ExitCode()
            fmt.Println("command exit rc =", exitCode)
        default:
            panic(err)
        }
    }

    // stdin orqali ma'lumot uzatib, stdout dan natijani olish
    grepCmd := exec.Command("grep", "hello")

    // Kiritish/chiqarish pipe'lari
    grepIn, _ := grepCmd.StdinPipe()
    grepOut, _ := grepCmd.StdoutPipe()
    grepCmd.Start()
    grepIn.Write([]byte("hello grep\ngoodbye grep"))
    grepIn.Close()
    grepBytes, _ := io.ReadAll(grepOut)
    grepCmd.Wait()

    fmt.Println("> grep hello")
    fmt.Println(string(grepBytes))

    // To‘liq buyruqni bitta string sifatida bajarish — shell orqali
    lsCmd := exec.Command("bash", "-c", "ls -a -l -h")
    lsOut, err := lsCmd.Output()
    if err != nil {
        panic(err)
    }
    fmt.Println("> ls -a -l -h")
    fmt.Println(string(lsOut))
}
```

Terminalda bajarish:
```bash
$ go run spawning-processes.go 
> date
Thu 05 May 2022 10:10:12 PM PDT

# date da -x flag yo‘q, shuning uchun xato xabar va nol bo‘lmagan kod bilan tugaydi
command exited with rc = 1
> grep hello
hello grep

> ls -a -l -h
drwxr-xr-x  4 mark 136B Oct 3 16:29 .
drwxr-xr-x 91 mark 3.0K Oct 3 12:50 ..
-rw-r--r--  1 mark 1.3K Oct 3 16:28 spawning-processes.go
```
</div>
