# Løsninger: tall i C og Python

1. `0b10101101` og `0xAD`.
2. Python-`int` kan vokse utover en fast maskinbredde; `uint8_t` representerer verdier 0–255 når typen finnes.
3. 0.
4. `0x0B`.
5. Den setter bit 7 til 1 og lar de andre bitene beholde sine tidligere verdier.
6. `int("11110000", 2)`, som gir 240.
7. `f"{10:08b}"`, som gir `00001010`.
8. C definerer ikke signed integer overflow som vanlig modulo-wraparound. Kode som krever eksplisitt modulooppførsel bør bruke passende unsigned representasjon eller andre definerte metoder.
