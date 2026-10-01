# EduNumbers

**Learn how computers represent numbers, one bit at a time.**

EduNumbers is a bilingual (Norwegian/English) course about number systems and numeric representation relevant to computing. It starts from first principles and develops toward practical use in programming, assembly language, digital electronics, debugging, file formats and networking.

## Ploos Learning Standard

EduNumbers is the first pilot project for the [Ploos Learning Standard (PLS)](https://github.com/Ploos-AS/learning-standard).

- PLS specification: **0.1**
- Entry level: **PLS-0**
- Target level: **PLS-3**
- Adoption status: **adopting**

The machine-readable pedagogical contract is defined in [`pls.yaml`](pls.yaml) and validated in CI. PLS machine validation complements, but does not replace, pedagogical review.

## M0 goals

- One canonical Markdown source tree per language.
- Norwegian is the primary language; English is a first-class parallel edition.
- Build the course as HTML, EPUB, Kindle-compatible EPUB/AZW3 where available, and PDF.
- Establish a practical curriculum covering binary, hexadecimal, octal, conversion, integer representation, arithmetic, bit operations, endianness, fixed/floating point and related computing representations.
- Keep all examples reproducible with open tools.

## Course layout

- `course/no/` — Norwegian course sources
- `course/en/` — English course sources
- `exercises/` — exercises
- `solutions/` — worked solutions
- `examples/` — small runnable examples
- `book/` — publication metadata and CSS
- `scripts/` — build/validation helpers
- `site/` — static site assets

## Build

Requirements: GNU Make, Pandoc, Python 3. Optional format validators/converters are detected automatically.

```sh
make all
```

Individual targets:

```sh
make html
make epub
make pdf
make kindle
make check
```

Artifacts are written below `build/`.

## Languages

Norwegian is the canonical teaching language for M0. English follows the same chapter structure and learning objectives.

## License

Course text and documentation: Creative Commons Attribution 4.0 International (CC BY 4.0).

Example software: MIT License unless otherwise stated.

See `LICENSE`, `LICENSES/CC-BY-4.0.txt` and `LICENSES/MIT.txt`.
