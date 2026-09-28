#!/usr/bin/env python3
from pathlib import Path
import re
import sys

errors = []

for required in [
    Path("README.md"), Path("COURSE.md"),
    Path("book/metadata-no.yaml"), Path("book/metadata-en.yaml"),
]:
    if not required.is_file():
        errors.append(f"missing required file: {required}")

def chapters(directory):
    found = {}
    for path in Path(directory).glob("*.md"):
        match = re.match(r"(\d\d)-", path.name)
        if match:
            found[int(match.group(1))] = path
    return found

no = chapters("course/no")
en = chapters("course/en")

if not no:
    errors.append("no Norwegian chapters found")
if not en:
    errors.append("no English chapters found")

for number in sorted(set(no) | set(en)):
    if number not in no:
        errors.append(f"chapter {number:02d} missing Norwegian source")
    if number not in en:
        errors.append(f"chapter {number:02d} missing English source")

for path in list(no.values()) + list(en.values()):
    text = path.read_text(encoding="utf-8")
    if not text.strip():
        errors.append(f"empty source: {path}")
    if not re.search(r"^#\s+\S", text, re.MULTILINE):
        errors.append(f"missing H1 heading: {path}")

if errors:
    print("Source validation failed:")
    for error in errors:
        print(f"- {error}")
    sys.exit(1)

print(f"Source validation passed: {len(no)} NO + {len(en)} EN chapters")
