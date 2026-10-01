# Potenser av to

Datamaskiner er fulle av størrelser som følger `2ⁿ`. Å kjenne de vanligste toerpotensene gjør adresser, bitmasker og kapasiteter mye enklere å lese.

Her betyr `n` ganske enkelt hvor mange ganger 2 inngår som faktor. For eksempel er `2³ = 2 × 2 × 2 = 8`.

## PREDICT

Hvor mange forskjellige verdier kan åtte bit representere?

## STEP

Start med:

| n | 2ⁿ |
|---:|---:|
| 0 | 1 |
| 1 | 2 |
| 2 | 4 |
| 3 | 8 |
| 4 | 16 |
| 8 | 256 |
| 10 | 1024 |
| 16 | 65536 |
| 20 | 1048576 |
| 32 | 4294967296 |

Med `n` bit finnes `2ⁿ` mulige bitmønstre. Åtte bit gir derfor 256 mønstre, fra 0 til 255 når de tolkes som unsigned.

## KiB og kB

`1 KiB = 1024 bytes`, mens SI-prefikset `1 kB = 1000 bytes`. Tilsvarende er MiB og GiB binære prefikser.

## Vanlig misoppfatning

`2⁸ = 256` betyr at åtte bit gir 256 forskjellige mønstre. Det betyr ikke at den største unsigned verdien er 256. Når vi teller fra 0, blir den største verdien 255.

## OBSERVE

Hex passer også naturlig: ett hexsiffer er fire bit, to hexsifre er én byte, og fire hexsifre dekker 16 bit.

## EXPLAIN

Toerpotenser knytter sammen bitbredde, verdiområde, minnestørrelse og adresserom. Dette blir et gjennomgående verktøy resten av kurset.

## Sjekk deg selv

1. Hvor mange mønstre finnes med 16 bit?
2. Hva er største unsigned 8-bit-verdi?
3. Hva er forskjellen mellom 1 MiB og 1 MB?
