# Hexadecimal: base 16

Hexadecimal uses 0–9 and A–F. One hexadecimal digit corresponds exactly to four binary bits.

## PREDICT

What binary pattern is represented by `A5₁₆`?

## STEP

`A = 10`, `B = 11`, through `F = 15`. Therefore `A5₁₆ = 10×16 + 5 = 165₁₀`.

Using four-bit groups:

`A5₁₆ = 1010 0101₂`.

Programming languages commonly use the `0xA5` notation. Assemblers and debuggers may also use forms such as `$A5` or an `h` suffix.

## OBSERVE

Two hex digits represent one byte. This makes hex especially convenient for memory dumps, addresses, machine code and bit masks.

## EXPLAIN

Hex is compact binary notation. Learning the 16 four-bit patterns removes much of the friction from low-level computing.

## Check yourself

Convert `FF₁₆` to binary and decimal.
