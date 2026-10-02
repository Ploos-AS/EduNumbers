# Introduksjon

Datamaskiner lagrer ikke «123», «A» eller «-7» på samme måte som mennesker skriver dem. De lagrer mønstre av bits. Betydningen kommer fra hvordan vi velger å tolke disse mønstrene.

I dette kurset lærer du både å regne med ulike tallsystemer og å kjenne dem igjen i faktisk programvare og maskinvare.

## Forkunnskaper

Kurset starter fra første prinsipper og krever ingen forkunnskaper om binær, heksadesimal, assembler eller digital elektronikk.

Du bør være komfortabel med enkel heltallsregning: addisjon, subtraksjon, multiplikasjon og divisjon. Når vi trenger potenser eller annen notasjon, forklares den før den brukes videre.

Programmerings- og maskinvareeksempler brukes for å vise hvor representasjonene dukker opp i praksis. Du trenger ikke kunne C, Python eller assembler for å starte kurset.

## Læringsmål

Etter kurset skal du blant annet kunne:

- lese og skrive binære, desimale, oktale og heksadesimale tall;
- konvertere mellom baser;
- forstå unsigned og signed heltall;
- forklare toerkomplement, overflow og wraparound;
- bruke bitvise operasjoner og bitmasker;
- lese adresser og enkle hex-dumps;
- forklare little endian og big endian;
- forstå grunnideen bak fixed point, BCD og IEEE 754;
- kjenne igjen tallrepresentasjoner i assembler, C, Python, registre, protokoller og filformater.

## Første idé: tall er ikke skrivemåten

Tallet tolv kan skrives på flere måter:

- desimalt: `12`
- binært: `1100₂`
- heksadesimalt: `C₁₆`
- oktalt: `14₈`

Verdien er den samme. Representasjonen er forskjellig.

Dette skillet er grunnlaget for resten av kurset.