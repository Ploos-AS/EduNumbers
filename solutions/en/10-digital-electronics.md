# Solutions: digital electronics

1. `10100101₂`; bits 7, 5, 2, and 0 are set.
2. `1 << 6 = 0x40`.
3. `(1 << 2) | (1 << 5) = 0x24`.
4. 8 bit: 256; 10 bit: 1024; 12 bit: 4096 codes.
5. `512/1023 × 3.3 ≈ 1.65 V`. This is idealized; actual ADC behavior must come from the datasheet.
6. Logic levels are electrical voltage ranges and vary with technology, supply, and component requirements.
7. Write-one-to-clear means a flag is cleared by writing 1 to its bit. A read-modify-write can unintentionally write 1 back to other set flags and clear them.
8. Among other things: protocol/field definition, field width, byte order, and possibly bit order/framing.