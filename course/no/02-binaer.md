# Binært: base 2

Binært bruker bare sifrene `0` og `1`. Hver posisjon representerer en potens av to.

## PREDICT

Hva tror du bitmønsteret `10110110₂` betyr som et vanlig unsigned heltall? Prøv å summere verdien av posisjonene som inneholder `1`.

## STEP

| Bitposisjon | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Verdi | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

For `10110110₂` er bit 7, 5, 4, 2 og 1 satt:

`128 + 32 + 16 + 4 + 2 = 182`.

Dermed er `10110110₂ = 182₁₀` når mønsteret tolkes som et unsigned heltall.

## Bits, nibble og byte

En **bit** kan ha verdien 0 eller 1. Fire bits kalles ofte en **nibble**. Åtte bits utgjør normalt en **byte**.

Med `n` bits finnes `2ⁿ` forskjellige bitmønstre. Åtte bits gir derfor 256 mulige mønstre, fra `00000000` til `11111111`.

## OBSERVE

256 mulige mønstre betyr ikke at det største representerte tallet alltid er 255. Det gjelder bare når de åtte bitene tolkes som et unsigned heltall.

Det samme mønsteret kan senere tolkes som signed heltall, tegn, deler av en instruksjon, bitfelt eller noe helt annet.

## EXPLAIN

Binært beskriver et bitmønster. **Representasjonen og datatypen bestemmer hva bitmønsteret betyr.** Dette skillet blir viktig gjennom resten av kurset.

## Sjekk deg selv

1. Hva er `10000001₂` som unsigned heltall?
2. Hvor mange forskjellige mønstre kan lagres med 4 bits?
3. Hvorfor er det ikke alltid riktig å si at `11111111₂` «er 255»?
