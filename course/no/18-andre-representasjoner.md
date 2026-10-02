# Andre representasjoner

Bitmønstre brukes til langt mer enn vanlige heltall. Dette kapitlet viser fire viktige eksempler: Gray-kode, biased/excess-notasjon, tegnkoder og packed data.

## PREDICT

Må bitmønsteret `01000001` alltid bety tallet 65?

## STEP — Gray-kode

I binær-reflektert Gray-kode skiller naboverdier seg med nøyaktig én bit. Dette er nyttig når flere bit ikke bør endre seg samtidig, for eksempel i enkelte posisjonssensorer og enkodere.

De første 3-bit Gray-kodene er:

| Desimal | Binær | Gray |
|---:|---:|---:|
| 0 | 000 | 000 |
| 1 | 001 | 001 |
| 2 | 010 | 011 |
| 3 | 011 | 010 |
| 4 | 100 | 110 |

Fra binær verdi `b` kan Gray-koden beregnes som `g = b XOR (b >> 1)`.

## STEP — biased/excess

En eksponent kan lagres som et unsigned felt med en fast bias. Hvis bias er 127, representerer lagret felt 130 eksponenten (130-127=3).

Dette er prinsippet som brukes for eksponentfeltet i IEEE 754 binary32, selv om spesielle feltverdier har egne betydninger.

## STEP — tegn som tall

ASCII gir bokstaven `A` kodeverdien 65, altså `0x41`. Unicode definerer **code points**, for eksempel U+0041 for A. En encoding som UTF-8 bestemmer deretter hvilke byte som faktisk lagres.

Code point og byteencoding er derfor ikke det samme.

## STEP — packed data

En byte kan deles i bitfelt. Et tenkt statusregister kan bruke:

- bit 7: ready
- bit 6: error
- bit 5–4: mode
- bit 3–0: counter

Da er byten ikke «ett tall» i vanlig forstand, men flere felt pakket sammen.

## OBSERVE

Nei. `01000001₂ = 0x41` er 65 som unsigned heltall, men samme mønster kan for eksempel representere ASCII-tegnet `A`.

`0x41` kan tolkes som unsigned 65, signed 65, ASCII-tegnet A, deler av en instruksjon eller et felt i en struktur. Konteksten bestemmer betydningen.

## EXPLAIN

Datamaskinen lagrer bit. Typer, protokoller, instruksjonssett og filformater gir bitene semantikk.

## Sjekk deg selv

Beregn Gray-koden for binær `1010`. Hva er den virkelige eksponenten når et excess-127-felt inneholder 124?
