# Other representations

Bit patterns represent much more than ordinary integers. This chapter introduces Gray code, biased/excess notation, character codes and packed data.

## PREDICT

Must the bit pattern `01000001` always mean the number 65?

## STEP — Gray code

In binary-reflected Gray code, neighboring values differ in exactly one bit. This is useful when multiple bits should not transition simultaneously, such as in some position encoders.

A binary value `b` can be converted with `g = b XOR (b >> 1)`.

## STEP — biased/excess notation

An exponent can be stored as an unsigned field plus an agreed bias. With bias 127, stored value 130 represents exponent (130-127=3).

IEEE 754 binary32 uses this principle for its exponent field, with reserved field values receiving special meanings.

## STEP — characters as numbers

ASCII assigns `A` the code value 65, or `0x41`. Unicode defines **code points**, such as U+0041 for A. An encoding such as UTF-8 then determines the actual stored bytes.

A code point and its byte encoding are not the same concept.

## STEP — packed data

One byte can contain several bit fields. A hypothetical status register might use bit 7 for ready, bit 6 for error, bits 5–4 for a mode and bits 3–0 for a counter.

## OBSERVE

`0x41` may be unsigned 65, signed 65, ASCII A, part of an instruction or a field inside a larger structure. Context supplies meaning.

## EXPLAIN

Computers store bits. Types, protocols, instruction sets and file formats supply their semantics.

## Check yourself

Compute the Gray code for binary `1010`. What exponent does stored value 124 represent with excess-127?
