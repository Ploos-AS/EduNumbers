# Unsigned integers

An **unsigned** integer uses every bit to represent a non-negative magnitude.

## PREDICT

What is the largest value that fits in eight bits?

## STEP

With `n` bits there are `2ⁿ` patterns, giving the unsigned range `0 ... 2ⁿ − 1`.

Examples:

| Width | Range |
|---:|---:|
| 8 bits | 0–255 |
| 16 bits | 0–65,535 |
| 24 bits | 0–16,777,215 |
| 32 bits | 0–4,294,967,295 |

`11111111₂ = FF₁₆ = 255₁₀` when interpreted as unsigned eight-bit data.

## Overflow and wraparound

Fixed-width arithmetic cannot represent every integer. Under modulo-`2ⁿ` arithmetic, keeping only eight bits makes `255 + 1` wrap to 0.

## Common misconception

Eight bits provide 256 possible patterns, but the unsigned range is 0–255 because zero consumes one of those patterns.

## OBSERVE

For an unsigned 8-bit integer, the maximum is `2⁸ − 1 = 255`, or `11111111₂ = FF₁₆`.

The bits alone do not say “unsigned”. Their interpretation depends on the type and width supplied by context.

## EXPLAIN

Width and interpretation matter when reading registers, protocols, file formats and machine code.

## Check yourself

Find the range of a 12-bit unsigned integer and compute `250 + 10` with eight-bit wraparound.
