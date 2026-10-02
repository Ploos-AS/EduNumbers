# Toerkomplement i praksis

Toerkomplement gjør at samme binære addisjonsmaskinvare kan brukes for positive og negative heltall.

## PREDICT

Hvordan kan `11111011₂` representere −5?

## STEP

For å finne representasjonen av −5 i åtte bit:

1. skriv +5: `00000101`
2. inverter bitene: `11111010`
3. legg til 1: `11111011`

Dermed er `FB₁₆` signed 8-bit −5.

En rask matematisk tolkning av et mønster med toppbit 1 er å ta den unsigned verdien og trekke fra `2ⁿ`:

`251 − 256 = −5`.

## Addisjon

`5 + (-5)`:

`00000101 + 11111011 = 1 00000000`

Carry utenfor åtte bit forkastes, og resultatet er null.

## Negering og minimumsverdien

Negering gjøres med invertering + 1. Men −128 i signed 8-bit har ingen positiv motpart som passer i samme type; +128 ligger utenfor området. Dette er en viktig edge case.

## OBSERVE

For forutsigelsen er `11111011₂` mønsteret for −5 i 8-bit toerkomplement: inverter `00000101₂` til `11111010₂` og legg til 1, som gir `11111011₂`.

Carry og signed overflow er ikke det samme. CPU-er kan ha separate flagg fordi unsigned og signed tolkning stiller forskjellige spørsmål til samme bitresultat.

## EXPLAIN

Toerkomplement er best forstått som aritmetikk modulo `2ⁿ`, kombinert med en signed tolkning av halvparten av bitmønstrene.

## Sjekk deg selv

Representer −1, −42 og −128 som 8-bit hex. Tolk `80₁₆` både unsigned og signed.
