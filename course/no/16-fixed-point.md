# Fixed-point og Q-format

Fixed-point representerer brøktall med en implisitt fast plassering av binærpunktet.

## PREDICT

Hvis et 8-bit mønster har fire heltallsbit og fire brøkbit, hvilken verdi har `00111000₂`?

## STEP

I et unsigned Q4.4-format (fire heltallsbit og fire brøkbit) har de fire nederste bitene vektene `2⁻¹`, `2⁻²`, `2⁻³` og `2⁻⁴`.

`0011.1000₂ = 3 + 1/2 = 3.5`.

Det lagrede heltallet er 56. Skalafaktoren er `2⁴ = 16`, så den virkelige verdien er `56 / 16 = 3.5`.

Med `f` brøkbit er oppløsningen `1 / 2^f`.

## Signed fixed-point

Toerkomplement kan kombineres med et fast binærpunkt. Bitmønsteret tolkes først som et signed heltall og skaleres deretter med `1 / 2^f`.

## Fordeler og begrensninger

Fixed-point gir forutsigbar presisjon og kan være effektivt på mikrokontrollere uten rask floating-point-maskinvare. Til gjengjeld må programmereren holde kontroll på skalering, range og overflow.

## OBSERVE

Med fire brøkbit ligger binærpunktet etter de fire øverste bitene: `0011.1000₂ = 3 + 1/2 = 3.5`.

Binærpunktet lagres ikke som et eget symbol. Formatdefinisjonen forteller hvor det ligger.

## EXPLAIN

Fixed-point er egentlig heltallsaritmetikk med en avtalt skala. Det gjør forbindelsen til bitbredde, toerkomplement og overflow svært tydelig.

## Sjekk deg selv

Hva er oppløsningen med åtte brøkbit? Tolk heltallsverdien 384 med åtte brøkbit.
