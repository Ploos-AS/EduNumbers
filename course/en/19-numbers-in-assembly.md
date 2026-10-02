# Numbers in assembly

Assembly exposes the distinction among **value**, **syntax**, **bit width** and **machine meaning**. A number may be an immediate constant, address, mask, offset or part of an instruction encoding.

## PREDICT

Do `$10`, `#10`, `0x10` and `10h` always mean the same thing?

## STEP — literals and syntax

Assembler dialects use different literal conventions. Common forms include decimal `42`, hexadecimal `0x2A`, `$2A` in many classic assemblers, `2Ah` in some Intel-style contexts, and forms such as `%101010` for binary.

Always interpret syntax in the context of the actual assembler.

## Immediate versus address

A numeric operand can be the value itself or identify a location from which a value is read.

On 6502-style syntax, `LDA #$2A` commonly loads immediate value `0x2A`, while `LDA $2A` accesses memory according to the instruction's addressing mode.

On Motorola 68000, `MOVE.B #$2A,D0` uses an immediate value, while `MOVE.B $002A,D0` refers to memory. Size suffixes such as `.B`, `.W` and `.L` make operand width visible in many 68k dialects.

## AVR

AVR uses its own register and instruction constraints. For example, `LDI R16, 0x2A` loads a constant into a permitted register. A source literal still has to fit the operand range and instruction encoding.

## x86

x86 has multiple major assembler dialects. Intel and AT&T syntax can express the same machine operation differently, so no single textual convention should be mistaken for universal assembly syntax.

## Registers, masks and disassembly

Registers and instruction fields have finite widths. Bit masks such as `0x0F` are commonly used to select fields.

A disassembler interprets raw bytes as instructions for a chosen ISA and address. Bytes that are actually data can look like plausible instructions when context is wrong.

## OBSERVE

No. Prefixes and suffixes are assembler syntax, and the meanings of `# Numbers in assembly

Assembly exposes the distinction among **value**, **syntax**, **bit width** and **machine meaning**. A number may be an immediate constant, address, mask, offset or part of an instruction encoding.

## PREDICT

Do `$10`, `#10`, `0x10` and `10h` always mean the same thing?

## STEP — literals and syntax

Assembler dialects use different literal conventions. Common forms include decimal `42`, hexadecimal `0x2A`, `$2A` in many classic assemblers, `2Ah` in some Intel-style contexts, and forms such as `%101010` for binary.

Always interpret syntax in the context of the actual assembler.

## Immediate versus address

A numeric operand can be the value itself or identify a location from which a value is read.

On 6502-style syntax, `LDA #$2A` commonly loads immediate value `0x2A`, while `LDA $2A` accesses memory according to the instruction's addressing mode.

On Motorola 68000, `MOVE.B #$2A,D0` uses an immediate value, while `MOVE.B $002A,D0` refers to memory. Size suffixes such as `.B`, `.W` and `.L` make operand width visible in many 68k dialects.

## AVR

AVR uses its own register and instruction constraints. For example, `LDI R16, 0x2A` loads a constant into a permitted register. A source literal still has to fit the operand range and instruction encoding.

## x86

x86 has multiple major assembler dialects. Intel and AT&T syntax can express the same machine operation differently, so no single textual convention should be mistaken for universal assembly syntax.

## Registers, masks and disassembly

Registers and instruction fields have finite widths. Bit masks such as `0x0F` are commonly used to select fields.

A disassembler interprets raw bytes as instructions for a chosen ISA and address. Bytes that are actually data can look like plausible instructions when context is wrong.

, `#`, `0x` and `h` depend on the language and context. The syntax rules of the particular assembler are authoritative.

Assembly source contains human-readable symbols and numeric notation. The CPU receives encoded instruction bit fields.

## EXPLAIN

Number representation is fundamental to assembly because operands, addresses, registers, masks, offsets and encodings are all finite bit fields.

## Check yourself

Why are `#$2A` and `$2A` different in many classic assembler dialects? Why must you know the dialect before interpreting `10h`?
