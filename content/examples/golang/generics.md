---
title: Generics (tip parametrlari)
summary: Go 1.18+ da generics qo'llab-quvvatlanadi — tip parametrlari bilan funksiyalar va turlar.
date: 2025-09-30
---

## Generics (tip parametrlari)

<div class="my-md-content">
Go 1.18 versiyasidan boshlab generics (tip parametrlari) qo'llab-quvvatlanadi.

```go
package main

import "fmt"

// Generik funksiya misoli: SlicesIndex — istalgan comparable turdagi slice va qiymatni oladi,
// va topilgan birinchi indeksni yoki yo'q bo'lsa -1 qaytaradi.
// "comparable" cheklovi bu turdagi qiymatlarni == va != bilan solishtirish mumkinligini bildiradi.
// Eslatma: standart kutubxonada xuddi shunday funksiya slices.Index sifatida mavjud.
func SlicesIndex[S ~[]E, E comparable](s S, v E) int {
    for i := range s {
        if v == s[i] {
            return i
        }
    }
    return -1
}

// Generik tur misoli: qiymatlari ixtiyoriy turdagi oddiy bog'langan ro'yxat
Type List[T any] struct {
    head, tail *element[T]
}

type element[T any] struct {
    next *element[T]
    val  T
}

// Generik tur uchun metodlar aniqlaganda tip parametrlari saqlanadi: List[T], List emas
func (lst *List[T]) Push(v T) {
    if lst.tail == nil {
        lst.head = &element[T]{val: v}
        lst.tail = lst.head
    } else {
        lst.tail.next = &element[T]{val: v}
        lst.tail = lst.tail.next
    }
}

// Barcha elementlarni slice ko'rinishida qaytarish
func (lst *List[T]) AllElements() []T {
    var elems []T
    for e := lst.head; e != nil; e = e.next {
        elems = append(elems, e.val)
    }
    return elems
}

func main() {
    var s = []string{"foo", "bar", "zoo"}

    // Generik funksiyalarni chaqirishda ko'pincha tiplarni chiqarib olish (inference) ishlaydi
    // Bu yerda S va E tiplarini ko'rsatmayapmiz — kompilyator o'zi aniqlaydi
    fmt.Println("index of zoo:", SlicesIndex(s, "zoo"))

    // Istasak, tip parametrlarini aniq ko'rsatishimiz ham mumkin
    _ = SlicesIndex[[]string, string](s, "zoo")

    lst := List[int]{}
    lst.Push(10)
    lst.Push(13)
    lst.Push(23)
    fmt.Println("list:", lst.AllElements())
}
```

Terminalda bajarish:
```bash
$ go run generics.go
index of zoo: 2
list: [10 13 23]
```
</div>
