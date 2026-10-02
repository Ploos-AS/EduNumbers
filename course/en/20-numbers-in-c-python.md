# Numbers in C and Python

C and Python can express the same binary and hexadecimal values, but their integer models differ substantially.

## PREDICT

Will `255 + 1` always behave the same way in C and Python?

## STEP — literals

Hexadecimal and decimal literals such as `0x2A` and `42` work the same way in both languages. Binary literals such as `0b101010` are supported in Python and, from C23, in C (many compilers, including GCC and Clang, have long accepted them as an extension). In C, language type and literal rules determine the resulting type. Python `int` is not confined to a fixed 8-, 16-, 32- or 64-bit width.

## C: explicit widths

When machine width matters, `<stdint.h>` provides types such as `uint8_t`, `uint16_t` and `int32_t` when the implementation has suitable exact-width integer types.

Unsigned C arithmetic wraps modulo `2ⁿ` for the type width. Do not assume the same rule for signed overflow; signed integer overflow is not defined by C as ordinary two's-complement wraparound.

## Python: arbitrary-size integers

Python integers grow as required within practical resource limits. To model an 8-bit register explicitly, impose a width:

```python
x = (255 + 1) & 0xFF
```

The result is zero.

## Shifts, masks, parsing and formatting

Bitwise operations look familiar in both languages, but type widths, promotions and negative-value behavior require language-specific care.

Python can parse bases with `int(text, base)` and format values with forms such as `f"{42:08b}"` and `f"{42:02X}"`.

C offers conversion routines such as `strtoul`; portable formatting of fixed-width integers can use the macros in `<inttypes.h>`.

## OBSERVE

No. The result depends on type and language rules. Python integers normally grow as needed, while arithmetic involving bounded C integer types follows different rules. Both the type and language semantics matter.

The source literal `0xFF` is a numeric value. Storing or interpreting it as an 8-bit signed value, 8-bit unsigned value or wider type is a separate operation.

## EXPLAIN

Programming languages add rules on top of bit representations. Reliable low-level code requires understanding both the machine model and the language model.

## Check yourself

Why does `(255 + 1) & 0xFF` produce zero in Python? Why should signed C overflow not be assumed to work the same way?
