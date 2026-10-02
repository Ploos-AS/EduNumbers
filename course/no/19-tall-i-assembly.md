# Tall i assembly

Assembly gjør skillet mellom **verdi**, **syntaks**, **bitbredde** og **maskinbetydning** svært synlig. Samme tall kan være en immediate konstant, adresse, maske, offset eller del av en maskininstruksjon.

## PREDICT

Betyr `$10`, `#10`, `0x10` og `10h` alltid det samme?

## STEP — literals og syntaks

Assemblerdialekter bruker forskjellige notasjoner. Vanlige eksempler er:

- `42` — ofte desimal
- `0x2A` — vanlig hexnotasjon
- `$2A` — hex i mange 6502- og 68k-assemblere
- `2Ah` — hex i enkelte Intel-lignende syntakser
- `%101010` — binær i enkelte assemblere

Syntaksen må alltid leses i kontekst av den aktuelle assembleren.

## Immediate eller adresse?

Et tall i en instruksjon kan beskrive selve verdien eller stedet verdien skal hentes fra.

### 6502-lignende eksempel

`LDA #$2A` betyr typisk last den umiddelbare verdien `0x2A`.

`LDA $2A` betyr derimot les fra en minneadresse etter assemblerens og instruksjonens adresseringsregler.

### Motorola 68000

`MOVE.B #$2A,D0` bruker `#$2A` som immediate verdi.

`MOVE.B $002A,D0` refererer til minne.

Suffix som `.B`, `.W` og `.L` gjør også datastørrelsen eksplisitt i mange 68k-assemblerdialekter.

## AVR

AVR har egne registre og instruksjonsbegrensninger. En konstant kan for eksempel lastes med:

`LDI R16, 0x2A`

Tallene i kildekoden må fortsatt passe operandens tillatte range og instruksjonsencoding.

## x86

x86 har flere assemblerdialekter. Intel- og AT&T-syntaks kan uttrykke samme maskininstruksjon forskjellig. Derfor er det farlig å lære én tekstlig form som om den var «assembly-syntaksen».

## Registre og bredde

Et register har en definert bredde. Skriver du et større tall enn feltet eller instruksjonen kan representere, må assembleren enten avvise det, redusere det etter definerte regler eller velge en annen encoding.

Bitbredde bestemmer også hvordan samme bitmønster kan tolkes signed eller unsigned.

## Masker

Assembly bruker ofte tall som bitmasker:

`AND #$0F`

kan brukes til å beholde de fire laveste bitene i en byte, avhengig av ISA og syntaks.

## Disassembly

En disassembler starter med rå byte og forsøker å tolke dem som instruksjoner for en bestemt ISA og startadresse. En byte som er data i ett område kan derfor bli vist som en tilsynelatende instruksjon dersom verktøyet får feil kontekst.

## OBSERVE

Assemblerkilden inneholder menneskevennlige symboler og tallnotasjoner. CPU-en ser den ferdig kodede instruksjonens bitfelt.

## EXPLAIN

Tallforståelse er grunnleggende for assembly fordi operander, adresser, registre, masker, offsets og instruksjonsencoding alle er begrensede bitfelt.

## Sjekk deg selv

Hvorfor er `#$2A` og `$2A` forskjellige i mange klassiske assemblere? Hvorfor må du vite assemblerdialekten før du tolker `10h`?
