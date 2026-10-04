# Fixed-point and Q formats

Fixed-point represents fractional values using an implied, fixed binary-point position.

## PREDICT

With four integer bits and four fractional bits, what does `00111000₂` represent?

## STEP

Interpreted as `0011.1000₂`, the value is 3.5. The stored integer is 56 and four fractional bits imply division by `2⁴ = 16`.

With `f` fractional bits, the resolution is `1 / 2^f`.

## Signed fixed-point

Two's-complement can be combined with a fixed binary point. Interpret the bit pattern as a signed integer first, then scale it by `1 / 2^f`.

## Advantages and limitations

Fixed-point offers predictable resolution and efficient arithmetic on systems without fast floating-point hardware, but software must manage scaling, range and overflow explicitly.

## OBSERVE

With four fractional bits, place the binary point after the upper four bits: `0011.1000₂ = 3 + 1/2 = 3.5`.

No physical binary-point symbol is stored. Its location belongs to the format definition.

## EXPLAIN

Fixed-point is scaled integer arithmetic, directly connecting fractional numbers to integer width and overflow.

## Check yourself

What is the resolution with eight fractional bits? Interpret stored integer 384 using that scale.
