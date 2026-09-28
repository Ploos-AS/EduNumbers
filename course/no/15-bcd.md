# BCD – Binary-Coded Decimal

BCD lagrer desimalsifre som binære koder i stedet for å representere hele tallet som ett binært heltall.

## PREDICT

Hvordan kan desimaltallet 42 lagres dersom hvert desimalsiffer får fire bit?

## STEP

I packed BCD bruker hvert desimalsiffer én nibble:

`42₁₀ -> 0100 0010₂ -> 0x42`

Dette er ikke det samme som vanlig binær representasjon av 42, som er `00101010₂ = 0x2A`.

Bare nibbleverdiene 0–9 er gyldige desimalsifre; A–F brukes normalt ikke som BCD-sifre.

I unpacked BCD bruker hvert siffer typisk en hel byte, mens packed BCD legger to sifre i én byte.

## Hvorfor BCD?

BCD har vært viktig i kalkulatorer, klokker, tellere, økonomisystemer og eldre maskiner fordi desimalsifre kan bevares direkte og vises uten binær/desimal avrundingsproblematikk.

## OBSERVE

Hexdumpen `42` kan bety vanlig binær verdi 66 eller packed BCD-verdi 42. Formatkontekst avgjør.

## EXPLAIN

BCD demonstrerer igjen hovedideen i kurset: samme bitmønster kan ha forskjellige betydninger under forskjellige representasjonsregler.

## Sjekk deg selv

Skriv 1987 som packed BCD. Hvor mange byte kreves?
