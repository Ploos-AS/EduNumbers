# Bitoperasjoner

Bitvise operasjoner arbeider på hvert bitpar uavhengig.

## PREDICT

Hva blir `1010 AND 1100`?

## STEP

**AND** gir 1 bare når begge bit er 1. **OR** gir 1 når minst én bit er 1. **XOR** gir 1 når bitene er forskjellige. **NOT** inverterer hvert bit.

For `A=1010₂` og `B=1100₂`:

- `A AND B = 1000`
- `A OR B = 1110`
- `A XOR B = 0110`
- `NOT A = 0101` dersom bredden er fire bit

## Shifts

Venstreskift flytter bit mot høyere posisjoner. Innen fast bredde tilsvarer ett logisk venstreskift ofte multiplikasjon med 2 når ingen relevant bit går tapt.

Logisk høyreskift fyller med null. Aritmetisk høyreskift bevarer fortegnsbiten på signed toerkomplement-maskiner.

## Rotates

Rotate flytter bit rundt endene i stedet for å forkaste dem. Mange CPU-er har også rotate-through-carry, der carry-flagget inngår som en ekstra bit.

## OBSERVE

Alle operasjonene må forstås med en eksplisitt bitbredde. `NOT 00000000` er `11111111` i åtte bit, men en annen verdi dersom bredden er 16 bit.

## EXPLAIN

Bitoperasjoner er grunnverktøy for registre, protokoller, grafikk, komprimering, kryptografiske primitiver og lavnivåprogrammering.

## Sjekk deg selv

Beregn AND, OR og XOR for `3C₁₆` og `0F₁₆`.
