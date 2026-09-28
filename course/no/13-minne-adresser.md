# Minne, adresser og offsets

Et minne kan modelleres som en lang rekke adresserbare byte. En adresse identifiserer en posisjon; en verdi kan bruke én eller flere påfølgende byte.

## PREDICT

Hvis en 32-bit verdi starter på adresse `0x1000`, hvilke byteadresser opptar den?

## STEP

En bytebredde på åtte bit gir 256 mulige rå bitmønstre. I byte-adresserbart minne øker adressen normalt med én for hver byte:

`0x1000, 0x1001, 0x1002, 0x1003`.

En 32-bit verdi bruker fire byte og dekker derfor disse fire adressene når den starter på `0x1000`.

En **offset** er en forskyvning relativt til en basisadresse. Hvis base er `0x2000` og offset er `0x34`, er adressen `0x2034`.

## Adresserom

Med (n) adressebit kan (2^n) forskjellige adresser kodes. Hvor mye minne dette beskriver avhenger av hva hver adresse peker på. På vanlige byte-adresserte systemer betyr 16 adressebit opptil 65 536 byteadresser.

## Alignment

Mange arkitekturer foretrekker eller krever at flerbyteverdier starter på bestemte adressegrenser. En 32-bit verdi kan for eksempel være naturlig aligned på en adresse delelig med 4.

Alignment er en maskinregel eller ytelsesegenskap, ikke en egenskap ved selve tallet.

## OBSERVE

Hex passer svært godt til adresser fordi hvert hexsiffer er fire bit. En 16-bit adresse kan skrives med fire hexsifre fra `0000` til `FFFF`.

## EXPLAIN

Når du leser debugger- eller hex-editorvisninger, må du skille mellom adressen til data og verdien som ligger på adressen.

## Sjekk deg selv

Hvilket adresseområde opptar en 16-byte blokk som starter på `0x3FF0`? Hva er adressen base `0x8000` + offset `0x2A`?
