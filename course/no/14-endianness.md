# Endianness

Endianness beskriver rekkefølgen byte fra en flerbyteverdi lagres i minnet. Det endrer ikke selve tallets verdi.

## PREDICT

Hvordan kan verdien `0x12345678` ligge i fire byte fra adresse `0x1000`?

## STEP

I **big-endian** lagres mest signifikante byte først:

| Adresse | Byte |
|---|---|
| 0x1000 | 12 |
| 0x1001 | 34 |
| 0x1002 | 56 |
| 0x1003 | 78 |

I **little-endian** lagres minst signifikante byte først:

| Adresse | Byte |
|---|---|
| 0x1000 | 78 |
| 0x1001 | 56 |
| 0x1002 | 34 |
| 0x1003 | 12 |

## Viktig skille

Bitrekkefølgen inne i den vanlige skriftlige byteverdien snus ikke. Endianness handler her om rekkefølgen på byte i en flerbyteverdi.

Motorola 68000-familien forbindes med big-endian, mens x86 bruker little-endian. Protokoller kan definere sin egen byteorden uavhengig av CPU-en.

## Memory dump

Ser du bytefølgen `78 56 34 12`, kan den være 32-bitverdien `0x12345678` dersom formatet sier little-endian. Uten type, bredde og byteorden er rå byte tvetydige.

## OBSERVE

For forutsigelsen kan `0x12345678` ligge som `12 34 56 78` i big-endian eller `78 56 34 12` i little-endian fra den laveste adressen. Byteorden er en del av representasjonen.

En hex-dump viser byte i stigende minneadresse, ikke nødvendigvis sifrene i den rekkefølgen vi skriver den numeriske verdien.

## EXPLAIN

Endianness blir viktig når data flyttes mellom CPU-er, nettverk, binærfiler, emulatorer og debuggerverktøy.

## Sjekk deg selv

Skriv `0xA1B2C3D4` som fire byte i big- og little-endian.
