# Converting between bases

Conversion changes representation while preserving value.

## PREDICT

Are `1010₂`, `12₈`, `10₁₀` and `A₁₆` different numbers?

## STEP

To convert to decimal, sum each digit times its positional weight: `2D₁₆ = 2×16 + 13 = 45₁₀`.

To convert a decimal integer to another base, repeatedly divide by the target base and read the remainders in reverse.

Binary provides a convenient bridge. Group four bits for hexadecimal and three bits for octal:

`0010 1101₂ = 2D₁₆`

`101 101₂ = 55₈`

## OBSERVE

The value remains unchanged throughout. Only the symbols and positional weights differ.

## EXPLAIN

Conversion becomes much faster once common binary, octal and hexadecimal patterns are recognized directly.

## Check yourself

Convert `42₁₀` to binary and hex, and `FF₁₆` to decimal.
