# Solutions: networking and file formats

1. Big-endian: `CA FE`. Little-endian: `FE CA`.
2. `0A 00 00 2A`.
3. 48 bits = 6 bytes.
4. `0x01F4 = 500`.
5. Version 2, payload length 2, ID `0xBEEF`, payload `48 69`, which is ASCII `Hi`.
6. Offsets 8, 9, 10, and 11. The next field starts at offset 12.
7. Bytes do not have complete semantics by themselves; the format/protocol determines field division, type, width, byte order, and meaning.
8. A signature identifies only characteristic bytes. Lengths, structures, field values, and remaining content may still be invalid or truncated.