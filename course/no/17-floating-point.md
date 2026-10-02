# Floating-point og IEEE 754

Floating-point lar binærpunktet «flyte» ved å lagre en signifikand sammen med en eksponent.

## PREDICT

Hvorfor kan et svært stort og et svært lite tall begge representeres i samme 32-bit format?

## STEP

IEEE 754 binary32 bruker 32 bit fordelt på:

- 1 signbit
- 8 eksponentbit
- 23 eksplisitte fraction-bit

For normale verdier representerer feltet i prinsippet

`(-1)^sign × significand × 2^exponent`.

Eksponenten lagres med bias, og den ledende 1-biten i normale binære verdier er implisitt.

Standarden definerer også spesialverdier som +0, −0, positive/negative infinity, NaN og subnormale tall.

## Regnet eksempel: `1.0 = 0x3F800000`

Binary32-mønsteret `0x3F800000` er:

`0 01111111 00000000000000000000000`

- sign = 0, altså positivt tall
- lagret eksponent = 127; med bias 127 blir den virkelige eksponenten `127 − 127 = 0`
- fraction-feltet er 0, så signifikanden er `1.0₂`

Dermed blir verdien `(+1) × 1.0₂ × 2⁰ = 1.0`.

## Fra desimal brøk til binær brøk

For å konvertere en brøk kan vi gange brøkdelen med 2 gjentatte ganger og lese av heltallsdelen:

- `0.5 × 2 = 1.0` → første bit er 1, altså `0.5₁₀ = 0.1₂`
- `0.25 × 2 = 0.5`, deretter `0.5 × 2 = 1.0` → `0.25₁₀ = 0.01₂`

For `0.1₁₀` stopper prosessen ikke: bitmønsteret fortsetter periodisk. Derfor finnes ingen endelig binær brøk som er nøyaktig lik en tidel.

## Hvorfor 0.1 + 0.2?

Brøken 1/10 har ingen endelig binær brøkrepresentasjon, på samme måte som 1/3 ikke har en endelig desimalrepresentasjon. Verdien må derfor avrundes til nærmeste representerbare floating-point-verdi.

Når flere slike avrundede verdier brukes i aritmetikk, kan resultatet avvike litt fra det matematiske desimaltallet. I vanlig binary64-aritmetikk blir for eksempel `0.1 + 0.2` typisk representert som omtrent `0.30000000000000004`, ikke nøyaktig `0.3`.

## Presisjon og range

Flere eksponentbit gir stor range; flere signifikandbit gir større presisjon. Floating-point gir derfor et kompromiss, ikke «vilkårlig presise reelle tall».

## OBSERVE

`0x3F800000` viser konkret at sign-, eksponent- og fraction-feltene sammen gir verdien 1.0. Eksemplet med 0.1 viser samtidig hvorfor ikke alle desimalbrøker kan lagres nøyaktig.

Et floating-point-bitmønster kan ikke tolkes som et vanlig heltall og forventes å beholde samme numeriske verdi. Feltstrukturen definerer representasjonen.

## EXPLAIN

IEEE 754 gjør floating-point portabelt og veldefinert, men programmer må fortsatt forstå avrunding, spesialverdier og sammenligning.

## Sjekk deg selv

Hvorfor er testing av floating-point-likhet ofte mer komplisert enn testing av heltallslikhet?
