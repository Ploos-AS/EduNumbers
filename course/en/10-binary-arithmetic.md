# Binary arithmetic and CPU flags

Binary addition follows ordinary positional arithmetic with only two digits.

## PREDICT

What is `1111₂ + 0001₂` in a four-bit register?

## STEP

`1+1=10₂`, producing a carry. Thus `1111 + 0001 = 1 0000`. Keeping four result bits gives zero while the carry records unsigned overflow beyond the width.

Subtraction can use borrow directly or addition of a two's-complement negative operand.

## CPU flags

Many CPUs record properties of the result. Common flags include:

- **C / Carry**: carry out of the top bit; relevant to unsigned arithmetic.
- **Z / Zero**: the result is zero.
- **N / Negative**: often follows the top bit of the result.
- **V / Overflow**: the signed result cannot be represented in the selected width.

For signed eight-bit arithmetic, `7F₁₆ + 01₁₆ = 80₁₆`. The mathematical +128 cannot be represented, so CPUs with an overflow flag report that condition.

## Common misconception

Flag names and exact behavior are not identical across CPU architectures. The instruction-set documentation defines which flags an instruction changes and what they mean there.

Carry and signed overflow are also different conditions: an operation can set one without setting the other.

## OBSERVE

With only four bits, `1111₂ + 0001₂ = 1 0000₂`. The register retains the low four bits `0000₂`, while the fifth bit is the carry out.

Carry and signed overflow answer different questions about the same bit-level result.

## EXPLAIN

Flags allow later instructions to branch, compare and extend arithmetic without recomputing the operation.

## Check yourself

Compute `FF₁₆ + 01₁₆` and discuss C, Z and V for eight-bit arithmetic.
