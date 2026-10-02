# Floating-point and IEEE 754

Floating-point stores a significand together with an exponent so the binary point can effectively move.

## PREDICT

How can the same 32-bit format cover both very large and very small magnitudes?

## STEP

IEEE 754 binary32 contains one sign bit, eight exponent bits and 23 explicit fraction bits. Normal values conceptually follow `(-1)^sign × significand × 2^exponent`; the exponent uses a bias and the leading one of a normal binary significand is implicit.

IEEE 754 also defines signed zeros, infinities, NaNs and subnormal values.

## Worked example: `1.0 = 0x3F800000`

The binary32 pattern `0x3F800000` is:

`0 01111111 00000000000000000000000`

- sign = 0, so the value is positive
- stored exponent = 127; with bias 127 the actual exponent is `127 − 127 = 0`
- the fraction field is zero, so the significand is `1.0₂`

The value is therefore `(+1) × 1.0₂ × 2⁰ = 1.0`.

## From a decimal fraction to a binary fraction

A fraction can be converted by repeatedly multiplying its fractional part by 2 and recording the integer part:

- `0.5 × 2 = 1.0` → the first bit is 1, so `0.5₁₀ = 0.1₂`
- `0.25 × 2 = 0.5`, then `0.5 × 2 = 1.0` → `0.25₁₀ = 0.01₂`

For `0.1₁₀`, the process does not terminate: the bit pattern repeats. There is therefore no finite binary fraction exactly equal to one tenth.

## Why 0.1 + 0.2?

One tenth has no finite binary fractional expansion, just as one third has no finite decimal expansion. It must be rounded to a representable binary floating-point value. Arithmetic on rounded operands can therefore differ slightly from ideal decimal arithmetic. In ordinary binary64 arithmetic, for example, `0.1 + 0.2` is typically represented as approximately `0.30000000000000004`, not exactly `0.3`.

## Precision and range

Exponent bits provide range while significand bits provide precision. Floating-point is a controlled compromise, not arbitrary-precision real arithmetic.

## OBSERVE

`0x3F800000` demonstrates concretely how the sign, exponent and fraction fields combine to produce 1.0. The 0.1 example also shows why not every decimal fraction can be stored exactly.

A floating-point bit pattern cannot be interpreted as an ordinary integer while preserving its numerical meaning; the field structure defines the representation.

## EXPLAIN

IEEE 754 standardizes behavior, but programs still need to account for rounding, special values and comparisons.

## Check yourself

Why is exact floating-point equality often more subtle than integer equality?
