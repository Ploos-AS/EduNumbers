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

## Vanlig misoppfatning

`0x42` betyr ikke automatisk desimalt 42. Som et vanlig binært heltall er `0x42 = 66₁₀`; bare når formatet sier packed BCD tolkes de to nibblene som desimalsifrene 4 og 2.

## OBSERVE

Med fire bit per desimalsiffer blir 4 kodet som `0100` og 2 som `0010`. Packed BCD for 42 blir derfor `0100 0010₂ = 0x42`.

Hexdumpen `42` kan bety vanlig binær verdi 66 eller packed BCD-verdi 42. Formatkontekst avgjør.

## EXPLAIN

BCD demonstrerer igjen hovedideen i kurset: samme bitmønster kan ha forskjellige betydninger under forskjellige representasjonsregler.

## Sjekk deg selv

Skriv 1987 som packed BCD. Hvor mange byte kreves? Hvorfor kan ikke en hex-editor alene fortelle deg om byten `42` er binær 66 eller BCD 42?
