# Octal: base 8

Octal uses digits 0–7. Each octal digit corresponds exactly to three binary bits.

## PREDICT

Translate `111 101 010₂` one three-bit group at a time.

## STEP

Base-8 positions have weights `8⁰`, `8¹`, `8²` and so on. For example, `572₈ = 378₁₀`, and `101 111 010₂ = 572₈`.

Octal remains visible in Unix-style permission notation such as `755`, where each digit summarizes three permission bits.

## OBSERVE

For the prediction, `111₂ = 7₈`, `101₂ = 5₈` and `010₂ = 2₈`, so `111 101 010₂ = 752₈`.

Three bits represent values 0–7, exactly the digit range of octal.

## Common misconception

The value `755` in a Unix file mode is normally read as octal when used as a numeric permission value. It does not mean decimal seven hundred and fifty-five.

## EXPLAIN

Octal does not change the number, only its representation. Its computing value comes from its direct three-bit grouping.

## Check yourself

1. Convert `111111₂` to octal.
2. Convert `17₈` to binary.
3. Why is the digit 8 invalid inside an octal number?
