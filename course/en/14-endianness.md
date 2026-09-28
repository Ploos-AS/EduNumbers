# Endianness

Endianness describes the byte order used to store a multi-byte value. It does not change the numerical value itself.

## PREDICT

How can `0x12345678` occupy four bytes beginning at `0x1000`?

## STEP

Big-endian stores the most significant byte first: `12 34 56 78` at increasing addresses.

Little-endian stores the least significant byte first: `78 56 34 12`.

The bit notation inside each normally written byte is not reversed. Here, endianness is about ordering bytes of a multi-byte value.

The Motorola 68000 family is associated with big-endian storage, while x86 uses little-endian. Protocols and file formats can define byte order independently of the host CPU.

## Memory dumps

A dump showing `78 56 34 12` can encode the 32-bit number `0x12345678` when the format specifies little-endian. Raw bytes need width, type and byte-order context.

## OBSERVE

A hex dump normally displays bytes in increasing memory-address order, which need not match the written digit order of a multi-byte number.

## EXPLAIN

Endianness matters when exchanging data among CPUs, networks, binary files, emulators and debugging tools.

## Check yourself

Write `0xA1B2C3D4` as four bytes in both big- and little-endian order.
