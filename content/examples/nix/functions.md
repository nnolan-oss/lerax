---
title: Funksiyalar
description: Nix funksiyalari va argumentlarni uzatish
date: 2025-10-01
---

## Funksiyalar

<div class="my-md-content">

nix'da return degan tushuncha yo'q, u oxirgi statementni return qivoradi

```nix
# oddiy funksiya kirgan qiymatga +1 qilib return qivoradi,
arg: arg + 1

# add1 funksiyasi x argument olib unga  +1 qo'shadi
let
  add1 = x: x + 1;
in
# funksiyani chaqirish, 5 bu funksiyaga kiruvchi parametr
  add1 5


# bir nechta argumentlar bilan
add = a: b: a + b;

# bu aslida
add = a: (b: a + b);

# ishlatish
(add 3) 4


# yoki qisqacha
let add = a: b: a + b;
in add 3 4


```

<h3 class="my-section-tag">Attrs funksiya</h3>

```nix
let
  greet = { name, age }: "Salom ${name}, yosh ${toString age}";
in
  greet { name = "Neo"; age = 24; }
```

`toString` bu `age` ni stringga o'tkazish, uchun, bu yerda object funksiyaga parametr bo'lib kiryapti, uni argument qilib olgan funksiya uni qayta ishlab qaytaryapti

<h3 class="my-section-tag">default qiymatlar bilan</h3>

```nix
greet = {name ? "Neo"}: "Salom ${name}";

# qiymatsiz chaqirishimiz mumkin
greet {} # -> Salom Neo

greet {name = "Odam";}; # -> Salom Odam

```

<h3 class="my-section-tag">funksiya qaytaruvchi funksiya</h3>

```nix
let
    makeAdder = a: (b: a + b );
    add10 = makeAdder 10;
 in
    add10 5

# Natija: 15
```

bunda `makeAdder` funksiya yaratilyapti va uni `add10` o'zgaruvchi chaqiryapti `10` qiymati bilan `in` ichidagi `add10` 5 qiymatini qo'shib funksiyani chaqiryapti.

<h3 class="my-section-tag">Rekursiv funksiyalar</h3>

```nix
let
    rec factorial = n:
        if n <=1 then 1 else n * factorial (n - 1);
in
    factorial 5

# Natija: 120
```

oldin ko'rganimizdek, `rec` orqali rekursiv qilinadi, shu orqali qiymatlar o'qiladi.

`builtins.isFunction` orqali qiymatini funksiya ekanligni tekshiramiz, boolean qaytaradi

</div>
