# Fixed-point and Q formats

Fixed-point represents fractional values using an implied, fixed binary-point position.

## PREDICT

With four integer bits and four fractional bits, what does `00111000₂` represent?

## STEP

Interpreted as `0011.1000₂`, the value is 3.5. The stored integer is 56 and four fractional bits imply division by (2^4=16).

With (f) fractional bits, resolution is (2^{-f}).

Two's-complement signed integers can use the same scaling rule for signed fixed-point values.

## Tradeoffs

Fixed-point offers predictable resolution and efficient arithmetic on systems without fast floating-point hardware, but software must manage scaling, range and overflow explicitly.

## OBSERVE

No physical binary-point symbol is stored. Its location belongs to the format definition.

## EXPLAIN

Fixed-point is scaled integer arithmetic, directly connecting fractional numbers to integer width and overflow.

## Check yourself

What is the resolution with eight fractional bits? Interpret stored integer 384 using that scale.
