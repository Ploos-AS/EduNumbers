# Sluttprosjekt: analyser en ukjent bytebuffer

Dette prosjektet samler hele EduNumbers. Du skal ikke bare konvertere tall; du skal bruke representasjon, byteorden, signedness, bitfelt, tekst og struktur for å forklare en ukjent buffer.

## Oppgaven

Du får denne syntetiske hex-dumpen:

```text
0000: 45 4E 55 4D 01 A5 0C 00 34 12 FE FF 50 4C 4F 4F
0010: 53 00 00 00 78 56 34 12
```

Du får bare tre sikre opplysninger:

1. formatet er laget for denne oppgaven
2. alle felt begynner på hele bytegrenser
3. bufferen er komplett

Resten skal utledes og begrunnes.

## PREDICT

Se på dumpen uten å regne først.

Hvilke områder ser ut som tekst? Hvilke byte kan være flagg? Ser du verdier som kan være little-endian heltall?

Skriv hypotesene før du leser videre.

## STEP 1 — offsets

Dumpen har 24 byte, med offsets `0x00` til `0x17`.

Marker hvert byte med offset. Dette gjør senere hypoteser presise.

## STEP 2 — signatur

De første fire bytene er:

`45 4E 55 4D`

Som ASCII blir dette `ENUM`.

Det er en sterk kandidat til en magic/signatur, men merk ordet **kandidat**: mønsteret alene er ikke matematisk bevis.

## STEP 3 — små felt

Ved offset `0x04` finner vi `01`. Det kan passe som en versjon.

Ved `0x05` finner vi `A5`:

`1010 0101₂`

Hvis dette er et flaggfelt, er bit 7, 5, 2 og 0 satt.

## STEP 4 — lengde

Offset `0x06–0x07` inneholder:

`0C 00`

Som little-endian 16-bit blir dette `0x000C = 12`.

Som big-endian blir det `0x0C00 = 3072`.

Siden bufferen bare er 24 byte, kan 12 være en mer plausibel lokal lengde — men plausibilitet er fortsatt ikke det samme som dokumentasjon.

## STEP 5 — heltall og signedness

Offset `0x08–0x09`:

`34 12`

Little-endian gir `0x1234 = 4660`.

Offset `0x0A–0x0B`:

`FE FF`

Little-endian unsigned gir `65534`. Tolket som signed 16-bit toerkomplement blir samme bitmønster `−2`.

Dette demonstrerer hvorfor signedness må være del av formatbeskrivelsen.

## STEP 6 — tekst

Offset `0x0C–0x13` er:

`50 4C 4F 4F 53 00 00 00`

ASCII gir `PLOOS` etterfulgt av tre nullbyte. En mulig modell er et fast 8-byte tekstfelt med null-padding.

## STEP 7 — 32-bit verdi

De siste fire bytene:

`78 56 34 12`

Little-endian gir:

`0x12345678`

Nå har vi flere felt som passer samme byteorden. Det styrker hypotesen om little-endian format.

## En mulig struktur

En konsistent modell er:

| Offset | Størrelse | Mulig felt | Tolkning |
|---|---:|---|---|
| 0x00 | 4 | magic | ASCII `ENUM` |
| 0x04 | 1 | version | 1 |
| 0x05 | 1 | flags | `0xA5` |
| 0x06 | 2 | length | 12, little-endian |
| 0x08 | 2 | id | `0x1234` |
| 0x0A | 2 | delta | −2 signed |
| 0x0C | 8 | name | `PLOOS`, null-padded |
| 0x14 | 4 | value | `0x12345678` |

Denne strukturen er fasiten for den syntetiske oppgaven. I ekte reverse engineering ville vi krevd flere observasjoner eller dokumentasjon før vi kalte modellen sikker.

## STEP 8 — verifiser med kode

I Python kan deler av bufferen undersøkes eksplisitt:

```python
data = bytes.fromhex(
    "45 4E 55 4D 01 A5 0C 00 34 12 FE FF "
    "50 4C 4F 4F 53 00 00 00 78 56 34 12"
)

length = int.from_bytes(data[6:8], "little")
ident = int.from_bytes(data[8:10], "little")
delta = int.from_bytes(data[10:12], "little", signed=True)
value = int.from_bytes(data[20:24], "little")

print(length, ident, delta, hex(value))
```

Forventet resultat er `12 4660 -2 0x12345678`.

## OBSERVE

Ingen av de viktigste bytefølgene endret seg under analysen. Det som endret seg var **tolkningen** vår.

## EXPLAIN

Kursets hovedidé er nettopp dette: tall og byte er verdier og bitmønstre; base, signedness, byteorden, tekstkoding og feltstruktur er representasjonsregler som gir mønstrene mening.

## Leveranse

Lag en kort analyserapport som inneholder:

- annotert hex-dump
- foreslått feltkart
- beregninger for alle heltall
- flaggbits for `0xA5`
- forklaring av signed `FE FF`
- teksttolkning
- begrunnelse for byteorden
- minst én alternativ hypotese du vurderte og forkastet
- et lite program som verifiserer modellen

Når du kan forklare **hvorfor** hver tolkning er rimelig, har du brukt hele EduNumbers som et verktøy.
