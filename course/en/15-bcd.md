# BCD — Binary-Coded Decimal

BCD encodes decimal digits individually rather than representing the entire number as one binary integer.

## PREDICT

How can decimal 42 be stored when each decimal digit receives four bits?

## STEP

Packed BCD gives each digit one nibble: `42 -> 0100 0010₂ -> 0x42`. Ordinary binary 42 is instead `00101010₂ = 0x2A`.

Only nibble values 0–9 are normally valid decimal digits. Unpacked BCD commonly gives each digit a whole byte.

BCD has been useful in calculators, clocks, counters, financial systems and historical computers where decimal digits need direct preservation.

## OBSERVE

With four bits per decimal digit, 4 is `0100` and 2 is `0010`. Packed BCD for 42 is therefore `0100 0010₂ = 0x42`.

A byte `0x42` can mean ordinary integer 66 or packed-BCD decimal 42. The format supplies the meaning.

## EXPLAIN

BCD reinforces a central theme: bits need a representation rule before they become a number.

## Check yourself

Encode 1987 as packed BCD and state its storage size.
