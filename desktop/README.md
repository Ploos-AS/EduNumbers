# EduNumbers Desktop

EduNumbers Desktop is the native companion to the browser-based interactive course tools.

## Architecture

- `cmd/edunumbers`: Fyne desktop application shell.
- `internal/core`: deterministic, GUI-independent number-system logic.
- `internal/i18n`: Norwegian/English presentation strings and language types.
- Web tools remain first-class course tools; Desktop does not replace them.

The core must not import Fyne. This keeps calculations independently testable and allows later CLI/TUI frontends to reuse the same implementation.

## Milestones

- M25: desktop foundation, Go core, Fyne shell, i18n and CI.
- M26: Base Converter and Bit Visualizer.
- M27: Two's Complement and Endian Visualizer.
- M28: Bitmask Playground and IEEE-754 Explorer.
- M29: visual polish, accessibility, keyboard navigation and themes.
- M30: qualified Linux, Windows and macOS release builds.
- M31: optional CLI/TUI using the same core.

## Ploos-AS shared standards

Publishing outputs remain governed by the versioned Ploos-AS `publishing` standard. The Ploos-AS `hardware-ci@v1` workflows are intentionally not consumed here because EduNumbers currently contains no PCB or HDL target. If hardware is added later, the appropriate reusable hardware-ci workflow must be used rather than duplicating its qualification logic locally.
