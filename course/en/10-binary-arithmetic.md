# Binary arithmetic and CPU flags

Binary addition follows ordinary positional arithmetic with only two digits.

## PREDICT

What is `1111₂ + 0001₂` in a four-bit register?

## STEP

`1+1=10₂`, producing a carry. Thus `1111 + 0001 = 1 0000`. Keeping four result bits gives zero while the carry records unsigned overflow beyond the width.

Subtraction can use borrow directly or addition of a two's-complement negative operand.

## CPU flags

Common flags include **C** carry, **Z** zero, **N** negative/top-bit state, and **V** signed overflow.

For signed eight-bit arithmetic, `7F₁₆ + 01₁₆ = 80₁₆`. The mathematical +128 cannot be represented, so CPUs with an overflow flag report that condition.

## OBSERVE

Carry and signed overflow answer different questions about the same bit-level result.

## EXPLAIN

Flags allow later instructions to branch, compare and extend arithmetic without recomputing the operation.

## Check yourself

Compute `FF₁₆ + 01₁₆` and discuss C, Z and V for eight-bit arithmetic.
