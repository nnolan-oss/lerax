---
title: Tasodifiy sonlar (math/rand/v2)
summary: math/rand/v2 bilan psevdotasodifiy sonlar — int, float va urug'lash (seed).
date: 2025-09-30
---

## Tasodifiy sonlar (math/rand/v2)

<div class="my-md-content">
Go ning `math/rand/v2` paketi psevdotasodifiy sonlar generatorini taqdim etadi.

```go
package main

import (
    "fmt"
    "math/rand/v2"
)

func main() {
    // IntN: 0 <= n < 100 diapazonda tasodifiy butun son
    fmt.Print(rand.IntN(100), ",")
    fmt.Print(rand.IntN(100))
    fmt.Println()

    // Float64: 0.0 <= f < 1.0
    fmt.Println(rand.Float64())

    // Diapazoni o'zgartirish: masalan, 5.0 <= f' < 10.0
    fmt.Print((rand.Float64()*5)+5, ",")
    fmt.Print((rand.Float64()*5)+5)
    fmt.Println()

    // Ma'lum urug' (seed) bilan deterministik generator
    // NewPCG — ikki ta uint64 urug' talab qiladi
    s2 := rand.NewPCG(42, 1024)
    r2 := rand.New(s2)
    fmt.Print(r2.IntN(100), ",")
    fmt.Print(r2.IntN(100))
    fmt.Println()

    // Xuddi shu urug' bilan yana bir generator — bir xil natijalar
    s3 := rand.NewPCG(42, 1024)
    r3 := rand.New(s3)
    fmt.Print(r3.IntN(100), ",")
    fmt.Print(r3.IntN(100))
    fmt.Println()
}
```

Eslatma: Ba'zi natijalar har ishga tushirishda farq qilishi mumkin.

Terminalda bajarish:
```bash
$ go run random-numbers.go
68,56
0.8090228139659177
5.840125017402497,6.937056298890035
94,49
94,49
```

Qo'shimcha ma'lumot uchun `math/rand/v2` hujjatlarini ko‘ring.
</div>
