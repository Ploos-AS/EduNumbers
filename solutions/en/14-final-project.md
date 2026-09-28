# Final project — checkpoints

1. The buffer covers offsets `0x00` through `0x17`.
2. `45 4E 55 4D` gives `ENUM`; `50 4C 4F 4F 53` gives `PLOOS`.
3. `0xA5 = 10100101₂`; bits 7, 5, 2, and 0 are set.
4. Little-endian: `0x000C = 12`. Big-endian: `0x0C00 = 3072`.
5. `0x1234 = 4660`.
6. Unsigned: 65534. Signed two's complement: −2.
7. `0x12345678 = 305419896`.
8. Compare with the field map in chapter 25. More important than identical naming is justified offset, width, byte order, and interpretation.
9. One example is interpreting `0C 00` as big-endian 3072. That fits poorly as a local length in a complete 24-byte buffer and is less consistent with the other multibyte fields.
10. The program should use explicit byte order and signedness where relevant, making representation choices visible in the code.