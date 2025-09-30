---
title: Embedding (struct va interface)
summary: Go'da embedding — turlarni bevosita joylab kompozitsiyani ixcham ifodalash usuli.
date: 2025-09-30
---

## Embedding (struct va interface)

<div class="my-md-content">
Go struct va interfeyslarni bevosita joylash (embedding) orqali turlar kompozitsiyasini silliq ifodalashni qo'llab-quvvatlaydi. Bu 1.16+ dagi `//go:embed` (fayl/katloglarni binarga joylash) direktivasi bilan aralashtirilmasin.

```go
package main

import "fmt"

type base struct {
    num int
}

func (b base) describe() string {
    return fmt.Sprintf("base with num=%v", b.num)
}

// container ichiga base ni embed qilamiz. Embedding — nomsiz maydon ko'rinishida yoziladi
type container struct {
    base
    str string
}

func main() {
    // Literal bilan struct yaratishda embedded maydonni ham aniq ko'rsatib initsializatsiya qilamiz
    // embedded tur nomi maydon nomi vazifasini bajaradi
    co := container{
        base: base{
            num: 1,
        },
        str: "some name",
    }

    // embedded maydonlarning maydonlari to'g'ridan-to'g'ri mavjud
    fmt.Printf("co={num: %v, str: %v}\n", co.num, co.str)

    // Yoki to'liq yo'l bilan ham murojaat qilish mumkin
    fmt.Println("also num:", co.base.num)

    // base embed qilingani uchun, uning metodlari ham container metodlari sifatida chaqiriladi
    fmt.Println("describe:", co.describe())

    // Interface — metod imzolari to'plami
    type describer interface {
        describe() string
    }

    // Metodlari embedding orqali "meros" qilinishi natijasida container ham describer ni amalga oshiradi
    var d describer = co
    fmt.Println("describer:", d.describe())
}
```

Terminalda bajarish:
```bash
$ go run struct-embedding.go
co={num: 1, str: some name}
also num: 1
describe: base with num=1
describer: base with num=1
```
</div>
