---
title: XML
summary: encoding/xml bilan XML va XML-ga o‘xshash formatlarni kodlash/dekodlash.
date: 2025-09-30
---

## XML

<div class="my-md-content">
Go `encoding/xml` paketi bilan XML va XML-ga o‘xshash formatlarni qo‘llab-quvvatlaydi.

```go
package main

import (
    "encoding/xml"
    "fmt"
)

// Plant XML ga moslanadi. JSON dagi kabi, taglar encoder/decoder uchun ko‘rsatmalar beradi.
// Maxsus xususiyatlar: XMLName — struct'ni ifodalovchi XML element nomi;
// id,attr — Id maydoni nested element emas, atribut bo‘lishini bildiradi.
type Plant struct {
    XMLName xml.Name `xml:"plant"`
    Id      int      `xml:"id,attr"`
    Name    string   `xml:"name"`
    Origin  []string `xml:"origin"`
}

func (p Plant) String() string {
    return fmt.Sprintf("Plant id=%v, name=%v, origin=%v", p.Id, p.Name, p.Origin)
}

func main() {
    coffee := &Plant{Id: 27, Name: "Coffee"}
    coffee.Origin = []string{"Ethiopia", "Brazil"}

    // MarshalIndent — odam o‘qishi uchun qulay (indented) XML chiqarish
    out, _ := xml.MarshalIndent(coffee, " ", "  ")
    fmt.Println(string(out))

    // XML sarlavhasini qo‘shish — qo‘shimcha ravishda oldiga yozamiz
    fmt.Println(xml.Header + string(out))

    // Unmarshal — bayt oqimidan XML ni tuzilma (struct) ga parse qilish
    var p Plant
    if err := xml.Unmarshal(out, &p); err != nil {
        panic(err)
    }
    fmt.Println(p)

    tomato := &Plant{Id: 81, Name: "Tomato"}
    tomato.Origin = []string{"Mexico", "California"}

    // parent>child>plant — barcha plant elementlarini <parent><child>... ichida joylashtirish
    type Nesting struct {
        XMLName xml.Name `xml:"nesting"`
        Plants  []*Plant `xml:"parent>child>plant"`
    }

    nesting := &Nesting{}
    nesting.Plants = []*Plant{coffee, tomato}

    out, _ = xml.MarshalIndent(nesting, " ", "  ")
    fmt.Println(string(out))
}
```

Terminalda bajarish:
```bash
$ go run xml.go
 <plant id="27">
   <name>Coffee</name>
   <origin>Ethiopia</origin>
   <origin>Brazil</origin>
 </plant>
<?xml version="1.0" encoding="UTF-8"?>
 <plant id="27">
   <name>Coffee</name>
   <origin>Ethiopia</origin>
   <origin>Brazil</origin>
 </plant>
Plant id=27, name=Coffee, origin=[Ethiopia Brazil]
 <nesting>
   <parent>
     <child>
       <plant id="27">
         <name>Coffee</name>
         <origin>Ethiopia</origin>
         <origin>Brazil</origin>
       </plant>
       <plant id="81">
         <name>Tomato</name>
         <origin>Mexico</origin>
         <origin>California</origin>
       </plant>
     </child>
   </parent>
 </nesting>
```
</div>
