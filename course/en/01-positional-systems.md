# Positional systems and bases

In a positional numeral system, a digit's value depends on both the digit and its position.

Decimal `347` means `3 × 10² + 4 × 10¹ + 7 × 10⁰`.

Binary `1011₂` means `1 × 2³ + 0 × 2² + 1 × 2¹ + 1 × 2⁰ = 11`.

## Base

The base tells us how many different digits are used before another position is needed.

| Base | Name | Digits |
|---:|---|---|
| 2 | binary | 0–1 |
| 8 | octal | 0–7 |
| 10 | decimal | 0–9 |
| 16 | hexadecimal | 0–9, A–F |

Programming languages often use prefixes such as `0b1011` for binary and `0x2A` for hexadecimal. Exact syntax varies between languages and assemblers.

## PREDICT

What does `10` mean in base 2, base 8 and base 16?

## STEP

In any base `b`, the notation `10` has the value `1 × b¹ + 0 × b⁰`.

## OBSERVE

Therefore:

- `10₂ = 2₁₀`
- `10₈ = 8₁₀`
- `10₁₆ = 16₁₀`

## EXPLAIN

The digit sequence alone is not enough. You must also know which base is being used.