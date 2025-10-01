---
title: Testlar va benchmarklar
summary: testing paketi bilan unit-testlar, subtestlar (table-driven), va benchmarklar.
date: 2025-09-30
---

## Testlar va benchmarklar

<div class="my-md-content">
`testing` paketi unit-testlar yozish uchun vositalarni beradi, `go test` esa ularni ishga tushiradi. Odatiy holatda test kodi test qilinayotgan kod bilan bir paketda joylashadi.

```go
package main

import (
    "fmt"
    "testing"
)

// Oddiy int minimum funksiyasi (odatda bu intutils.go singari faylda bo'ladi)
func IntMin(a, b int) int {
    if a < b {
        return a
    }
    return b
}

// Test funksiyasi nomi Test bilan boshlanadi
func TestIntMinBasic(t *testing.T) {
    ans := IntMin(2, -2)
    if ans != -2 {
        // t.Error* xatoni xabar qiladi va testni davom ettiradi;
        // t.Fatal* esa xatoni xabar qilib, darhol to'xtatadi
        t.Errorf("IntMin(2, -2) = %d; want -2", ans)
    }
}

// Table-driven testlar — kirish/chiqishni jadvalda berib, bitta sikl bilan yurish
func TestIntMinTableDriven(t *testing.T) {
    var tests = []struct {
        a, b int
        want int
    }{
        {0, 1, 0},
        {1, 0, 0},
        {2, -2, -2},
        {0, -1, -1},
        {-1, 0, -1},
    }

    // t.Run — har bir qatordan subtest yaratish (go test -v da alohida ko'rinadi)
    for _, tt := range tests {
        testname := fmt.Sprintf("%d,%d", tt.a, tt.b)
        t.Run(testname, func(t *testing.T) {
            ans := IntMin(tt.a, tt.b)
            if ans != tt.want {
                t.Errorf("got %d, want %d", ans, tt.want)
            }
        })
    }
}

// Benchmark funksiyalari _test.go fayllarida bo'ladi va Benchmark bilan boshlanadi
// O'lchash kerak bo'lmagan kod sikl boshlanishidan oldin joylashtiriladi
func BenchmarkIntMin(b *testing.B) {
    for b.Loop() {
        // Benchmarker buni ko'p marta bajarib, bitta iteratsiya vaqtini baholaydi
        IntMin(1, 2)
    }
}
```

Terminalda testlarni verbose rejimda ishga tushirish:
```bash
$ go test -v
== RUN   TestIntMinBasic
--- PASS: TestIntMinBasic (0.00s)
=== RUN   TestIntMinTableDriven
=== RUN   TestIntMinTableDriven/0,1
=== RUN   TestIntMinTableDriven/1,0
=== RUN   TestIntMinTableDriven/2,-2
=== RUN   TestIntMinTableDriven/0,-1
=== RUN   TestIntMinTableDriven/-1,0
--- PASS: TestIntMinTableDriven (0.00s)
    --- PASS: TestIntMinTableDriven/0,1 (0.00s)
    --- PASS: TestIntMinTableDriven/1,0 (0.00s)
    --- PASS: TestIntMinTableDriven/2,-2 (0.00s)
    --- PASS: TestIntMinTableDriven/0,-1 (0.00s)
    --- PASS: TestIntMinTableDriven/-1,0 (0.00s)
PASS
ok      examples/testing-and-benchmarking    0.023s
```

Barcha benchmarklarni ishga tushirish (testlar ham benchmarklardan oldin ishlaydi). `-bench` flagi nomlarni regex bilan filtrlash uchun:
```bash
$ go test -bench=.
goos: darwin
goarch: arm64
pkg: examples/testing
BenchmarkIntMin-8 1000000000 0.3136 ns/op
PASS
ok      examples/testing-and-benchmarking    0.351s
```
</div>
