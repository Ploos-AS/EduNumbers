# Løsninger: digital elektronikk

1. `10100101₂`; bit 7, 5, 2 og 0 er satt.
2. `1 << 6 = 0x40`.
3. `(1 << 2) | (1 << 5) = 0x24`.
4. 8 bit: 256; 10 bit: 1024; 12 bit: 4096 koder.
5. (512/1023 × 3.3 \approx 1.65\text{ V}). Dette er en idealisert beregning; virkelig ADC-oppførsel må tas fra databladet.
6. Logiske nivåer er elektriske spenningsområder og varierer med teknologi, forsyning og komponentkrav.
7. Write-one-to-clear betyr at et flagg nullstilles ved å skrive 1 til dets bit. En read-modify-write kan derfor utilsiktet skrive 1 tilbake til andre satte flagg og fjerne dem.
8. Blant annet protokoll/feltdefinisjon, feltbredde, byteorden og eventuelt bitrekkefølge/framing.
