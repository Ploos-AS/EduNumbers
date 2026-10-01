# EduNumbers — PLS 0.1 pedagogical audit

Status: initial audit
Declared range: PLS 0 -> 3

This audit reviews EduNumbers against Ploos Learning Standard 0.1. It is a pedagogical review aid, not a claim that every chapter is complete.

## Summary

EduNumbers is already structurally close to PLS because it starts from first principles, uses a repeated PREDICT -> STEP -> OBSERVE -> EXPLAIN teaching cycle, provides bilingual exercises, and connects notation to real computing contexts.

The most important gap found in the first audit was that prerequisites were not explicit in the learner-facing course introduction. This has now been corrected in both Norwegian and English.

Several requirements are satisfied in the current material, while others need systematic chapter-by-chapter verification before the project should move to `reviewed` or `compliant`.

## Requirement review

### PLS-REQ-01 — Explicit prerequisites

**Status: aligned**

The Norwegian and English introductions now state the expected arithmetic background and explicitly say that prior binary, hexadecimal, assembly, programming, and digital-electronics knowledge is not required.

### PLS-REQ-02 — Intuition before formalism

**Status: aligned, sample verified**

The course begins with the distinction between a value and its representation before introducing detailed notation. Sampled chapters use questions and concrete bit patterns before broader formal interpretation.

### PLS-REQ-03 — Explain notation

**Status: partial / verify systematically**

The sampled material explains bases and representations in context. A complete audit should verify that every new symbol, operator, suffix, abbreviation, and notation is explained at first pedagogically significant use.

Action: add a notation/terminology pass to chapter review.

### PLS-REQ-04 — No hidden reasoning steps

**Status: aligned in sampled material; verify systematically**

Worked examples such as two's-complement conversion show intermediate steps rather than only answers.

Action: review conversion, arithmetic, fixed-point, floating-point, and endianness chapters for skipped transformations.

### PLS-REQ-05 — Concrete to abstract

**Status: aligned**

The established PREDICT -> STEP -> OBSERVE -> EXPLAIN pattern naturally moves from a concrete question through manipulation and observation to explanation.

### PLS-REQ-06 — Why as well as how

**Status: aligned in sampled material**

Sampled chapters explain why representations or techniques are useful, for example why two's complement allows shared addition hardware and why carry and signed overflow answer different questions.

### PLS-REQ-07 — Authentic terminology

**Status: aligned**

The course deliberately teaches real computing terminology including binary, hexadecimal, two's complement, overflow, endianness, fixed point, IEEE 754, bit masks, registers, and related terms.

Action: maintain bilingual terminology consistency rather than replacing technical terms with informal substitutes.

### PLS-REQ-08 — Multiple representations

**Status: aligned, but expandable**

The course combines prose, mathematical notation, bit patterns, hexadecimal notation, code/hardware contexts, and practical exercises.

Action: add diagrams or interactive visualizations where they materially improve difficult topics such as bit significance, endianness, fixed point, and IEEE 754.

### PLS-REQ-09 — Active learning

**Status: aligned**

The project has dedicated Norwegian and English exercise trees. Exercises include calculation, interpretation, prediction, explanation, and practical computing tasks rather than recall alone.

### PLS-REQ-10 — Progressive rigor

**Status: partial / verify systematically**

The curriculum progresses from basic representations toward signed arithmetic, memory, numeric formats, assembly, programming, hardware, networking, debugging, and reverse engineering.

Action: verify that intuitive early models are refined when later chapters introduce edge cases and formal limitations.

### PLS-REQ-11 — Misconceptions

**Status: partial**

The sampled material explicitly handles important traps such as carry versus signed overflow and the asymmetric signed 8-bit range. However, misconception treatment is not yet a consistently declared chapter element.

Action: identify at least one high-value misconception for concepts where learners commonly fail, without forcing a section where none is useful.

### PLS-REQ-12 — Explain-back

**Status: aligned in sampled material**

The EXPLAIN stage and exercises asking learners to justify differences and edge cases satisfy the intent of explain-back learning.

Action: preserve explanation/justification questions as the course expands.

## Audit conclusion

EduNumbers is a strong PLS pilot and may be considered **aligned in structure**, but should remain in adoption/review status until the complete chapter set has undergone notation, hidden-step, progressive-rigor, and misconception review.

The next audit pass should focus on four cross-cutting checks:

1. every new notation item is introduced;
2. no required intermediate reasoning step is skipped;
3. intuitive models are corrected or refined before they become misleading;
4. common misconceptions are explicitly addressed where valuable.
