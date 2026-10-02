# Sluttprosjekt — kontrollpunkter

1. Bufferen dekker offset `0x00` til `0x17`.
2. `45 4E 55 4D` gir `ENUM`; `50 4C 4F 4F 53` gir `PLOOS`.
3. `0xA5 = 10100101₂`; bit 7, 5, 2 og 0 er satt.
4. Little-endian: `0x0010 = 16`. Big-endian: `0x1000 = 4096`.
5. `0x1234 = 4660`.
6. Unsigned: 65534. Signed toerkomplement: −2.
7. `0x12345678 = 305419896`.
8. Sammenlign med feltkartet i kapittel 25. Viktigere enn identisk navnsetting er at offset, bredde, byteorden og tolkning er begrunnet.
9. Et eksempel er å tolke `10 00` som big-endian 4096. Det passer dårlig som en lokal lengde i en komplett buffer på 24 byte og er mindre konsistent med de andre flerbytefeltene.
10. Programmet bør bruke eksplisitt byteorden og eksplisitt signedness der det er relevant, slik at representasjonsvalgene er synlige i koden.
