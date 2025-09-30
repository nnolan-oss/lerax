---
title: JSON
summary: Go'da JSON kodlash/decoding — built-in va maxsus turlar bilan ishlash.
date: 2025-09-30
---

## JSON

<div class="my-md-content">
Go JSON'ni kodlash va dekodlashni built-in qo'llab-quvvatlaydi; bu ham built-in turlar, ham maxsus turlar uchun ishlaydi.

```go
package main

import (
    "encoding/json"
    "fmt"
    "os"
    "strings"
)

// Maxsus turlar bilan kodlash/dekodlashni ko'rsatish uchun struct'lar
// Faqat eksport qilingan maydonlar (katta harf bilan boshlangan) JSON'ga kiritiladi

type response1 struct {
    Page   int
    Fruits []string
}

// Taglar bilan JSON kalit nomlarini moslashtirish

type response2 struct {
    Page   int      `json:"page"`
    Fruits []string `json:"fruits"`
}

func main() {
    // Atomik turlarni JSON string'ga kodlash
    bolB, _ := json.Marshal(true)
    fmt.Println(string(bolB))

    intB, _ := json.Marshal(1)
    fmt.Println(string(intB))

    fltB, _ := json.Marshal(2.34)
    fmt.Println(string(fltB))

    strB, _ := json.Marshal("gopher")
    fmt.Println(string(strB))

    // Slice va map — kutilganidek array va object ko'rinishida
    slcD := []string{"apple", "peach", "pear"}
    slcB, _ := json.Marshal(slcD)
    fmt.Println(string(slcB))

    mapD := map[string]int{"apple": 5, "lettuce": 7}
    mapB, _ := json.Marshal(mapD)
    fmt.Println(string(mapB))

    // Maxsus turlarni kodlash — eksport qilingan maydonlar kalit sifatida ishlatiladi
    res1D := &response1{Page: 1, Fruits: []string{"apple", "peach", "pear"}}
    res1B, _ := json.Marshal(res1D)
    fmt.Println(string(res1B))

    // Taglar orqali JSON kalitlarini moslashtirish
    res2D := &response2{Page: 1, Fruits: []string{"apple", "peach", "pear"}}
    res2B, _ := json.Marshal(res2D)
    fmt.Println(string(res2B))

    // JSON'dan Go qiymatlariga dekodlash — umumiy (generic) tuzilma
    byt := []byte(`{"num":6.13,"strs":["a","b"]}`)

    // JSON paket dekodlangan ma'lumotni joylashtiradigan o'zgaruvchini beramiz
    var dat map[string]interface{}

    // Dekodlash va xatoni tekshirish
    if err := json.Unmarshal(byt, &dat); err != nil {
        panic(err)
    }
    fmt.Println(dat)

    // Qiymatlardan foydalanish uchun ular turiga mos o'tkaziladi
    num := dat["num"].(float64)
    fmt.Println(num)

    // Ichki ma'lumotlarga kirish — ketma-ket konversiyalar
    strs := dat["strs"].([]interface{})
    str1 := strs[0].(string)
    fmt.Println(str1)

    // Maxsus turlarga dekodlash — tip xavfsizligi oshadi, type assertion talab qilinmaydi
    str := `{"page": 1, "fruits": ["apple", "peach"]}`
    res := response2{}
    json.Unmarshal([]byte(str), &res)
    fmt.Println(res)
    fmt.Println(res.Fruits[0])

    // JSON'ni to'g'ridan-to'g'ri io.Writer'ga oqim tarzida yozish
    enc := json.NewEncoder(os.Stdout)
    d := map[string]int{"apple": 5, "lettuce": 7}
    enc.Encode(d)

    // oqimdan (io.Reader) o'qish — json.Decoder
    dec := json.NewDecoder(strings.NewReader(str))
    res1 := response2{}
    dec.Decode(&res1)
    fmt.Println(res1)
}
```

Terminalda bajarish:
```bash
$ go run json.go
true
1
2.34
"gopher"
["apple","peach","pear"]
{"apple":5,"lettuce":7}
{"Page":1,"Fruits":["apple","peach","pear"]}
{"page":1,"fruits":["apple","peach","pear"]}
map[num:6.13 strs:[a b]]
6.13
a
{1 [apple peach]}
apple
{"apple":5,"lettuce":7}
{1 [apple peach]}
```

Qo'shimcha o'qish uchun: "JSON and Go" blog posti va `encoding/json` paketi hujjatlari.
</div>
