# Numbers in networks and file formats

Network packets and binary files are sequences of bytes. Understanding them requires knowing which bytes form fields, the byte order of multi-byte values and the meaning assigned by the format.

## PREDICT

The bytes `12 34` form a 16-bit integer. Is the value `0x1234` or `0x3412`?

It depends on the format's byte order.

## STEP — network byte order

Many multi-byte fields in Internet protocols use **network byte order**, which is big-endian. A 16-bit `0x1234` field is therefore transmitted as `12 34`.

This does not require the host CPU itself to be big-endian. Protocol representation and native machine representation are separate concerns.

## IPv4 and MAC addresses

IPv4 is 32 bits. The familiar `192.168.1.10` corresponds to bytes `C0 A8 01 0A`.

A common 48-bit MAC address can be displayed as six hexadecimal bytes, for example `02:12:34:56:78:9A`. Hexadecimal maps naturally to byte-oriented representations.

## Protocol fields

Packets may contain versions, lengths, types, flags, ports, sequence numbers, checksums and payloads. Some are bit fields; others are multi-byte integers. The protocol specification defines width, byte order and semantics.

## Magic numbers and binary formats

Binary formats often begin with characteristic signatures. For example, `89 50 4E 47 0D 0A 1A 0A` is the eight-byte signature at the start of a PNG file.

A signature can aid identification, but does not by itself prove that the rest of a file is structurally valid.

## From hex dump to structure

Consider a fictional record:

`01 03 12 34 41 42 43`

Its specification says byte 0 is a version, byte 1 a payload length, bytes 2–3 a big-endian ID and the remainder payload.

The record therefore contains version 1, length 3, ID `0x1234`, and payload `41 42 43`, which can be interpreted as ASCII `ABC`.

Without the specification these are simply seven bytes.

## Offsets and lengths

Binary parsers move through structures using field offsets and lengths. A field beginning at offset 4 with length 2 occupies bytes 4 and 5; the next field begins at offset 6.

An incorrect width or offset shifts subsequent interpretation.

## OBSERVE

The same byte can be part of an IP address, character, flags, integer or opaque payload.

## EXPLAIN

A hex dump exposes stored or transmitted bytes. A format or protocol specification tells us how to group and interpret them.

## Check yourself

How is `0xBEEF` stored as a big-endian 16-bit field? Which bytes encode IPv4 `127.0.0.1`? Why is a magic number insufficient to validate an entire file?
