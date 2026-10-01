# EduNumbers — PLS 0.1 pedagogical audit

Status: M0.5 chapter audit complete
Declared range: PLS 0 -> 3
Adoption status: aligned

This audit reviews EduNumbers against Ploos Learning Standard 0.1. It documents alignment work; it is not yet a claim of formal `reviewed` or `compliant` status.

## Summary

EduNumbers is structurally close to PLS because it starts from first principles, uses a repeated PREDICT -> STEP -> OBSERVE -> EXPLAIN teaching cycle, provides bilingual exercises, and connects notation to real computing contexts.

The first audit found that learner-facing prerequisites were not explicit. That gap was corrected in both Norwegian and English introductions.

M0.5 completed a chapter-level pass focused on four cross-cutting risks:

1. unexplained notation;
2. hidden reasoning steps;
3. intuitive models that are not later refined;
4. missing high-value misconception treatment.

The Norwegian course contains 26 chapters, from introduction through the final project. The complete Norwegian sequence was reviewed against these risks. English has the same chapter structure and learning objectives; the chapters affected by material PLS remediations were checked and synchronized for equivalent learning intent.

## Strong reference chapters

The following chapters demonstrate the intended PLS pattern particularly well:

- `09-toerkomplement.md` — explicit intermediate steps, edge cases, carry versus signed overflow;
- `14-endianness.md` — concrete memory layout, explicit distinction between byte order and bit order;
- `16-fixed-point.md` — intuition, scaling model, limitations, overflow/range tradeoffs;
- `17-floating-point.md` — model plus limitations, rounding, special values and precision/range tradeoffs;
- `18-andre-representasjoner.md` — emphasizes that context gives bit patterns meaning;
- `19-tall-i-assembly.md` — distinguishes syntax, value, width, addressing, representation, dialect and machine meaning;
- `23-debugging-reverse-engineering.md` — separates observation from hypothesis and emphasizes falsifiable interpretations;
- `25-sluttprosjekt.md` — integrates representation, byte order, signedness, text, bit fields, offsets and justified analysis.

## M0.5 remediations

### Foundations

- `02-binaer.md` and `03-heksadesimal.md` were expanded from compact reference-style chapters into the full PREDICT -> STEP -> OBSERVE -> EXPLAIN pattern.
- notation such as `n` and `2ⁿ` was made explicit instead of using ambiguous parenthesized pseudo-math;
- common misconceptions were added where they materially improve understanding, including pattern count versus maximum value and hexadecimal A-F as digits rather than text.

### Integer representation and arithmetic

- clarified that unsigned range with `n` bits is `0 ... 2ⁿ - 1`;
- clarified that two's complement is not simply a separate sign bit plus magnitude;
- preserved explicit distinction between carry and signed overflow;
- clarified that CPU flag names and exact behavior are ISA-dependent.

### Bit operations and memory

- clarified that masking a bit usually produces zero or a non-zero masked value, not necessarily numeric 1;
- clarified address width versus actual implemented physical memory;
- retained explicit width dependence for NOT, shifts, masks and raw integer interpretation.

### Representation formats

- BCD now explicitly warns that `0x42` is ordinary integer 66 unless the surrounding format declares BCD;
- fixed-point and floating-point chapters already expose scaling, range, precision, rounding and model limitations;
- endianness distinguishes byte order from the written order of bits within a byte.

### Hardware and applied chapters

- ADC notation was normalized to `2ᴺ`;
- the simple ADC conversion equation is explicitly labeled an idealized learning model that must be checked against a real datasheet;
- hardware-register material warns about write-one-to-clear and other semantics that make ordinary read-modify-write unsafe;
- networking, file-format, assembly, debugging and reverse-engineering chapters consistently distinguish raw representation from semantic interpretation.

### Bilingual alignment

Norwegian remains the canonical teaching language for M0. English follows the same chapter structure and learning objectives. Material PLS remediations that changed learning intent were mirrored or verified in English, including binary, hexadecimal, BCD concepts and the ADC model/notation.

## Requirement review

### PLS-REQ-01 — Explicit prerequisites

**Status: aligned**

The Norwegian and English introductions state the expected arithmetic background and explicitly say that prior binary, hexadecimal, assembly, programming, and digital-electronics knowledge is not required.

### PLS-REQ-02 — Intuition before formalism

**Status: aligned**

The course begins with the distinction between a value and its representation before detailed notation. Chapters generally use questions and concrete bit patterns before broader formal interpretation.

### PLS-REQ-03 — Explain notation

**Status: aligned for current scope**

The chapter audit normalized ambiguous notation and verified that important operators, width conventions, prefixes, suffixes and representation syntax are explained where they become pedagogically significant.

### PLS-REQ-04 — No hidden reasoning steps

**Status: aligned for current scope**

Worked examples expose the transformations needed for the declared PLS 0 -> 3 path, including base conversion, two's complement, fixed point, floating point, endianness and byte-buffer analysis.

### PLS-REQ-05 — Concrete to abstract

**Status: aligned**

The established PREDICT -> STEP -> OBSERVE -> EXPLAIN pattern naturally moves from a concrete question through manipulation and observation to explanation.

### PLS-REQ-06 — Why as well as how

**Status: aligned**

The course explains why representations and techniques are useful and what tradeoffs or machine constraints motivate them.

### PLS-REQ-07 — Authentic terminology

**Status: aligned**

The course teaches real computing terminology rather than permanently replacing it with simplified language.

### PLS-REQ-08 — Multiple representations

**Status: aligned, expandable**

The course combines prose, equations, bit patterns, tables, hexadecimal notation, code/hardware contexts, memory layouts and practical exercises. Future diagrams and interactive tools may deepen this further but are not required for current alignment.

### PLS-REQ-09 — Active learning

**Status: aligned**

The project has dedicated Norwegian and English exercise trees and uses calculation, prediction, interpretation, explanation and practical tasks.

### PLS-REQ-10 — Progressive rigor

**Status: aligned**

Early intuitive models are refined by later chapters that introduce signedness, width, overflow, endianness, fixed/floating point, language semantics, hardware behavior and representation ambiguity.

### PLS-REQ-11 — Misconceptions

**Status: aligned for high-value current concepts**

The audit added or verified misconception treatment where learner errors are common and consequential, without forcing a dedicated misconception section into every chapter.

### PLS-REQ-12 — Explain-back

**Status: aligned**

The EXPLAIN stage and questions requiring justification satisfy the intent of explain-back learning throughout the course.

## Audit conclusion

EduNumbers now meets the project-defined threshold for **PLS 0.1 `aligned`** status:

- all 26 Norwegian chapters were checked against the four M0.5 cross-cutting risks;
- material gaps affecting the declared PLS 0 -> 3 path were corrected;
- Norwegian and English editions retain equivalent learning intent for the material changes made during the audit;
- machine-readable metadata declares the same entry/exit levels and remains subject to CI validation.

`aligned` is deliberately below `reviewed` and `compliant`. The next phase should involve an independent pedagogical review, broader bilingual parity review, exercise/solution coverage checks and evidence suitable for a formal PLS compliance claim.
