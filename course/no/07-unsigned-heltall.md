# Unsigned heltall

Et **unsigned** heltall bruker alle bitene til størrelsen på en ikke-negativ verdi.

## PREDICT

Hva er den største verdien som kan lagres i åtte bit?

## STEP

Med (n) bit finnes (2^n) mønstre. For unsigned heltall representerer de verdiene

`0 ... 2^n - 1`.

Dermed er områdene blant annet:

| Bredde | Område |
|---:|---:|
| 8 bit | 0–255 |
| 16 bit | 0–65 535 |
| 24 bit | 0–16 777 215 |
| 32 bit | 0–4 294 967 295 |

`11111111₂ = FF₁₆ = 255₁₀` som unsigned 8-bit-verdi.

## Overflow og wraparound

En fast bitbredde kan ikke representere vilkårlig store verdier. I modulo-(2^n)-aritmetikk vil en verdi som passerer maksimum gå rundt:

`255 + 1 = 0` for en 8-bit unsigned verdi dersom bare de nederste åtte bitene beholdes.

## OBSERVE

Bitmønsteret endrer ikke betydning av seg selv. `FF₁₆` er bare 255 dersom vi vet at mønsteret tolkes som unsigned.

## EXPLAIN

Datatypen og bitbredden er en del av betydningen. Dette er avgjørende når du leser registre, protokollfelt, filer eller maskinkode.

## Sjekk deg selv

Finn området for 12-bit unsigned og beregn hva `250 + 10` blir med 8-bit wraparound.
