---
title: Embed direktivasi (//go:embed)
summary: Build vaqtida fayl va kataloglarni binarga qo‘shish — embed paketi bilan.
date: 2025-09-30
---

## //go:embed

<div class="my-md-content">
`//go:embed` — kompilyator direktivasi bo‘lib, build vaqtida istalgan fayl va kataloglarni Go binariga qo‘shishga imkon beradi. Batafsil — rasmiy hujjatlarda.

```go
package main

// embed paketi import qilinadi; agar paketdan eksport qilingan identifikatorlar ishlatilmasa,
// bo‘sh importdan foydalanish mumkin: _ "embed"
import (
    "embed"
)

// Direktivalardagi yo‘llar — manba fayl joylashgan katalogga nisbiy
// Quyidagi direktiva fayl mazmunini darhol keyingi o‘zgaruvchiga (string) qo‘shadi
//go:embed folder/single_file.txt
var fileString string

// Xuddi shu faylni []byte sifatida qo‘shish ham mumkin
//go:embed folder/single_file.txt
var fileByte []byte

// Bir nechta fayl yoki butun katalogni ham wildcard bilan qo‘shish mumkin
// embed.FS — oddiy virtual fayl tizimi interfeysini taqdim etadi
//go:embed folder/single_file.txt
//go:embed folder/*.hash
var folder embed.FS

func main() {
    // single_file.txt mazmunini chop etish
    print(fileString)
    print(string(fileByte))

    // Qo‘shilgan katalogdan fayllarni o‘qish
    content1, _ := folder.ReadFile("folder/file1.hash")
    print(string(content1))

    content2, _ := folder.ReadFile("folder/file2.hash")
    print(string(content2))
}
```

Mahalliy mashinada ishga tushirish (Go Playground cheklovlari sababli bu misolni lokalda ishga tushiring):
```bash
$ mkdir -p folder
$ echo "hello go" > folder/single_file.txt
$ echo "123" > folder/file1.hash
$ echo "456" > folder/file2.hash

$ go run embed-directive.go
hello go
hello go
123
456
```
</div>
