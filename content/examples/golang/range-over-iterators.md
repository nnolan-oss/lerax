---
title: Range over Iterators (Go 1.23+)
summary: Go 1.23+ iteratorlari bilan istalgan oqim ustida range qilish.
date: 2025-09-30
---

## Range over Iterators

<div class="my-md-content">
Go 1.23 versiyasidan boshlab iteratorlar qo'llab-quvvatlanadi. Bu yordamida deyarli har qanday oqim ustida `range` qilish mumkin.

```go
package main

import (
    "fmt"
    "iter"
    "slices"
)

// Avvalgi misoldagi List turini yana ko'ramiz.
// Oldin AllElements metodida barcha elementlarni slice sifatida qaytargan edik.
// Endi esa iteratordan foydalanamiz.
type List[T any] struct {
    head, tail *element[T]
}

type element[T any] struct {
    next *element[T]
    val  T
}

func (lst *List[T]) Push(v T) {
    if lst.tail == nil {
        lst.head = &element[T]{val: v}
        lst.tail = lst.head
    } else {
        lst.tail.next = &element[T]{val: v}
        lst.tail = lst.tail.next
    }
}

// All — iteratordan iborat funktsiyani qaytaradi
func (lst *List[T]) All() iter.Seq[T] {
    return func(yield func(T) bool) {
        // Iterator funksiyasi parametr sifatida yield qabul qiladi
        // Har bir element uchun yield'ni chaqiramiz; false qaytsa, erta to'xtaymiz
        for e := lst.head; e != nil; e = e.next {
            if !yield(e.val) {
                return
            }
        }
    }
}

// Iteratsiya ostida ma'lumot tuzilmasi bo'lishi shart emas, hatto cheksiz ham bo'lishi mumkin
// Quyida Fibonachchi sonlari bo'yicha iterator
func genFib() iter.Seq[int] {
    return func(yield func(int) bool) {
        a, b := 1, 1
        for {
            if !yield(a) {
                return
            }
            a, b = b, a+b
        }
    }
}

func main() {
    lst := List[int]{}
    lst.Push(10)
    lst.Push(13)
    lst.Push(23)

    // List.All iterator qaytargani uchun, odatiy range bilan ishlatishimiz mumkin
    for e := range lst.All() {
        fmt.Println(e)
    }

    // slices kabi paketlar iteratorlar bilan ishlash uchun qulay funksiyalar beradi
    // Masalan, Collect — istalgan iteratordan barcha qiymatlarni slice ga yig'adi
    all := slices.Collect(lst.All())
    fmt.Println("all:", all)

    for n := range genFib() {
        // break yoki erta return bo'lganda iteratorga uzatilgan yield false qaytaradi
        if n >= 10 {
            break
        }
        fmt.Println(n)
    }
}
```

Terminalda bajarish:
```bash
$ go run range-over-iterators.go
10
13
23
all: [10 13 23]
1
1
2
3
5
8
```
</div>
