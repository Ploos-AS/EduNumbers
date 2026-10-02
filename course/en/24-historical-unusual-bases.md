# Historical and unusual number bases

Binary, octal, decimal and hexadecimal dominate modern computing, but positional notation can use many other bases. Exploring them reinforces that a base is a representation rule rather than a property of the number itself.

## PREDICT

What do you think `10` means in base 3? Write down your answer before continuing.

## STEP — base 3

Base 3 uses digits 0, 1 and 2. For example, `102₃ = 1 × 9 + 0 × 3 + 2 = 11₁₀`.

Ternary systems demonstrate that digital representation is not mathematically restricted to exactly two symbols. Ternary logic has also appeared in computing research and historical machines.

## Base 12

Base 12 requires digit values for ten and eleven in addition to 0–9. In this course we use `A` for ten and `B` for eleven, so `A₁₂ = 10₁₀` and `B₁₂ = 11₁₀`. Twelve has several divisors — 2, 3, 4 and 6 — so some fractions are compact.

One half in base 12 is `0.6₁₂`, because 6/12 = 1/2.

## Base 20

Vigesimal systems use base 20 and occur historically in multiple languages and cultures. For representation, the key point is simple: `10₂₀` means twenty rather than ten.

## Base 36

Base 36 can use 0–9 and A–Z as its 36 digit values. Thus `Z₃₆ = 35₁₀` and `10₃₆ = 36₁₀`.

It can provide compact textual forms for non-negative integers, although a format must define its alphabet and case rules.

## Base 60

Sexagesimal systems have ancient roots. Base-60 structure remains visible in time and angle measurement: 60 seconds per minute, 60 minutes per hour, 60 arcminutes per degree and 60 arcseconds per arcminute.

These conventions are not all simply modern positional base-60 notation, but they illustrate how a numerical subdivision can persist.

## Why divisibility matters

Factors of the base affect which fractions terminate.

In base 10, 1/2 and 1/5 terminate while 1/3 repeats. In base 2, 1/2 terminates but decimal 1/10 does not have a finite binary fractional representation. This connects directly to floating-point behavior.

## Base is not storage width

A base and a storage width are separate concepts. A value displayed as base-36 text may be stored internally as an ordinary binary integer. A byte can likewise be displayed in decimal, hexadecimal or another base without changing its value.

## Historical machines

Computing history includes representations unlike today's most familiar binary conventions. Some machines emphasized decimal arithmetic or used unusual word sizes and character encodings.

Historical data must therefore be interpreted according to the documented representation of the relevant machine rather than modern assumptions.

## OBSERVE

For the prediction, `10₃` means three: `1 × 3¹ + 0 × 3⁰ = 3`.

The notation `10` can represent 2, 3, 8, 10, 12, 16, 20, 36, 60 or another value depending on the base.

## EXPLAIN

A positional system defines digits, positional weights and a radix. The number is the abstract value; the notation is its representation.

## Check yourself

What is `10₁₂` in decimal? What is `Z₃₆`? Why can base 12 express some common fractions more compactly than base 10?
