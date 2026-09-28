# Solutions: BCD, fixed-point, and floating-point

1. `20 26` in packed BCD: nibbles 2,0,2,6.
2. Ordinary binary `0x99 = 9×16+9 = 153`; BCD interprets the nibbles separately as decimal digits 9 and 9.
3. `0101.1000₂ = 5.5`.
4. `2^-10 = 1/1024`.
5. `-320/256 = -1.25`.
6. Sign, exponent, and fraction/significand field.
7. Denominator 10 contains factor 5; a finite base-2 fraction can only express fractions whose reduced denominator is a power of two.
8. NaN represents, among other things, undefined or invalid floating-point results and can propagate through later calculations.