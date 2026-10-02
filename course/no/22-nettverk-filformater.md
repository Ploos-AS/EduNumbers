# Tall i nettverk og filformater

Nettverkspakker og binære filer består av byte. For å forstå dem må vi vite hvilke byte som hører sammen, hvilken byteorden som brukes, og hva hvert felt betyr.

## PREDICT

Bytefølgen `12 34` representerer et 16-bit tall. Er verdien `0x1234` eller `0x3412`? Skriv hypotesen din før du går videre.

## STEP — nettverksbyteorden

Mange Internett-protokollfelt med flere byte bruker **network byte order**, som er big-endian.

Et 16-bit felt med verdien `0x1234` ligger da som:

`12 34`

Dette betyr ikke at maskinen som sender eller mottar pakken selv må være big-endian. Protokollens representasjon og CPU-ens interne representasjon er separate spørsmål.

## IPv4

En IPv4-adresse er 32 bit og vises vanligvis som fire desimale oktetter.

`192.168.1.10`

tilsvarer byte:

`C0 A8 01 0A`

Punktnotasjonen er menneskevennlig; pakken inneholder byte.

## MAC-adresser

En vanlig 48-bit MAC-adresse skrives ofte som seks hex-byte:

`02:12:34:56:78:9A`

Her er hex spesielt nyttig fordi hvert byte kan skrives med nøyaktig to hex-sifre.

## Protokollfelt

En pakke kan inneholde:

- versjon
- lengde
- type
- flagg
- portnummer
- sekvensnummer
- checksum
- payload

Noen felt er bitfelt. Andre er heltall over flere byte. Dokumentasjonen bestemmer bredde, byteorden og semantikk.

## Magic numbers

Binære filformater starter ofte med karakteristiske byte som hjelper programvare å identifisere formatet.

For eksempel kan en fil begynne:

`89 50 4E 47 0D 0A 1A 0A`

Dette er den åtte byte lange signaturen i starten av en PNG-fil. En signatur er nyttig identifikasjon, men alene beviser den ikke at resten av filen er gyldig.

## Fra hex-dump til struktur

Tenk denne fiktive posten:

`01 03 12 34 41 42 43`

Formatet sier:

- byte 0: versjon
- byte 1: payload-lengde
- byte 2–3: big-endian ID
- resten: payload

Da får vi:

- versjon = 1
- lengde = 3
- ID = `0x1234`
- payload = `41 42 43`, som kan tolkes som ASCII `ABC`

Uten formatbeskrivelsen er dette bare sju byte.

## Lengde og offsets

Binære parsere arbeider ofte med offsets:

`offset + field_length`

Et felt som starter ved offset 4 og er 2 byte langt bruker byte 4 og 5. Neste felt starter ved offset 6.

Feil bredde eller feil offset forskyver resten av tolkningen.

## OBSERVE

For forutsigelsen finnes det ikke ett riktig svar uten byteorden: big-endian gir `0x1234`, mens little-endian gir `0x3412`.

Samme byte kan representere del av en IP-adresse, et tegn, et flaggfelt, et heltall eller rå payload.

## EXPLAIN

Hex-dumpen viser lagrede eller overførte byte. Format- eller protokollspesifikasjonen forteller hvordan byte skal grupperes og tolkes.

## Sjekk deg selv

Hvordan lagres `0xBEEF` som et big-endian 16-bit felt? Hvilke byte representerer IPv4-adressen `127.0.0.1`? Hvorfor er en magic number ikke nok til å validere en hel fil?
