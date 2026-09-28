# Solutions: integer representation

1. `2^10 = 1024` patterns: 0–1023.
2. `FE₁₆` is 254 unsigned and −2 signed 8-bit two's complement.
3. +42 is `00101010₂`; invert and add 1 to get `11010110₂ = D6₁₆`.
4. 270 modulo 256 = 14.
5. Carry describes overflow in unsigned arithmetic; signed overflow occurs when the mathematical signed result does not fit the signed range.
6. Two's complement has range −128..127; zero uses one pattern, and the negative half includes minimum value −128.
7. `7F + 01 = 80`. The pattern is −128 signed, while mathematical result +128 is unrepresentable: signed overflow.