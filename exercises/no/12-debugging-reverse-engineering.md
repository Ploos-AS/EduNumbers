# Øvelser: debugging og reverse engineering

1. Tolk `48 69 00` som ASCII der det er mulig.
2. Tolk `78 56 34 12` som et 32-bit little-endian heltall.
3. En buffer starter på `0x2000` og slutter rett før `0x2080`. Hvor stor er den?
4. Nevn tre mulige forklaringer på bytefølgen `41 42 43 44`.
5. Hvorfor beviser ikke en disassembler-listing at et område er kode?
6. To nesten identiske testfiler skiller seg bare ved at byte `0x20` endres fra `04` til `05` når en teller økes fra 4 til 5. Hva kan vi foreløpig anta, og hva vet vi fortsatt ikke?
7. Hvorfor er en feltverdi som passer én dump ikke nok til å fastslå et filformat?
8. Lag en mulig feltinndeling for `01 02 04 00 DE AD BE EF`, men marker tydelig hvilke deler som er hypotese.
