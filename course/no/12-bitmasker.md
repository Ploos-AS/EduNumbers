# Bitmasker og bitfelt

En bitmaske velger bestemte bit i en verdi uten å påvirke resten.

## PREDICT

Et 8-bit register er `10100100₂`. Hvordan setter du bit 0 uten å endre de andre bitene?

## STEP

La `MASK = 00000001₂`.

- sett bit: `value OR MASK`
- nullstill bit: `value AND NOT MASK`
- toggle bit: `value XOR MASK`
- test bit: `value AND MASK`

For flere bit kan masken inneholde flere ettall.

Et felt på bit 4–6 kan isoleres med en maske og deretter skiftes ned til bit 0 før det tolkes som et lite heltall.

## Registereksempel

Anta at bit 7 betyr ENABLE, bit 3 IRQ og bit 0 READY. Da kan `10001001₂` leses som tre uavhengige boolske flagg i samme byte.

## OBSERVE

Hex gjør masker lettere å lese: `11110000₂ = F0₁₆` og `00001111₂ = 0F₁₆`.

## EXPLAIN

Bitfelt pakker mange små verdier effektivt. Masker lar programmet endre eller lese ett felt uten å ødelegge naboene.

## Sjekk deg selv

Lag en maske for bit 2 og 5. Vis hvordan bit 5 kan toggles i `34₁₆`.
