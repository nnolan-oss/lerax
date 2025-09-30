---
title: Holatni goroutina bilan boshqarish
summary: Yozish/oqish so'rovlarini kanal orqali yuborib, bitta goroutina egasiga holatni topshirish.
date: 2025-09-30
---

## Holatni goroutina bilan boshqarish

<div class="my-md-content">
Mutexlar bilan aniq bloklash o'rniga, holatni bitta goroutinaga "egalik" qildirib, barcha o'qish/yozishlarni kanallar orqali bajarish mumkin. Bu yondashuv Go falsafasiga mos: xotirani bo'lishish o'rniga aloqa orqali bo'lishish.

```go
package main

import (
    "fmt"
    "math/rand"
    "sync/atomic"
    "time"
)

type readOp struct {
    key  int
    resp chan int
}

type writeOp struct {
    key  int
    val  int
    resp chan bool
}

func main() {
    // Amal sonlarini sanash
    var readOps uint64
    var writeOps uint64

    // O'qish/yozish so'rovlari uchun kanallar
    reads := make(chan readOp)
    writes := make(chan writeOp)

    // Holatga ega bo'lgan goroutina — xarita faqat shu yerda mavjud va boshqariladi
    go func() {
        var state = make(map[int]int)
        for {
            select {
            case read := <-reads:
                read.resp <- state[read.key]
            case write := <-writes:
                state[write.key] = write.val
                write.resp <- true
            }
        }
    }()

    // 100 ta o'qish goroutinasi
    for range 100 {
        go func() {
            for {
                read := readOp{key: rand.Intn(5), resp: make(chan int)}
                reads <- read
                <-read.resp
                atomic.AddUint64(&readOps, 1)
                time.Sleep(time.Millisecond)
            }
        }()
    }

    // 10 ta yozish goroutinasi
    for range 10 {
        go func() {
            for {
                write := writeOp{key: rand.Intn(5), val: rand.Intn(100), resp: make(chan bool)}
                writes <- write
                <-write.resp
                atomic.AddUint64(&writeOps, 1)
                time.Sleep(time.Millisecond)
            }
        }()
    }

    // Bir soniya ishlatamiz
    time.Sleep(time.Second)

    // Natijalarni chiqaramiz
    readOpsFinal := atomic.LoadUint64(&readOps)
    fmt.Println("readOps:", readOpsFinal)
    writeOpsFinal := atomic.LoadUint64(&writeOps)
    fmt.Println("writeOps:", writeOpsFinal)
}
```

Dastur odatda ~80,000 ta umumiy amal bajaradi. Bu yondashuv mutexga nisbatan biroz murakkabroq ko'rinishi mumkin, lekin boshqa kanallar ishtirok etganda yoki ko'p mutexlarni boshqarish xatolarga olib kelishi ehtimolida foydali bo'ladi.

Terminalda bajarish:
```bash
$ go run stateful-goroutines.go
readOps: 71708
writeOps: 7177
```
</div>
