# Numbers in digital electronics

Digital electronics connects bit patterns to physical signals, registers, measurements and protocols. Numbers do not merely describe mathematics: they control pins and encode observations of the physical world.

## PREDICT

If an 8-bit GPIO register contains `0x81`, which bits are set?

## STEP — logical and physical levels

Logical zero and one are abstractions. Physical circuits use voltage ranges interpreted as LOW and HIGH; exact thresholds come from the component datasheet.

Signals can be active-low, meaning the asserted function corresponds to an electrically LOW line. Naming conventions vary.

## GPIO registers and masks

For `PORT = 10100001₂ = 0xA1`, individual bits may control separate functions.

Typical software operations include setting a bit with `PORT |= (1 << 3)`, clearing it with `PORT &= ~(1 << 3)`, and toggling it with XOR.

Real hardware must be checked against its datasheet. Some registers provide dedicated SET/CLEAR aliases, write-one-to-clear flags or other semantics for which ordinary read-modify-write is inappropriate.

## Datasheets and register maps

Register documentation commonly specifies addresses or offsets, bit positions, field widths, reset values, access properties and meanings of encoded field values.

A value such as `0x82` is only meaningful once its register and field definitions are known.

## ADC and DAC

An idealized N-bit ADC provides `2^N` digital codes. A 10-bit converter has 1024 codes, usually numbered 0 through 1023.

A simple idealized unipolar conversion can be approximated by

`V ≈ code / (2^N - 1) × Vref`

but the exact transfer function, reference, tolerances and endpoint conventions come from the datasheet. The formula above is therefore a learning model, not a universal ADC law.

A DAC maps digital codes in the opposite direction toward an analog output; its width likewise determines the number of available codes.

## Logic analyzers

Logic analyzers capture digital samples and may display bits, bytes, hexadecimal values, timestamps or decoded UART/SPI/I²C fields.

The byte `10100101₂ = 0xA5` might be a command, address, flags or payload. Protocol context supplies meaning. Serial analysis may additionally require bit order, clocking, framing and multi-byte byte order.

## OBSERVE

Hardware registers and protocols demonstrate the course's central idea: bit pattern plus representation rules produces meaning.

## EXPLAIN

Reading a datasheet constantly requires translating among bit positions, masks, hexadecimal values, numerical quantities and physical behavior.

## Check yourself

Which bits are set in `0x81`? How many codes does a 12-bit ADC have? Why can ordinary read-modify-write be wrong for some status registers? Why must an ADC conversion formula be checked against the datasheet?
