---
title: Interfeyslar
summary: Go'da interface — metod imzolari to'plami; turli turlar uchun umumiy xulq.
date: 2025-09-30
---

## Interfeyslar

<div class="my-md-content">
`interface` — nomlangan metod imzolari to'plami. Interfeyslar turli turlarga umumiy xulq-atvorni (behavior) belgilash imkonini beradi.

```go
package main

import (
    "fmt"
    "math"
)

// Geometrik shakllar uchun oddiy interfeys
type geometry interface {
    area() float64
    perim() float64
}

// Misolda interfeysni rect va circle turlarida amalga oshiramiz
type rect struct {
    width, height float64
}

type circle struct {
    radius float64
}

// rect uchun geometry metodlari
func (r rect) area() float64 {
    return r.width * r.height
}
func (r rect) perim() float64 {
    return 2*r.width + 2*r.height
}

// circle uchun geometry metodlari
func (c circle) area() float64 {
    return math.Pi * c.radius * c.radius
}
func (c circle) perim() float64 {
    return 2 * math.Pi * c.radius
}

// Interfeys tipidagi o'zgaruvchida shu interfeysdagi metodlarni chaqirish mumkin
// Quyidagi measure funksiyasi har qanday geometry bilan ishlaydi
func measure(g geometry) {
    fmt.Println(g)
    fmt.Println(g.area())
    fmt.Println(g.perim())
}

// Ba'zan interfeys qiymatining run-time turini bilish kerak bo'ladi
// Bitta usul — type assertion; yana biri — type switch
func detectCircle(g geometry) {
    if c, ok := g.(circle); ok {
        fmt.Println("circle with radius", c.radius)
    }
}

func main() {
    r := rect{width: 3, height: 4}
    c := circle{radius: 5}

    // rect va circle ikkalasi ham geometry ni amalga oshirgani uchun measure ularni qabul qiladi
    measure(r)
    measure(c)

    detectCircle(r)
    detectCircle(c)
}
```

Terminalda bajarish:
```bash
$ go run interfaces.go
{3 4}
12
14
{5}
78.53981633974483
31.41592653589793
circle with radius 5
```

Interfeyslarning ichki ishlash mexanizmlari haqida ko'proq o'qish uchun Go blogidagi maqolani ko'ring.
</div>
