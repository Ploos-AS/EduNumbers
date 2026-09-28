# Binært: base 2

Binært bruker bare sifrene `0` og `1`. Hver posisjon representerer en potens av to.

| Bitposisjon | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Verdi | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

Eksempel: `10110110₂` har verdien `128 + 32 + 16 + 4 + 2 = 182`.

## Bits, nibble og byte

En **bit** kan ha verdien 0 eller 1. Fire bits kalles ofte en **nibble**. Åtte bits utgjør normalt en **byte**.

Med `n` bits finnes `2ⁿ` forskjellige bitmønstre. Åtte bits gir derfor 256 mønstre, fra `00000000` til `11111111`.

Hvorfor det siste mønsteret tolkes som 255, -1 eller noe helt annet, avhenger av representasjonen. Det kommer vi tilbake til.