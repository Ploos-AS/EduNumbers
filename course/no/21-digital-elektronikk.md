# Tall i digital elektronikk

I digital elektronikk kobles bitmønstre til fysiske signaler, registre, målinger og protokoller. Tallene er ikke bare matematikk: de styrer pinner og beskriver virkelige måleverdier.

## PREDICT

Hvis et 8-bit GPIO-register inneholder `0x81`, hvilke bit er satt?

## STEP — logisk og fysisk nivå

En logisk 0 eller 1 er en abstraksjon. Den fysiske kretsen bruker spenningsområder som tolkes som LOW og HIGH. Nøyaktige terskler avhenger av komponent og datablad.

Et signal kan også være **active-low**. Da betyr det aktive nivået logisk/funksjonelt «på» når den elektriske linjen er LOW. Navn som `/RESET`, `RESET_n` eller lignende brukes ofte, men konvensjonen varierer.

## GPIO-register

Tenk et register:

`PORT = 1010 0001₂ = 0xA1`

Hver bit kan styre en separat funksjon. En maske kan endre én bit uten å uttrykke hele registerverdien på nytt.

Sett bit 3:

`PORT |= (1 << 3)`

Nullstill bit 3:

`PORT &= ~(1 << 3)`

Toggle bit 3:

`PORT ^= (1 << 3)`

På virkelig hardware må du lese databladet: enkelte registre har egne SET/CLEAR-registre, write-one-to-clear-flagg eller andre regler som gjør en vanlig read-modify-write feil.

## Datablad og registerkart

Et registerkart oppgir typisk:

- registeradresse eller offset
- bitposisjoner
- feltbredder
- resetverdi
- read/write-egenskaper
- betydningen av feltverdier

En verdi som `0x82` er først nyttig når vi vet hvilket register den tilhører og hva hvert bitfelt betyr.

## ADC

En idealisert N-bit ADC har `2^N` digitale koder. En 10-bit ADC har 1024 koder, normalt 0–1023.

For en enkel idealisert unipolar modell kan en kode omregnes omtrent som:

`V ≈ code / (2^N - 1) × Vref`

Den nøyaktige overføringsfunksjonen, referansen, toleranser og endpoint-definisjonen må hentes fra databladet. Formelen over er derfor en læringsmodell, ikke en universell ADC-lov.

## DAC

En DAC gjør motsatt retning: en digital kode påvirker en analog utgang. Også her bestemmer bitbredde antall koder og dermed den idealiserte kvantiseringen.

## Logic analyzer

En logic analyzer samler digitale samples. Verktøyet kan vise dem som:

- bit
- byte
- hex
- dekodede UART/SPI/I²C-felt
- timestamps

Byte `10100101₂ = 0xA5` kan være kommando, adresse, flagg eller data. Protokollen gir semantikken.

Ved serielle protokoller må du også kjenne blant annet bitrekkefølge, klokking, framing og byteorden der flerbytefelt brukes.

## OBSERVE

For forutsigelsen er `0x81 = 1000 0001₂`, så bit 7 og bit 0 er satt.

Hardware-registre og protokoller er praktiske eksempler på hele kursets hovedidé: bitmønster + avtalt representasjon = mening.

## EXPLAIN

Når du leser et datablad, oversetter du kontinuerlig mellom bitposisjoner, masker, hex, desimale størrelser og fysisk funksjon.

## Sjekk deg selv

Hvilke bit er satt i `0x81`? Hvor mange koder har en 12-bit ADC? Hvorfor bør du ikke anta at alle statusflagg kan nullstilles med vanlig read-modify-write? Hvorfor må en ADC-formel alltid kontrolleres mot databladet?
