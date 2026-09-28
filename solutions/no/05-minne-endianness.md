# Løsninger: minne og endianness

1. Åtte byte: `0x2008` til og med `0x200F`.
2. `0x41A7`.
3. (2^{20}=1,048,576) byteadresser, altså 1 MiB adresserbart byteområde.
4. `CA FE BA BE`.
5. `BE BA FE CA`.
6. Little-endian: `0x1234 = 4660`. Big-endian: `0x3412 = 13330`.
7. Du mangler blant annet type, bredde, signedness, byteorden og eventuell formatstruktur.
8. Alignment beskriver hvor en verdi ligger i forhold til adressegrenser; endianness beskriver rekkefølgen på byte som utgjør flerbyteverdien.
