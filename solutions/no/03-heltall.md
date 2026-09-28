# Løsninger: heltallsrepresentasjon

1. (2^{10}=1024) mønstre: 0–1023.
2. `FE₁₆` er 254 unsigned og −2 signed 8-bit toerkomplement.
3. +42 er `00101010₂`; inverter + 1 gir `11010110₂ = D6₁₆`.
4. 270 modulo 256 = 14.
5. Carry beskriver overflow i unsigned aritmetikk; signed overflow oppstår når det matematiske signed-resultatet ikke passer i signed-området.
6. Toerkomplement har området −128..127; null bruker ett mønster, og den negative halvdelen inkluderer minimumsverdien −128.
7. `7F + 01 = 80`. Bitmønsteret tolkes som −128 signed, mens det matematiske resultatet +128 ikke kan representeres: signed overflow.
