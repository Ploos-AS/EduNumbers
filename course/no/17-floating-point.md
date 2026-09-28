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

## Hvorfor 0.1 + 0.2?

Brøken 1/10 har ingen endelig binær brøkrepresentasjon, på samme måte som 1/3 ikke har en endelig desimalrepresentasjon. Verdien må derfor avrundes til nærmeste representerbare floating-point-verdi.

Når flere slike avrundede verdier brukes i aritmetikk, kan resultatet avvike litt fra det matematiske desimaltallet.

## Presisjon og range

Flere eksponentbit gir stor range; flere signifikandbit gir større presisjon. Floating-point gir derfor et kompromiss, ikke «vilkårlig presise reelle tall».

## OBSERVE

Et floating-point-bitmønster kan ikke tolkes som et vanlig heltall og forventes å beholde samme numeriske verdi. Feltstrukturen definerer representasjonen.

## EXPLAIN

IEEE 754 gjør floating-point portabelt og veldefinert, men programmer må fortsatt forstå avrunding, spesialverdier og sammenligning.

## Sjekk deg selv

Hvorfor er testing av floating-point-likhet ofte mer komplisert enn testing av heltallslikhet?
