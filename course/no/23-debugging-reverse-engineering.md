# Tall i debugging og reverse engineering

Når et program krasjer, en fil er ukjent eller et gammelt system mangler dokumentasjon, møter vi ofte rå byte før vi kjenner strukturen. Tallrepresentasjon blir da et analyseverktøy.

## PREDICT

Du finner bytene:

`48 65 6C 6C 6F 00`

Er dette seks heltall, maskinkode eller tekst?

## STEP — start med observasjon

Skill mellom det du **ser** og det du **antar**.

En hex-editor eller memory dump kan vise:

- offset eller adresse
- byte i hex
- en tekstkolonne
- markerte områder eller endringer

At en tekstkolonne viser lesbare tegn er et spor, ikke et bevis på at feltet faktisk er tekst.

## Gjenkjenn mønstre

Nyttige observasjoner kan være:

- mange nullbyte
- repeterende verdier
- sekvenser som ligner tekst
- verdier som ligner lengder eller offsets
- kjente signaturer
- regelmessige blokker
- bitfelt med stabile og skiftende bit

Hypoteser bør testes mot flere eksempler.

## Heltall i en dump

Bytene

`34 12`

kan være `0x3412` som big-endian eller `0x1234` som little-endian.

Hvis en hypotese sier at feltet er en lengde, kan vi kontrollere om verdien passer med resten av datastrukturen.

## Adresser og offsets

Debuggere viser ofte adresser i hex. Forskjellen mellom to adresser er en størrelse:

`0x1040 - 0x1000 = 0x40 = 64`

Dette er nyttig når vi undersøker buffere, tabeller og strukturer.

## Disassembly

En disassembler tolker byte som instruksjoner for en bestemt CPU og et bestemt startpunkt.

Det betyr ikke automatisk at alle viste byte faktisk er kode. Data som tolkes som instruksjoner kan produsere syntaktisk gyldig, men meningsløs disassembly.

Spør derfor:

- kjenner vi CPU/ISA?
- kjenner vi riktig startadresse?
- peker kontrollflyt hit?
- ser instruksjonssekvensen plausibel ut?
- kan området i stedet være data?

## Kode og data

I eldre og innebygde systemer kan kode, tabeller, strenger og konstanter ligge tett sammen.

En sekvens som `41 42 43 44` kan være teksten `ABCD`, fire små heltall, deler av større tall eller instruksjonsbyte. Kontekst avgjør.

## Rekonstruer en mulig struktur

Tenk denne fiktive dumpen:

`03 00 08 00 41 42 43 00`

En hypotese kan være:

- byte 0: type = 3
- byte 1: flagg = 0
- byte 2–3: little-endian lengde = 8
- byte 4–7: data

Dette er foreløpig bare en modell. Vi styrker den ved å undersøke flere poster og se om feltene oppfører seg konsekvent.

## Endre én ting

En effektiv metode i egne systemer og testdata er å endre én kjent verdi om gangen og sammenligne før/etter.

Hvis et flagg slås på og nøyaktig én bit endres, har vi et godt spor. Hvis en teller økes og et bestemt felt følger den, lærer vi mer om representasjonen.

## OBSERVE

For forutsigelsen er flere tolkninger mulige uten kontekst. Som ASCII/UTF-8 gir `48 65 6C 6C 6F 00` teksten `Hello` etterfulgt av en nullbyte; det er en sterk hypotese, ikke et bevis alene.

Reverse engineering av data handler ofte mindre om å «gjette riktig» med én gang og mer om å formulere hypoteser som kan motbevises eller styrkes.

## EXPLAIN

Kunnskap om baser, signedness, byteorden, bitfelt, adresser og tekstkoding gjør rå byte lesbare. Men kontekst og flere observasjoner er nødvendig for å skille en plausibel tolkning fra en dokumentert struktur.

## Sjekk deg selv

Hvorfor kan disassembly av data se ut som gyldig kode? Hva kan `00 01` bety under ulike byteordener? Hvorfor er flere eksempler bedre enn én dump når vi prøver å finne en struktur?
