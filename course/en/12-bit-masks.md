# Bit masks and bit fields

A bit mask selects particular bits while leaving neighboring bits available for other meanings.

## PREDICT

How can bit 0 be set in `10100100₂` without changing the other bits?

## STEP

With `MASK=00000001₂`: set using OR, clear using AND with NOT MASK, toggle using XOR, and test using AND.

Fields spanning several bits can be isolated with a mask and shifted down before interpretation.

Suppose bit 7 means ENABLE, bit 3 IRQ and bit 0 READY. Then `10001001₂` carries three independent Boolean flags in one byte.

## OBSERVE

Set bit 0 by OR-ing with `00000001₂`: `10100100₂ OR 00000001₂ = 10100101₂`. The other bits are unchanged.

Hex makes masks compact: `11110000₂ = F0₁₆`, while `00001111₂ = 0F₁₆`.

## EXPLAIN

Bit fields efficiently pack small values, and masks let software manipulate one field without damaging the rest.

## Check yourself

Create a mask selecting bits 2 and 5, then show how to toggle bit 5 in `34₁₆`.
