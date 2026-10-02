# Historiske og uvanlige tallsystemer

Binær, oktal, desimal og heksadesimal dominerer moderne datateknikk, men et posisjonssystem kan i prinsippet bruke mange andre baser. Andre valg viser hvorfor en base er en representasjonsregel, ikke en egenskap ved selve tallet.

## PREDICT

Hva betyr `10` i base 3?

Det betyr tre, fordi sifrene representerer:

`1 × 3¹ + 0 × 3⁰ = 3`

## STEP — base 3

Base 3 bruker sifrene 0, 1 og 2.

`102₃ = 1 × 9 + 0 × 3 + 2 = 11₁₀`

Ternære systemer er interessante fordi de viser at digital representasjon ikke matematisk krever akkurat to symboler. Det har også eksistert forskning og maskiner basert på ternær logikk.

## Base 12

Base 12 har tolv sifferverdier per posisjon. I dette kurset bruker vi `A` for verdien ti og `B` for verdien elleve, i tillegg til 0–9. Dermed er for eksempel `A₁₂ = 10₁₀` og `B₁₂ = 11₁₀`.

Tolv har mange delere: 2, 3, 4 og 6. Det gjør enkelte brøker kompakte.

I base 12 er for eksempel en halv:

`0.6₁₂`

fordi 6/12 = 1/2.

## Base 20

Vigesimale systemer bruker base 20 og finnes historisk i flere språk og kulturer.

Poenget for oss er representasjon: når basen er 20, betyr `10₂₀` tjue, ikke ti.

## Base 36

Base 36 er praktisk i tekst fordi sifrene 0–9 og bokstavene A–Z kan representere 36 sifferverdier.

Da er:

`Z₃₆ = 35₁₀`

og:

`10₃₆ = 36₁₀`

Base 36 kan gi kompakte tekstlige representasjoner av ikke-negative heltall, men store/små bokstaver og alfabet må defineres av formatet.

## Base 60

Seksagesimale systemer har svært gamle historiske røtter. Spor av base 60 er fortsatt synlige i tids- og vinkelmåling:

- 60 sekunder per minutt
- 60 minutter per time
- 60 bueminutter per grad
- 60 buesekunder per bueminutt

Dette er ikke et rent moderne posisjonssystem i alle disse bruksområdene, men viser hvordan en valgt oppdeling kan leve videre svært lenge.

## Hvorfor divisibilitet betyr noe

Basens faktorer påvirker hvilke brøker som får endelige representasjoner.

I base 10 er 1/2 = 0.5 og 1/5 = 0.2 endelige, mens 1/3 repeterer.

I base 2 er 1/2 endelig, mens 1/10₁₀ ikke har en endelig binær brøk. Dette knytter direkte tilbake til flyttallskapitlet.

## Base er ikke bitbredde

Base og lagringsbredde er forskjellige konsepter.

Et tall kan skrives i base 36 som tekst og likevel lagres internt som et vanlig binært heltall. Omvendt kan en binær byte vises som desimal, hex eller base 36 uten at byteverdien endres.

## Historiske maskiner

Datamaskinhistorien inneholder andre representasjoner enn dagens vanligste binære mønstre. Noen maskiner brukte desimalorientert aritmetikk eller andre ordstørrelser og tegnkodinger enn vi forventer i dag.

Derfor bør historiske data alltid leses ut fra den aktuelle maskinens dokumenterte representasjon, ikke moderne antakelser.

## OBSERVE

`10` kan representere 2, 3, 8, 10, 12, 16, 20, 36, 60 eller en annen verdi avhengig av basen.

## EXPLAIN

Et posisjonssystem er en avtale om siffer, posisjonsvekter og base. Tallet er den abstrakte verdien; notasjonen er representasjonen.

## Sjekk deg selv

Hva er `10₁₂` i desimal? Hva er `Z₃₆`? Hvorfor kan base 12 representere enkelte vanlige brøker mer kompakt enn base 10?
