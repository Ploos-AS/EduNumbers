# Solutions: debugging and reverse engineering

1. `48 69` is ASCII `Hi`; `00` is a null byte.
2. `0x12345678`.
3. `0x2080 - 0x2000 = 0x80 = 128` bytes.
4. For example ASCII `ABCD`, four 8-bit integers, parts of larger integers, or instruction bytes.
5. A disassembler attempts to decode selected bytes as instructions. Many data streams can accidentally produce valid instruction encodings.
6. The change supports the hypothesis that the field at offset `0x20` represents the counter. We still do not necessarily know its width, signedness, whether it is directly encoded, or whether other values affect it.
7. Several structures can explain one example. Multiple controlled examples can reveal which hypotheses actually hold.
8. One possible hypothesis is type=`01`, flags=`02`, little-endian length=`04 00`, data=`DE AD BE EF`. This remains only one model until the format or further observations confirm it.