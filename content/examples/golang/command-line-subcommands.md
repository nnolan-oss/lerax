---
title: Command-line subcommandlar
summary: flag.NewFlagSet bilan subcommandlar va ularning o‘z flaglarini parse qilish.
date: 2025-09-30
---

## Command-line subcommandlar

<div class="my-md-content">
Ba'zi CLI vositalar (masalan, `go` yoki `git`) bir nechta subcommandlarga ega bo‘ladi, har biri o‘z flaglariga ega (`go build`, `go get`, va h.k.). `flag` paketi oddiy subcommandlarni oson aniqlashga yordam beradi.

```go
package main

import (
    "flag"
    "fmt"
    "os"
)

func main() {
    // Subcommand e'lon qilish: NewFlagSet va o‘sha subcommandga xos flaglar
    fooCmd := flag.NewFlagSet("foo", flag.ExitOnError)
    fooEnable := fooCmd.Bool("enable", false, "enable")
    fooName := fooCmd.String("name", "", "name")

    // Boshqa subcommand uchun boshqa flaglar
    barCmd := flag.NewFlagSet("bar", flag.ExitOnError)
    barLevel := barCmd.Int("level", 0, "level")

    // Dasturga birinchi argument sifatida subcommand kutiladi
    if len(os.Args) < 2 {
        fmt.Println("expected 'foo' or 'bar' subcommands")
        os.Exit(1)
    }

    // Qaysi subcommand chaqirilganini tekshiramiz
    switch os.Args[1] {
    case "foo":
        // Har bir subcommand o‘z flaglarini parse qiladi; qolganlari positional
        fooCmd.Parse(os.Args[2:])
        fmt.Println("subcommand 'foo'")
        fmt.Println("  enable:", *fooEnable)
        fmt.Println("  name:", *fooName)
        fmt.Println("  tail:", fooCmd.Args())
    case "bar":
        barCmd.Parse(os.Args[2:])
        fmt.Println("subcommand 'bar'")
        fmt.Println("  level:", *barLevel)
        fmt.Println("  tail:", barCmd.Args())
    default:
        fmt.Println("expected 'foo' or 'bar' subcommands")
        os.Exit(1)
    }
}
```

Build va ishga tushirish:
```bash
$ go build command-line-subcommands.go 

# Avval foo subcommand:
$ ./command-line-subcommands foo -enable -name=joe a1 a2
subcommand 'foo'
  enable: true
  name: joe
  tail: [a1 a2]

# Endi bar:
$ ./command-line-subcommands bar -level 8 a1
subcommand 'bar'
  level: 8
  tail: [a1]

# bar — foo ning flaglarini qabul qilmaydi
$ ./command-line-subcommands bar -enable a1
flag provided but not defined: -enable
Usage of bar:
  -level int
        level
```

Keyingi bo‘limda dasturlarni parametrizatsiya qilishning yana bir usuli — environment o‘zgaruvchilarini ko‘ramiz.
</div>

