# Signed heltall

For å representere negative heltall må bitmønstrene få en avtalt signed-tolkning.

## PREDICT

Kan bitmønsteret `11111111₂` bety både 255 og −1?

## STEP

Historisk finnes flere representasjoner.

**Sign-magnitude** bruker én bit som fortegn og resten som størrelse. Det gir både +0 og −0.

**Enerkomplement** inverterer alle bit for å lage den negative verdien. Også dette gir to nullrepresentasjoner.

**Toerkomplement** er den dominerende representasjonen for signed heltall i moderne datamaskiner. For `n` bit er området

`−2ⁿ⁻¹ ... 2ⁿ⁻¹ − 1`.

For åtte bit er området −128 til 127.

## Vanlig misoppfatning

Den øverste biten i toerkomplement er ikke bare et separat «minusflagg» som kan fjernes fra resten av tallet. Hele bitmønsteret deltar i representasjonen.

Det er også derfor området ikke er symmetrisk: åtte bit har én flere negativ verdi enn positive verdier.

## OBSERVE

Samme rå byte kan tolkes forskjellig:

- `FF₁₆` = 255 som unsigned 8-bit
- `FF₁₆` = −1 som signed 8-bit toerkomplement

Ingen av tolkningene ligger «i» bitene alene.

## EXPLAIN

Representasjon krever kontekst: bitbredde, signedness og kodingsregel. Debuggere og disassemblere må derfor vite hvilken type de skal vise.

## Sjekk deg selv

Hva er området for signed 16-bit toerkomplement? Hvorfor er det én flere negativ verdi enn positive verdier?
