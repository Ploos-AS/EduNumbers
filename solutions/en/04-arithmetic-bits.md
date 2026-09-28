# Solutions: arithmetic and bit operations

1. `A7 + 6D = 114₁₆`; the 8-bit result is `14₁₆`, carry = 1.
2. `64₁₆=100`, `32₁₆=50`; mathematical result 150 does not fit int8. The result pattern is `96₁₆`, and signed overflow occurs.
3. `55 XOR FF = AA₁₆`.
4. `A5 AND 0F = 05₁₆`.
5. Left: `01101100₂`; logical right: `00011011₂`.
6. `10010010₂ = 92₁₆`.
7. OR with `10₁₆`; AND with the complement of `02₁₆`; AND with `80₁₆` and test for a nonzero result.
8. NOT inverts every bit in the chosen representation, so bit width determines both the resulting pattern and numeric value.