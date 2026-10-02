# Two's complement in practice

Two's complement lets binary addition hardware operate naturally on positive and negative integers.

## PREDICT

How can `11111011₂` represent −5?

## STEP

To encode −5 in eight bits, write +5 as `00000101`, invert the bits to `11111010`, then add one to obtain `11111011` or `FB₁₆`.

For an `n`-bit pattern whose top bit is one, another interpretation method is unsigned-value minus `2ⁿ`: `251 - 256 = -5`.

## Addition

`00000101 + 11111011 = 1 00000000`. Discarding the carry beyond eight bits leaves zero.

## The minimum-value edge case

Negation is invert-plus-one, but signed eight-bit −128 has no representable +128 counterpart. Code must account for this boundary case.

## OBSERVE

Carry and signed overflow answer different questions, so CPUs may expose separate flags for them.

## EXPLAIN

Two's complement is naturally understood as modulo-`2ⁿ` arithmetic plus a signed interpretation of the bit patterns.

## Check yourself

Encode −1, −42 and −128 as eight-bit hexadecimal. Interpret `80₁₆` as both unsigned and signed.
