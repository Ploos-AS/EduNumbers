# Numbers in debugging and reverse engineering

When software crashes, a file is undocumented or an old system lacks specifications, raw bytes may appear before their structure is known. Number representation becomes an analysis tool.

## PREDICT

You find the bytes `48 65 6C 6C 6F 00`. Are they integers, machine code or text?

## STEP — observe before assuming

Separate observations from hypotheses. A hex editor or memory dump may show offsets or addresses, hexadecimal bytes, a text column and highlighted regions.

Readable characters are evidence worth investigating, not proof that a field is text.

## Recognizing patterns

Useful observations include repeated zeros, recurring values, text-like sequences, possible lengths or offsets, known signatures, regular blocks and bit fields whose bits change predictably.

A hypothesis becomes stronger when it explains multiple independent examples.

## Integers, addresses and offsets

Bytes `34 12` may represent big-endian `0x3412` or little-endian `0x1234`.

If the field is hypothesized to be a length, test whether that value agrees with the surrounding structure.

Debugger addresses are commonly hexadecimal. Address differences reveal sizes: `0x1040 - 0x1000 = 0x40 = 64`.

## Disassembly

A disassembler interprets bytes as instructions for a selected CPU and starting point. That does not prove those bytes are executable code.

Data can decode into syntactically valid but meaningless instructions. Ask whether the CPU and start address are known, whether control flow reaches the region, whether the sequence is plausible and whether the bytes might instead be data.

## Code and data

Code, tables, strings and constants may live close together. `41 42 43 44` could be ASCII `ABCD`, four integers, portions of larger values or instruction bytes. Context determines the useful interpretation.

## Reconstructing a possible structure

Consider the fictional bytes `03 00 08 00 41 42 43 00`.

One hypothesis is type 3, flags 0, a little-endian length of 8 and four data bytes. This is a model, not yet a fact. Comparing additional records can test whether those fields behave consistently.

## Change one thing

With systems and test data you control, changing one known value at a time and comparing before and after is powerful.

If enabling a flag changes exactly one bit, that is useful evidence. If changing a counter tracks one field, its representation becomes clearer.

## OBSERVE

Several interpretations are possible without context. As ASCII/UTF-8, `48 65 6C 6C 6F 00` gives `Hello` followed by a zero byte; that is a strong hypothesis, not proof by itself.

Data reverse engineering is often a process of constructing hypotheses that can be weakened or strengthened rather than instantly guessing the correct format.

## EXPLAIN

Bases, signedness, byte order, bit fields, addresses and text encodings make raw bytes easier to reason about. Context and repeated observations distinguish plausible interpretation from documented structure.

## Check yourself

Why can data produce apparently valid disassembly? What could `00 01` mean under different byte orders? Why are multiple examples more useful than one dump when reconstructing a structure?
