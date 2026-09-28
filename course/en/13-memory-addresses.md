# Memory, addresses and offsets

Memory can be modeled as a sequence of addressable bytes. An address identifies a location; a value may occupy one or several consecutive bytes.

## PREDICT

If a 32-bit value starts at address `0x1000`, which byte addresses does it occupy?

## STEP

In byte-addressable memory the address normally increases by one per byte: `0x1000`, `0x1001`, `0x1002`, `0x1003`. A 32-bit value occupies four bytes.

An **offset** is a displacement relative to a base address. Base `0x2000` plus offset `0x34` gives `0x2034`.

With (n) address bits, (2^n) address patterns exist. On a byte-addressed system, 16 address bits can identify 65,536 byte locations.

## Alignment

Architectures may prefer or require multi-byte values to begin at particular address boundaries. A 32-bit value may be naturally aligned at an address divisible by four.

## OBSERVE

Hexadecimal maps cleanly to address bits: a 16-bit address is four hex digits from `0000` through `FFFF`.

## EXPLAIN

Debugger and hex-editor displays require you to distinguish the address of data from the value stored there.

## Check yourself

Which addresses are occupied by a 16-byte block beginning at `0x3FF0`? Compute base `0x8000` plus offset `0x2A`.
