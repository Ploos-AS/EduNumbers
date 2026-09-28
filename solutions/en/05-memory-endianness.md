# Solutions: memory and endianness

1. Eight bytes: `0x2008` through `0x200F`.
2. `0x41A7`.
3. `2^20 = 1,048,576` byte addresses, or 1 MiB of byte-addressable space.
4. `CA FE BA BE`.
5. `BE BA FE CA`.
6. Little-endian: `0x1234 = 4660`. Big-endian: `0x3412 = 13330`.
7. You lack, among other things, type, width, signedness, byte order, and possible format structure.
8. Alignment describes where a value lies relative to address boundaries; endianness describes the byte order of a multibyte value.