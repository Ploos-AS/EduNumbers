# Bitwise operations

Bitwise operations process corresponding bits independently.

## PREDICT

What is `1010 AND 1100`?

## STEP

**AND** requires both bits to be one. **OR** requires at least one. **XOR** is one when the bits differ. **NOT** inverts every bit.

For `A=1010₂`, `B=1100₂`: AND gives `1000`, OR `1110`, XOR `0110`, and four-bit NOT A gives `0101`.

Logical shifts move bits and fill with zero. Arithmetic right shift commonly preserves the sign bit. Rotates wrap bits around instead of discarding them; rotate-through-carry also includes the carry flag.

## OBSERVE

For the prediction, compare corresponding bits: `1010 AND 1100 = 1000`.

Width is essential: NOT zero has a different numerical result at 8 and 16 bits.

## EXPLAIN

These operations underpin register manipulation, protocols, graphics, compression and many low-level algorithms.

## Check yourself

Compute AND, OR and XOR for `3C₁₆` and `0F₁₆`.
