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

## Vanlig misoppfatning

Når du tester en bit med `value AND MASK`, er poenget vanligvis å sjekke om resultatet er null eller ikke-null. Resultatet trenger ikke være tallet 1. Tester du for eksempel bit 5, kan et satt resultat være `00100000₂`.

`NOT MASK` må også forstås med en bestemt bitbredde. I et 8-bit register inverteres åtte bit; i en bredere datatype finnes flere bit som også kan bli invertert.

## OBSERVE

For å sette bit 0 uten å endre de andre bitene kan vi OR-e med masken `00000001₂`: `10100100₂ OR 00000001₂ = 10100101₂`.

Hex gjør masker lettere å lese: `11110000₂ = F0₁₆` og `00001111₂ = 0F₁₆`.

## EXPLAIN

Bitfelt pakker mange små verdier effektivt. Masker lar programmet endre eller lese ett felt uten å ødelegge naboene.

## Sjekk deg selv

Lag en maske for bit 2 og 5. Vis hvordan bit 5 kan toggles i `34₁₆`.
