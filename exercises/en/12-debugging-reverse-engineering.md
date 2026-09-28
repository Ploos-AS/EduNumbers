# Exercises: debugging and reverse engineering

1. Interpret `48 69 00` as ASCII where possible.
2. Interpret `78 56 34 12` as a 32-bit little-endian integer.
3. A buffer starts at `0x2000` and ends just before `0x2080`. How large is it?
4. Name three possible explanations for bytes `41 42 43 44`.
5. Why does a disassembler listing not prove that a region is code?
6. Two nearly identical test files differ only at byte `0x20`, changing from `04` to `05` when a counter increases from 4 to 5. What may we tentatively infer, and what remains unknown?
7. Why is a field value fitting one dump insufficient to establish a file format?
8. Propose a field layout for `01 02 04 00 DE AD BE EF`, clearly marking hypotheses.