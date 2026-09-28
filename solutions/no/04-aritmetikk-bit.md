# Løsninger: aritmetikk og bitoperasjoner

1. `A7 + 6D = 114₁₆`; 8-bit resultat er `14₁₆`, carry = 1.
2. `64₁₆=100`, `32₁₆=50`; matematisk resultat 150 passer ikke i int8. Resultatmønsteret er `96₁₆`, og signed overflow oppstår.
3. `55 XOR FF = AA₁₆`.
4. `A5 AND 0F = 05₁₆`.
5. Venstre: `01101100₂`; logisk høyre: `00011011₂`.
6. `10010010₂ = 92₁₆`.
7. OR med `10₁₆`; AND med komplementet av `02₁₆`; AND med `80₁₆` og test om resultatet er ulik null.
8. NOT inverterer alle bit i den valgte representasjonen, så antallet bit bestemmer resultatmønsteret og den numeriske verdien.
