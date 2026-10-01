# Heksadesimalt: base 16

Heksadesimalt passer svært godt til binære datamaskiner fordi ett hex-siffer tilsvarer nøyaktig fire bits.

## PREDICT

Se på `1101 0010₂`. Kan du dele mønsteret i grupper på fire bit og gjette den heksadesimale skrivemåten?

## STEP

| Hex | Binær | Desimal |
|---|---|---:|
| 0 | 0000 | 0 |
| 1 | 0001 | 1 |
| 2 | 0010 | 2 |
| 3 | 0011 | 3 |
| 4 | 0100 | 4 |
| 5 | 0101 | 5 |
| 6 | 0110 | 6 |
| 7 | 0111 | 7 |
| 8 | 1000 | 8 |
| 9 | 1001 | 9 |
| A | 1010 | 10 |
| B | 1011 | 11 |
| C | 1100 | 12 |
| D | 1101 | 13 |
| E | 1110 | 14 |
| F | 1111 | 15 |

Gruppen `1101₂` er `D₁₆`, og `0010₂` er `2₁₆`. Derfor:

`1101 0010₂ = D2₁₆`.

Omvendt kan hvert hex-siffer ekspanderes til fire bits. For eksempel:

`3A₁₆ = 0011 1010₂`.

## OBSERVE

Hex endrer ikke verdien. Det er en kompakt skrivemåte for binære bitmønstre, og koblingen er eksakt fordi `16 = 2⁴`.

Denne egenskapen er grunnen til at hex brukes så mye i adresser, maskinkode, debugger-visninger, registerverdier, farger, protokoller og filformater.

## Vanlig misforståelse

Bokstavene `A`–`F` er ikke «tekst» inne i tallet. De er sifre med verdiene 10–15 i base 16.

## EXPLAIN

Heksadesimal er nyttig fordi mennesker kan lese lange binære mønstre mer kompakt uten å miste den direkte koblingen til bitene.

## Sjekk deg selv

1. Skriv `11111111₂` i hex.
2. Skriv `7C₁₆` i binær.
3. Hvorfor tilsvarer ett hex-siffer akkurat fire bits?
