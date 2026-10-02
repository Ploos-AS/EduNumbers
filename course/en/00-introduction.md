# Introduction

Computers ultimately store bit patterns. A value only gains meaning when those bits are interpreted according to some representation.

This course teaches number systems from that perspective: not only how to convert values on paper, but how binary, hexadecimal, signed integers, masks, endianness and numeric formats appear in real software and hardware.

## Prerequisites

The course starts from first principles and assumes no prior knowledge of binary, hexadecimal, assembly language, or digital electronics.

You should be comfortable with basic integer arithmetic: addition, subtraction, multiplication, and division. When powers or other notation are needed, they are introduced before later material depends on them.

Programming and hardware examples are used to show where the representations appear in practice. You do not need prior C, Python, or assembly-language experience to begin the course.

## Learning outcomes

By the end of the course you should be able to:

- read and write binary, decimal, octal and hexadecimal numbers;
- convert between bases;
- understand unsigned and signed integers;
- explain two's complement, overflow and wraparound;
- use bitwise operations and bit masks;
- read addresses and simple hex dumps;
- explain little-endian and big-endian byte order;
- understand the basic ideas behind fixed-point, BCD and IEEE 754;
- recognize numeric representations in assembly language, C, Python, registers, protocols and file formats.

## First idea: the number is not its notation

The number twelve can be written in several ways:

- decimal: `12`
- binary: `1100₂`
- hexadecimal: `C₁₆`
- octal: `14₈`

The value is the same. The representation is different.

This distinction is the foundation for the rest of the course.