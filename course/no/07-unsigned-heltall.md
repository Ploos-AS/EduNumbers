# Unsigned heltall

Et **unsigned** heltall bruker alle bitene til størrelsen på en ikke-negativ verdi.

## PREDICT

Hva er den største verdien som kan lagres i åtte bit?

## STEP

Med `n` bit finnes `2ⁿ` mønstre. For unsigned heltall representerer de verdiene

`0 ... 2ⁿ - 1`.

Dermed er områdene blant annet:

| Bredde | Område |
|---:|---:|
| 8 bit | 0–255 |
| 16 bit | 0–65 535 |
| 24 bit | 0–16 777 215 |
| 32 bit | 0–4 294 967 295 |

`11111111₂ = FF₁₆ = 255₁₀` som unsigned 8-bit-verdi.

## Overflow og wraparound

En fast bitbredde kan ikke representere vilkårlig store verdier. I aritmetikk modulo `2ⁿ` vil en verdi som passerer maksimum gå rundt dersom bare de nederste `n` bitene beholdes.

For eksempel blir `255 + 1 = 0` med 8-bit unsigned wraparound.

## Vanlig misoppfatning

Åtte bit gir 256 mulige mønstre, men området er 0–255 fordi null også bruker ett av mønstrene.

## OBSERVE

For et unsigned 8-bit heltall er maksimum `2⁸ − 1 = 255`, altså `11111111₂ = FF₁₆`.

Bitmønsteret endrer ikke betydning av seg selv. `FF₁₆` er bare 255 dersom vi vet at mønsteret tolkes som unsigned.

## EXPLAIN

Datatypen og bitbredden er en del av betydningen. Dette er avgjørende når du leser registre, protokollfelt, filer eller maskinkode.

## Sjekk deg selv

Finn området for 12-bit unsigned og beregn hva `250 + 10` blir med 8-bit wraparound.
