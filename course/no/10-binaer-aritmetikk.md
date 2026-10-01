# Binær aritmetikk og CPU-flagg

Binær addisjon følger de samme prinsippene som desimal addisjon, men hvert siffer kan bare være 0 eller 1.

## PREDICT

Hva blir `1111₂ + 0001₂` dersom registeret bare er fire bit bredt?

## STEP

De grunnleggende addisjonene er `0+0=0`, `0+1=1`, `1+0=1` og `1+1=10₂`. Den siste produserer en carry.

For fire bit:

`1111 + 0001 = 1 0000`

Hvis bare fire resultatbit beholdes, blir resultatet `0000`, mens carry-bitten forteller at unsigned-resultatet ikke passet.

Subtraksjon kan utføres direkte med borrow eller som addisjon av en toerkomplement-negativ verdi.

## CPU-flagg

Mange CPU-er registrerer egenskaper ved resultatet. Vanlige flagg er:

- **C / Carry**: carry ut av toppbiten; relevant for unsigned aritmetikk.
- **Z / Zero**: resultatet er null.
- **N / Negative**: følger ofte toppbiten i resultatet.
- **V / Overflow**: signed-resultatet kan ikke representeres i valgt bredde.

Eksempel: signed 8-bit `7F₁₆ + 01₁₆ = 80₁₆`. Her er resultatmønsteret −128, men det matematiske resultatet +128 passer ikke. Et overflow-flagg settes på arkitekturer som tilbyr et slikt flagg etter denne operasjonen.

## Vanlig misoppfatning

Flaggnavn og nøyaktig oppførsel er ikke identiske på alle CPU-er. Du må lese instruksjonssettets dokumentasjon for å vite hvilke flagg en bestemt instruksjon endrer og hva de betyr der.

Carry og signed overflow er heller ikke det samme: en operasjon kan sette det ene uten å sette det andre.

## OBSERVE

Carry og overflow tolker samme bitoperasjon ut fra henholdsvis unsigned og signed aritmetikk.

## EXPLAIN

CPU-flagg lar etterfølgende instruksjoner ta beslutninger uten å gjenta hele beregningen. De er sentrale for sammenligning, hopp og aritmetikk med flere ord.

## Sjekk deg selv

Beregn `FF₁₆ + 01₁₆` og diskuter C, Z og V for en 8-bit CPU som bruker de vanlige flaggdefinisjonene over.
