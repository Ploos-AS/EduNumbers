# Signed integers

Negative integers require an agreed interpretation of bit patterns.

## PREDICT

Can `11111111₂` mean both 255 and −1?

## STEP

**Sign-magnitude** reserves a sign bit and therefore has both +0 and −0.

**Ones' complement** forms a negative value by inverting every bit and also has two zero encodings.

**Two's complement** is the standard modern integer representation. For (n) bits its range is `-2^(n-1) ... 2^(n-1)-1`. Eight bits therefore cover −128 through 127.

## OBSERVE

The same byte `FF₁₆` is 255 as unsigned eight-bit data and −1 as signed eight-bit two's complement.

## EXPLAIN

Meaning requires context: width, signedness and encoding rule. Raw bits do not carry those labels themselves.

## Check yourself

What is the signed 16-bit two's-complement range? Explain the asymmetry around zero.
