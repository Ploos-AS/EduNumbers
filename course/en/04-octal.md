# Octal: base 8

Octal uses digits 0–7. Each octal digit corresponds exactly to three binary bits.

## PREDICT

Translate `111 101 010₂` one three-bit group at a time.

## STEP

Base-8 positions have weights `8⁰`, `8¹`, `8²` and so on. For example, `572₈ = 378₁₀`, and `101 111 010₂ = 572₈`.

Octal remains visible in Unix-style permission notation such as `755`, where each digit summarizes three permission bits.

## OBSERVE

Three bits represent values 0–7, exactly the digit range of octal.

## EXPLAIN

Octal does not change the number, only its representation. Its computing value comes from its direct three-bit grouping.

## Check yourself

Convert `111111₂` to octal and `17₈` to binary.
