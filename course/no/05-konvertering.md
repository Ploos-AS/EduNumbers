# Konvertering mellom tallsystemer

Å konvertere betyr å endre representasjon uten å endre verdien.

## PREDICT

Er `1010₂`, `12₈`, `10₁₀` og `A₁₆` fire forskjellige tall?

## STEP

Fra en vilkårlig base til desimal summerer vi sifferverdi ganger posisjonsvekt:

`2D₁₆ = 2×16 + 13 = 45₁₀`.

Fra desimal til en annen base kan vi bruke gjentatt heltallsdivisjon og lese restene baklengs.

For 45 til binær:

- 45 / 2 gir rest 1
- 22 / 2 gir rest 0
- 11 / 2 gir rest 1
- 5 / 2 gir rest 1
- 2 / 2 gir rest 0
- 1 / 2 gir rest 1

Dermed `45₁₀ = 101101₂`.

Mellom binær og hex grupperer vi fire bit: `0010 1101₂ = 2D₁₆`. Mellom binær og oktal grupperer vi tre bit: `101 101₂ = 55₈`.

## OBSERVE

Nei: `1010₂ = 12₈ = 10₁₀ = A₁₆`. De fire skrivemåtene representerer samme verdi i forskjellige baser.

Binær fungerer som en nyttig bro mellom oktal og hex fordi gruppestørrelsene er faste.

## EXPLAIN

Metodene er mekaniske, men målet er å kjenne igjen mønstre. Etter hvert bør `1111₂ = F₁₆ = 15₁₀` være like naturlig som enkel hoderegning.

## Sjekk deg selv

Konverter `42₁₀` til binær og hex, `FF₁₆` til desimal, og `377₈` til binær.
