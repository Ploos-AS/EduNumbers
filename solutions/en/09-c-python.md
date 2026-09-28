# Solutions: numbers in C and Python

1. `0b10101101` and `0xAD`.
2. Python `int` can grow beyond a fixed machine width; `uint8_t`, where provided, represents values 0–255.
3. 0.
4. `0x0B`.
5. It sets bit 7 to 1 while leaving the other bits at their previous values.
6. `int("11110000", 2)`, producing 240.
7. `f"{10:08b}"`, producing `00001010`.
8. C does not define signed integer overflow as ordinary modulo wraparound. Code requiring explicit modulo behavior should use a suitable unsigned representation or another defined method.