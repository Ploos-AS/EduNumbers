# Binary: base 2

Binary uses only 0 and 1. Each position has a power-of-two weight.

## PREDICT

What decimal value does `10110₂` represent?

## STEP

From right to left the weights are 1, 2, 4, 8, 16 and so on. Thus `10110₂ = 16 + 4 + 2 = 22₁₀`.

A binary digit is a **bit**. Eight bits are commonly grouped into a byte. Wider machine values are often described by an explicit bit width.

With `n` bits there are `2ⁿ` possible patterns. Four bits give 16 patterns; eight bits give 256.

## Common misconception

A bit pattern does not have one inherent numeric meaning. `11111111₂` can be 255 as unsigned 8-bit, -1 as signed two's complement, or part of something that is not an integer at all. The representation rule supplies the meaning.

## OBSERVE

Binary makes widths and representation explicit: one more bit doubles the number of available bit patterns.

## EXPLAIN

Binary is useful because digital hardware can reliably distinguish two states. The representation maps naturally to logic levels, registers and memory, but the bit pattern still needs context before it has a numeric meaning.

## Check yourself

Convert `1111₂` and `10000000₂` to decimal. Explain why eight bits provide 256 patterns but the largest unsigned 8-bit value is 255.
