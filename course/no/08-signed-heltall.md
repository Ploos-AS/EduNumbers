# Signed heltall

For å representere negative heltall må bitmønstrene få en avtalt signed-tolkning.

## PREDICT

Kan bitmønsteret `11111111₂` bety både 255 og −1?

## STEP

Historisk finnes flere representasjoner.

**Sign-magnitude** bruker én bit som fortegn og resten som størrelse. Det gir både +0 og −0.

**Énerkomplement** inverterer alle bit for å lage den negative verdien. Også dette gir to nullrepresentasjoner.

**Toerkomplement** er standardrepresentasjonen i moderne heltallsaritmetikk. For (n) bit er området

`-2^(n-1) ... 2^(n-1)-1`.

For åtte bit er området −128 til 127.

## OBSERVE

Samme rå byte kan tolkes forskjellig:

- `FF₁₆` = 255 som unsigned 8-bit
- `FF₁₆` = −1 som signed 8-bit toerkomplement

Ingen av tolkningene ligger «i» bitene alene.

## EXPLAIN

Representasjon krever kontekst: bitbredde, signedness og kodingsregel. Debuggere og disassemblere må derfor vite hvilken type de skal vise.

## Sjekk deg selv

Hva er området for signed 16-bit toerkomplement? Hvorfor er det én flere negativ verdi enn positive verdier?
