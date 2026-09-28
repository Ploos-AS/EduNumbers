# Exercises: networking and file formats

1. Write `0xCAFE` as two bytes in big- and little-endian.
2. Write IPv4 address `10.0.0.42` as four hex bytes.
3. How many bits and bytes are in a conventional 48-bit MAC address?
4. A big-endian 16-bit field contains `01 F4`. What is its decimal value?
5. In record `02 02 BE EF 48 69`, byte 0 is version, byte 1 length, bytes 2–3 a big-endian ID, and the rest payload. Interpret it.
6. A field starts at offset 8 and is 4 bytes long. Which offsets does it use, and where does the next field begin?
7. Why can the same hex dump have different interpretations?
8. Why should a parser validate more than a file signature?