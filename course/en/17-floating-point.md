# Floating-point and IEEE 754

Floating-point stores a significand together with an exponent so the binary point can effectively move.

## PREDICT

How can the same 32-bit format cover both very large and very small magnitudes?

## STEP

IEEE 754 binary32 contains one sign bit, eight exponent bits and 23 explicit fraction bits. Normal values conceptually follow `(-1)^sign × significand × 2^exponent`; the exponent uses a bias and the leading one of a normal binary significand is implicit.

IEEE 754 also defines signed zeros, infinities, NaNs and subnormal values.

## Why 0.1 + 0.2?

One tenth has no finite binary fractional expansion, just as one third has no finite decimal expansion. It must be rounded to a representable binary floating-point value. Arithmetic on rounded operands can therefore differ slightly from ideal decimal arithmetic.

## Precision and range

Exponent bits provide range while significand bits provide precision. Floating-point is a controlled compromise, not arbitrary-precision real arithmetic.

## OBSERVE

A floating-point bit pattern cannot be interpreted as an ordinary integer while preserving its numerical meaning; the field structure defines the representation.

## EXPLAIN

IEEE 754 standardizes behavior, but programs still need to account for rounding, special values and comparisons.

## Check yourself

Why is exact floating-point equality often more subtle than integer equality?
