# Løsninger: nettverk og filformater

1. Big-endian: `CA FE`. Little-endian: `FE CA`.
2. `0A 00 00 2A`.
3. 48 bit = 6 byte.
4. `0x01F4 = 500`.
5. Versjon 2, payload-lengde 2, ID `0xBEEF`, payload `48 69`, som i ASCII er `Hi`.
6. Offset 8, 9, 10 og 11. Neste felt starter ved offset 12.
7. Byte har ikke komplett semantikk alene; format/protokoll bestemmer feltdeling, type, bredde, byteorden og mening.
8. En signatur identifiserer bare noen karakteristiske byte. Lengder, strukturer, feltverdier og resten av innholdet kan fortsatt være ugyldig eller avkortet.
