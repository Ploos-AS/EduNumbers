# Final project: analyze an unknown byte buffer

This project combines the ideas from EduNumbers. You will use representation, byte order, signedness, bit fields, text and structure to explain a synthetic unknown buffer.

## The task

```text
0000: 45 4E 55 4D 01 A5 10 00 34 12 FE FF 50 4C 4F 4F
0010: 53 00 00 00 78 56 34 12
```

You initially know only that the format was created for this exercise, every field starts on a byte boundary, and the buffer is complete.

## PREDICT

Before calculating, identify regions that look like text, flags or possible little-endian integers. Record hypotheses first.

## STEP — build evidence

The first four bytes decode as ASCII `ENUM`, making them a strong signature candidate.

Byte `0x01` at offset `0x04` is plausible as a version. Byte `0xA5` at `0x05` is `10100101₂`, with bits 7, 5, 2 and 0 set.

Bytes `10 00` become 16 as little-endian 16-bit; as big-endian they would be 4096. Since the complete buffer contains 16 bytes after its eight-byte header, 16 is a plausible length, while `34 12` becomes `0x1234 = 4660`.

Bytes `FE FF` become 65534 unsigned or -2 as signed 16-bit two's complement. The bits alone do not specify signedness.

Bytes `50 4C 4F 4F 53 00 00 00` resemble an eight-byte null-padded ASCII field containing `PLOOS`.

Finally, `78 56 34 12` becomes `0x12345678` as little-endian. Multiple consistent fields strengthen the little-endian hypothesis.

## A consistent structure

| Offset | Size | Possible field | Interpretation |
|---|---:|---|---|
| 0x00 | 4 | magic | ASCII `ENUM` |
| 0x04 | 1 | version | 1 |
| 0x05 | 1 | flags | `0xA5` |
| 0x06 | 2 | length | 16, little-endian |
| 0x08 | 2 | id | `0x1234` |
| 0x0A | 2 | delta | -2 signed |
| 0x0C | 8 | name | `PLOOS`, null-padded |
| 0x14 | 4 | value | `0x12345678` |

For this synthetic exercise that is the intended structure. In real reverse engineering, more samples or documentation would be required before treating such a model as established fact.

## Verify with code

```python
data = bytes.fromhex(
    "45 4E 55 4D 01 A5 10 00 34 12 FE FF "
    "50 4C 4F 4F 53 00 00 00 78 56 34 12"
)

length = int.from_bytes(data[6:8], "little")
ident = int.from_bytes(data[8:10], "little")
delta = int.from_bytes(data[10:12], "little", signed=True)
value = int.from_bytes(data[20:24], "little")

print(length, ident, delta, hex(value))
```

Expected output is `16 4660 -2 0x12345678`.

## OBSERVE

The initial hypotheses can now be checked against the evidence: `ENUM` is the intended signature, `0xA5` is the flags field, and the multi-byte numeric fields consistently use little-endian order. The length value 16 also matches the 16 bytes following the eight-byte header.

The bytes never changed. What changed was the interpretation attached to them.

## EXPLAIN

Numbers and bytes provide values and bit patterns. Radix, signedness, byte order, text encoding and field structure are representation rules that give those patterns meaning.

## Deliverable

Produce an annotated dump, field map, integer calculations, decoded flag bits, signed interpretation, text interpretation, byte-order argument, at least one rejected alternative hypothesis and a small verification program.
