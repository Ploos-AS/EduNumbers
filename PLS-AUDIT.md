# EduNumbers — PLS 0.1 pedagogical audit

Status: M0.5 chapter audit in progress
Declared range: PLS 0 -> 3

This audit reviews EduNumbers against Ploos Learning Standard 0.1. It is a pedagogical review aid, not a claim that every chapter is complete.

## Summary

EduNumbers is structurally close to PLS because it starts from first principles, uses a repeated PREDICT -> STEP -> OBSERVE -> EXPLAIN teaching cycle, provides bilingual exercises, and connects notation to real computing contexts.

The first audit found that learner-facing prerequisites were not explicit. That gap has been corrected in both Norwegian and English introductions.

M0.5 adds a chapter-level pass focused on four cross-cutting risks:

1. unexplained notation;
2. hidden reasoning steps;
3. intuitive models that are not later refined;
4. missing high-value misconception treatment.

The Norwegian chapter map currently contains 26 chapters, from introduction through the final project.

## M0.5 findings

### Strong reference chapters

The following sampled chapters already demonstrate the intended PLS pattern particularly well:

- `09-toerkomplement.md` — explicit intermediate steps, edge cases, carry versus signed overflow;
- `14-endianness.md` — concrete memory layout, explicit distinction between byte order and bit order;
- `16-fixed-point.md` — intuition, scaling model, limitations, overflow/range tradeoffs;
- `17-floating-point.md` — model plus limitations, rounding, special values and precision/range tradeoffs;
- `18-andre-representasjoner.md` — emphasizes that context gives bit patterns meaning;
- `19-tall-i-assembly.md` — distinguishes syntax, value, width, addressing, representation, dialect and machine meaning.

These chapters should be treated as style references when weaker chapters are expanded.

### Remediations completed in M0.5

#### `02-binaer.md`

Previously compact and mostly reference-like. It now includes:

- PREDICT;
- explicit bit-position reasoning;
- OBSERVE;
- the misconception that a bit pattern has one inherent numeric meaning;
- EXPLAIN;
- explain-back questions.

#### `03-heksadesimal.md`

Previously compact and mostly a conversion table. It now includes:

- PREDICT;
- explicit binary-to-hex grouping steps;
- reverse conversion example;
- OBSERVE explaining why the mapping is exact;
- a misconception note about A-F being digits rather than text;
- EXPLAIN;
- explain-back questions.

### Remaining chapter-audit work

The full chapter map is known, but not every chapter has yet received the same deep content review. Remaining chapters must be checked before the project status is raised from `adopting` to `aligned`.

Priority groups:

- early foundations: chapters 01, 04-08;
- arithmetic and bit operations: chapters 10-13;
- representation formats: chapter 15;
- applied/system chapters: chapters 20-25.

## Requirement review

### PLS-REQ-01 — Explicit prerequisites

**Status: aligned**

The Norwegian and English introductions state the expected arithmetic background and explicitly say that prior binary, hexadecimal, assembly, programming, and digital-electronics knowledge is not required.

### PLS-REQ-02 — Intuition before formalism

**Status: aligned in reviewed chapters**

The course begins with the distinction between a value and its representation before detailed notation. Reviewed chapters generally use questions and concrete bit patterns before broader formal interpretation.

### PLS-REQ-03 — Explain notation

**Status: partial / chapter audit continuing**

Reviewed material generally explains base notation, width, representation and syntax in context. A complete pass is still required for every new operator, abbreviation, suffix and notation item.

### PLS-REQ-04 — No hidden reasoning steps

**Status: aligned in reviewed chapters; chapter audit continuing**

Worked examples in conversion, two's complement, fixed-point and related reviewed material expose necessary intermediate transformations.

### PLS-REQ-05 — Concrete to abstract

**Status: aligned**

The established PREDICT -> STEP -> OBSERVE -> EXPLAIN pattern naturally moves from a concrete question through manipulation and observation to explanation.

### PLS-REQ-06 — Why as well as how

**Status: aligned in reviewed chapters**

Reviewed chapters explain why representations or techniques are useful, not just how to execute them.

### PLS-REQ-07 — Authentic terminology

**Status: aligned**

The course teaches real computing terminology rather than permanently replacing it with simplified language.

### PLS-REQ-08 — Multiple representations

**Status: aligned, expandable**

The course combines prose, equations, bit patterns, tables, hexadecimal notation, code/hardware contexts, memory layouts and practical exercises.

### PLS-REQ-09 — Active learning

**Status: aligned**

The project has dedicated Norwegian and English exercise trees and uses calculation, prediction, interpretation, explanation and practical tasks.

### PLS-REQ-10 — Progressive rigor

**Status: aligned in reviewed advanced chapters; full verification pending**

Fixed-point, floating-point, signed arithmetic and endianness explicitly refine simpler early models and introduce edge cases and limitations.

### PLS-REQ-11 — Misconceptions

**Status: improving / full verification pending**

High-value misconceptions are explicitly handled in reviewed chapters. M0.5 added misconception treatment to the binary and hexadecimal chapters.

### PLS-REQ-12 — Explain-back

**Status: aligned in reviewed chapters**

The EXPLAIN stage and questions requiring justification satisfy the intent of explain-back learning.

## Audit conclusion

EduNumbers is **aligned in overall structure and in the chapters deeply reviewed so far**, but remains `adopting` until the remaining chapter groups receive the same content-level pass.

The threshold for moving to `aligned` is:

- all 26 chapters checked for the four M0.5 risks;
- material gaps corrected where they affect the declared PLS 0 -> 3 path;
- Norwegian and English editions checked for equivalent learning intent;
- PLS metadata validation remains green.
