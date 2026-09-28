#!/usr/bin/env python3
from pathlib import Path
import sys
import zipfile

errors = []

required = [
    Path("build/html/no/index.html"),
    Path("build/html/en/index.html"),
    Path("build/epub/edunumbers-no.epub"),
    Path("build/epub/edunumbers-en.epub"),
    Path("build/pdf/edunumbers-no.pdf"),
    Path("build/pdf/edunumbers-en.pdf"),
]

for path in required:
    if not path.is_file():
        errors.append(f"missing artifact: {path}")
    elif path.stat().st_size == 0:
        errors.append(f"empty artifact: {path}")

for path in required:
    if path.suffix == ".epub" and path.is_file():
        if not zipfile.is_zipfile(path):
            errors.append(f"invalid EPUB ZIP container: {path}")
        else:
            with zipfile.ZipFile(path) as archive:
                if "mimetype" not in archive.namelist():
                    errors.append(f"EPUB missing mimetype entry: {path}")
                elif archive.read("mimetype") != b"application/epub+zip":
                    errors.append(f"EPUB has invalid mimetype: {path}")

for path in required:
    if path.suffix == ".pdf" and path.is_file():
        with path.open("rb") as stream:
            if stream.read(5) != b"%PDF-":
                errors.append(f"invalid PDF header: {path}")

kindle = list(Path("build/kindle").glob("*"))
if not kindle:
    errors.append("no Kindle artifact produced")
for path in kindle:
    if not path.is_file() or path.stat().st_size == 0:
        errors.append(f"invalid Kindle artifact: {path}")

if errors:
    print("Artifact validation failed:")
    for error in errors:
        print(f"- {error}")
    sys.exit(1)

print(f"Artifact validation passed: {len(required)} core files + {len(kindle)} Kindle files")
