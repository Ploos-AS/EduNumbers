# Fixed-point og Q-format

Fixed-point representerer brøktall med en implisitt fast plassering av binærpunktet.

## PREDICT

Hvis et 8-bit mønster har fire heltallsbit og fire brøkbit, hvilken verdi har `00111000₂`?

## STEP

I et unsigned Q4.4-lignende format har de fire nederste bitene vektene (2^{-1},2^{-2},2^{-3},2^{-4}).

`0011.1000₂ = 3 + 1/2 = 3.5`.

Det lagrede heltallet er 56. Skalafaktoren er (2^4=16), så den virkelige verdien er `56 / 16 = 3.5`.

Med (f) brøkbit er oppløsningen (2^{-f}).

## Signed fixed-point

Toerkomplement kan kombineres med et fast binærpunkt. Bitmønsteret tolkes først som et signed heltall og skaleres deretter med (2^{-f}).

## Fordeler og begrensninger

Fixed-point gir forutsigbar presisjon og kan være effektivt på mikrokontrollere uten rask floating-point-maskinvare. Til gjengjeld må programmereren holde kontroll på skalering, range og overflow.

## OBSERVE

Binærpunktet lagres ikke som et eget symbol. Formatdefinisjonen forteller hvor det ligger.

## EXPLAIN

Fixed-point er egentlig heltallsaritmetikk med en avtalt skala. Det gjør forbindelsen til bitbredde, toerkomplement og overflow svært tydelig.

## Sjekk deg selv

Hva er oppløsningen med åtte brøkbit? Tolk heltallsverdien 384 med åtte brøkbit.
