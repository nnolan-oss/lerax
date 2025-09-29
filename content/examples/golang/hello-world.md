---
title: Hello World
summary: Dasturlash tilini o'zbek tilida namunalar bilan o'rganish
date: 2025-09-29
---

## Hello World

<div class="my-md-content">
Keling an'anamizda sodiq qolib, "hello world" dasturini yozib ko'ramiz. <br/>
*Kodni ishlatishdan oldin Go'ni o'rnating <a href="https://go.dev/doc/install" class="link">Yuklab olish</a>

```go
package main

import "fmt" // formatter packageni import qilish

func main() { // compile dasturlash tillarida kiruvchi yagona function bo'lishi kerak
    fmt.Println("hello world") 
    // JSdagi console.log() kabi
}
```

Yozilgan kodni yurgizish. Kodni hello-world.go formattida saqlaymiz.
Go compile dasturlash tili bo'lganligi uchun uni avval build qilib olishimiz kerak. 
Terminalda:

```bash
$ go run hello-world.go
hello world

# build qilish
$ go build hello-world.go 

# build qilinganni tekshirish (o'tkazib yuborish mumkin)
$ ls
hello-world    hello-world.go

# build qilinganini run qilish (build qilingan fayl, sizdagi operation sistemaga qarab o'zgaradi, hello-world.exe bo'lishi mumkin Windowsda)
$ ./hello-world
hello world
```

</div>
