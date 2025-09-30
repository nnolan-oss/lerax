---
title: Shablonlar (text/template)
summary: text/template bilan dinamik matn yaratish; if/else, range va maydonlarga murojaat qilish.
date: 2025-09-30
---

## Shablonlar (text/template)

<div class="my-md-content">
Go `text/template` paketi bilan dinamik kontent yaratishni qo'llab-quvvatlaydi. `html/template` ham shunga o'xshash API'ga ega, lekin HTML uchun qo'shimcha xavfsizlik bilan.

```go
package main

import (
    "os"
    "text/template"
)

func main() {
    // Yangi shablon yaratib, matnni string'dan parse qilamiz
    // Shablon — statik matn va {{...}} ichidagi "action" lar aralashmasi
    t1 := template.New("t1")
    t1, err := t1.Parse("Value is {{.}}\n")
    if err != nil {
        panic(err)
    }

    // Parse xato bersa, panic qilish uchun Must'dan foydalanish mumkin
    t1 = template.Must(t1.Parse("Value: {{.}}\n"))

    // Execute — action'lar uchun qiymat berib matn yaratish
    // {{.}} — Execute ga uzatilgan qiymat bilan almashtiriladi
    t1.Execute(os.Stdout, "some text")
    t1.Execute(os.Stdout, 5)
    t1.Execute(os.Stdout, []string{"Go", "Rust", "C++", "C#"})

    // Quyida qulay yordamchi
    Create := func(name, t string) *template.Template {
        return template.Must(template.New(name).Parse(t))
    }

    // Struct maydonlari: {{.FieldName}}
    // Eslatma: maydonlar eksport qilingan (katta harf) bo'lishi kerak
    t2 := Create("t2", "Name: {{.Name}}\n")
    t2.Execute(os.Stdout, struct{ Name string }{"Jane Doe"})

    // Map bilan: kalit registriga cheklov yo'q
    t2.Execute(os.Stdout, map[string]string{"Name": "Mickey Mouse"})

    // if/else: bo'sh qiymatlar false hisoblanadi (0, "", nil, ...)
    // Actionlarda "-" bilan ortiqcha bo'sh joylarni kesish mumkin
    t3 := Create("t3", "{{if . -}} yes {{else -}} no {{end}}\n")
    t3.Execute(os.Stdout, "not empty")
    t3.Execute(os.Stdout, "")

    // range: slice/array/map/channel ustida aylanish
    t4 := Create("t4", "Range: {{range .}}{{.}} {{end}}\n")
    t4.Execute(os.Stdout, []string{"Go", "Rust", "C++", "C#"})
}
```

Terminalda bajarish:
```bash
$ go run templates.go 
Value: some text
Value: 5
Value: [Go Rust C++ C#]
Name: Jane Doe
Name: Mickey Mouse
yes 
no 
Range: Go Rust C++ C# 
```
</div>
