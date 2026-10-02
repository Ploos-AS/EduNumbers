# Powers of two

Computing repeatedly uses quantities of the form `2ⁿ`. Knowing common powers of two makes addresses, bit masks and capacities easier to read.

Here `n` tells us how many factors of 2 are multiplied together. For example, `2³ = 2 × 2 × 2 = 8`.

## PREDICT

How many distinct values can eight bits represent?

## STEP

Useful landmarks are:

| n | 2ⁿ |
|---:|---:|
| 0 | 1 |
| 1 | 2 |
| 2 | 4 |
| 3 | 8 |
| 4 | 16 |
| 8 | 256 |
| 10 | 1024 |
| 16 | 65536 |
| 20 | 1048576 |
| 32 | 4294967296 |

With `n` bits there are `2ⁿ` bit patterns. Eight bits therefore provide 256 patterns, representing 0 through 255 when interpreted as unsigned.

## KiB and kB

`1 KiB = 1024 bytes`, while the SI quantity `1 kB = 1000 bytes`. MiB and GiB are corresponding binary prefixes.

## Common misconception

`2⁸ = 256` means that eight bits provide 256 different patterns. It does not mean that the largest unsigned value is 256. Counting starts at zero, so the largest value is 255.

## OBSERVE

Eight bits form `2⁸ = 256` distinct bit patterns and can therefore represent 256 distinct values once an interpretation is chosen.

One hexadecimal digit is four bits, two hexadecimal digits are one byte, and four hexadecimal digits span 16 bits.

## EXPLAIN

Powers of two connect bit width, ranges, memory sizes and address spaces.

## Check yourself

1. How many patterns fit in 16 bits?
2. What is the largest unsigned 8-bit value?
3. What is the difference between 1 MiB and 1 MB?
