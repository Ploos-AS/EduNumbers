# Tall i C og Python

C og Python kan uttrykke de samme binære og heksadesimale verdiene, men heltallsmodellene deres er svært forskjellige.

## PREDICT

Vil `255 + 1` alltid gi samme resultat i C og Python?

## STEP — literals

Heksadesimale og desimale literaler fungerer likt i begge språk. Binære literaler som `0b101010` støttes i Python og fra C23 i C (mange kompilatorer, blant annet GCC og Clang, har lenge støttet dem som utvidelse):

```
0b101010
0x2A
42
```

I C bestemmes typen også av språkets type- og literalregler. I Python er `int` ikke begrenset til en fast 8-, 16-, 32- eller 64-bit bredde.

## C: eksplisitte bredder

Når maskinbredde betyr noe, er typene fra `<stdint.h>` nyttige:

```c
#include <stdint.h>

uint8_t  a = 0xFF;
uint16_t b = 0x1234;
int32_t  c = -42;
```

Eksakt-bredde-typene finnes når implementasjonen tilbyr en heltallstype med den aktuelle bredden.

Unsigned C-aritmetikk følger modulo `2ⁿ` for typens bredde. Signed overflow må ikke behandles som om C lover samme wraparound; signed integer overflow er ikke definert på samme måte av språket.

## Python: vilkårlig store heltall

```python
x = 255
print(x + 1)   # 256
```

Python-`int` vokser etter behov innen praktiske ressursgrenser. Hvis du vil simulere et 8-bit register, må du selv innføre bredden, for eksempel:

```python
x = (255 + 1) & 0xFF
```

Da blir resultatet 0.

## Skift og masker

```
value & 0x0F
value | 0x80
value ^ 0x01
value << 1
value >> 1
```

Betydningen av høyreskift for negative verdier og effekten av promotions/typebredder må vurderes etter språket og typen. Ikke flytt maskinantakelser ukritisk mellom språk.

## Parsing

Python:

```python
int("101010", 2)
int("2A", 16)
int("0x2A", 0)
```

C bruker blant annet funksjoner som `strtoul`, der base og feilhåndtering må behandles eksplisitt.

## Formatering

Python:

```python
f"{42:b}"      # 101010
f"{42:02X}"    # 2A
f"{42:08b}"    # 00101010
```

I C brukes formatmakroer fra `<inttypes.h>` når portabel formatering av fixed-width heltall er viktig.

## OBSERVE

Kildekoden `0xFF` beskriver en numerisk literal. Om du senere tolker eller lagrer den som 8-bit signed, 8-bit unsigned eller en større type er en egen beslutning.

## EXPLAIN

Programmeringsspråk legger regler oppå bitrepresentasjonene. God lavnivåkode krever at du forstår både maskinmodellen og språkmodellen.

## Sjekk deg selv

Hvorfor gir `(255 + 1) & 0xFF` verdien 0 i Python? Hvorfor bør du ikke anta at signed C-overflow fungerer på samme måte?
