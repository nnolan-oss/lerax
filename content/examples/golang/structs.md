---
title: Structlar
summary: Go'da struct — maydonlardan iborat tiplangan to'plam; yozuv (record) yaratish uchun qulay.
date: 2025-09-30
---

## Structlar

<div class="my-md-content">
Go'da `struct` — maydonlardan (fields) iborat tiplangan kolleksiya. Ma'lumotlarni birlashtirib, yozuv (record) yaratish uchun ishlatiladi.

```go
package main

import "fmt"

// person struct turi name va age maydonlariga ega
type person struct {
    name string
    age  int
}

// newPerson berilgan nom bilan yangi person yaratadi
func newPerson(name string) *person {
    // Go — garbage collected til; lokal o'zgaruvchiga ko'rsatkichni qaytarish xavfsiz
    // Unga faol murojaatlar tugaganidagina GC uni tozalaydi
    p := person{name: name}
    p.age = 42
    return &p
}

func main() {

    // Yangi struct yaratish sintaksisi
    fmt.Println(person{"Bob", 20})

    // Structni maydon nomlari bilan initsializatsiya qilish
    fmt.Println(person{name: "Alice", age: 30})

    // Ko'rsatilmagan maydonlar zero-value bo'ladi
    fmt.Println(person{name: "Fred"})

    // & prefiksi struct'ga ko'rsatkich qaytaradi
    fmt.Println(&person{name: "Ann", age: 40})

    // Yangi struct yaratishni konstruktor funksiyaga kapsulalash — idiomatik yondashuv
    fmt.Println(newPerson("Jon"))

    // Maydonlarga nuqta orqali murojaat qilish
    s := person{name: "Sean", age: 50}
    fmt.Println(s.name)

    // Struct ko'rsatkichlari bilan ham nuqta ishlatiladi — avtomatik dereferens bo'ladi
    sp := &s
    fmt.Println(sp.age)

    // Structlar o'zgaruvchan (mutable)
    sp.age = 51
    fmt.Println(sp.age)

    // Faqat bitta qiymat uchun ishlatilsa, nom bermasdan anonim struct yozish mumkin
    // Bu usul ko'pincha jadvalga asoslangan testlarda qo'llanadi
    dog := struct {
        name   string
        isGood bool
    }{
        "Rex",
        true,
    }
    fmt.Println(dog)
}
```

Terminalda bajarish:
```bash
$ go run structs.go
{Bob 20}
{Alice 30}
{Fred 0}
&{Ann 40}
&{Jon 42}
Sean
50
51
{Rex true}
```
</div>
