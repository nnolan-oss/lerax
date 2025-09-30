---
title: Enumlar (iota bilan)
summary: Go'da alohida enum tipi yo'q, lekin iota va idiomlar bilan enumlar yaratish oson.
date: 2025-09-30
---

## Enumlar (iota bilan)

<div class="my-md-content">
Go'da enum — cheklangan qiymatlar to'plamiga ega tip tushunchasi — alohida til xususiyati sifatida yo'q. Biroq mavjud idiomalar, xususan `iota` yordamida enumlarni qulay yaratish mumkin.

```go
package main

import "fmt"

// Enum tipi ServerState, ostki turi int
type ServerState int

// Mavjud qiymatlar iota orqali ketma-ket generatsiya qilinadi (0, 1, 2, ...)
const (
    StateIdle ServerState = iota
    StateConnected
    StateError
    StateRetrying
)

// fmt.Stringer interfeysini amalga oshirish orqali qiymatlarni matnga oson aylantiramiz
var stateName = map[ServerState]string{
    StateIdle:      "idle",
    StateConnected: "connected",
    StateError:     "error",
    StateRetrying:  "retrying",
}

func (ss ServerState) String() string {
    return stateName[ss]
}

// Serverning holatini o'zgartirishni emulyatsiya qiladi
func transition(s ServerState) ServerState {
    switch s {
    case StateIdle:
        return StateConnected
    case StateConnected, StateRetrying:
        // Bu yerda keyingi holatni aniqlash uchun qo'shimcha shartlarni tekshirish mumkin
        return StateIdle
    case StateError:
        return StateError
    default:
        panic(fmt.Errorf("unknown state: %s", s))
    }
}

func main() {
    // int tipidagi qiymatni bevosita transition'ga uzata olmaysiz — tip mos kelmasligi kompilyatsiya paytida aniqlanadi
    ns := transition(StateIdle)
    fmt.Println(ns)

    ns2 := transition(ns)
    fmt.Println(ns2)
}
```

Terminalda bajarish:
```bash
$ go run enums.go
connected
idle
```

Ko'p qiymatli enumlar uchun `String()` yozish qo'l mehnati talab etishi mumkin. Bunday holatda `stringer` vositasidan `go:generate` bilan birga foydalanish mumkin.
</div>
