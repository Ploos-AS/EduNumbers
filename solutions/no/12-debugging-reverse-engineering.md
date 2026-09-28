# Løsninger: debugging og reverse engineering

1. `48 69` er ASCII `Hi`; `00` er en nullbyte.
2. `0x12345678`.
3. `0x2080 - 0x2000 = 0x80 = 128` byte.
4. For eksempel ASCII `ABCD`, fire 8-bit heltall, deler av større heltall eller instruksjonsbyte.
5. En disassembler forsøker å dekode de valgte bytene som instruksjoner. Mange datastrømmer kan tilfeldigvis gi gyldige instruksjonskodinger.
6. Endringen støtter hypotesen om at feltet ved offset `0x20` representerer telleren. Vi vet ennå ikke nødvendigvis feltbredde, signedness, om verdien er direkte kodet eller om andre verdier påvirker feltet.
7. Flere forskjellige strukturer kan forklare ett eksempel. Flere kontrollerte eksempler kan avsløre hvilke hypoteser som faktisk holder.
8. Én mulig hypotese er type=`01`, flagg=`02`, little-endian lengde=`04 00`, data=`DE AD BE EF`. Dette er bare én mulig modell inntil formatet eller flere observasjoner bekrefter den.
