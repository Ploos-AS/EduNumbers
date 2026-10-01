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

# Keep Pandoc-facing book metadata aligned with canonical publication metadata.
publication = Path("publication.yaml").read_text(encoding="utf-8") if Path("publication.yaml").is_file() else ""
for path, title, subtitle in [
    (Path("book/metadata-no.yaml"), "Tallsystemer", "Fra binært til heksadesimalt – forstå hvordan datamaskiner representerer tall"),
    (Path("book/metadata-en.yaml"), "Number Systems", "From Binary to Hexadecimal – Understanding How Computers Represent Numbers"),
]:
    if path.is_file():
        metadata = path.read_text(encoding="utf-8")
        if f'title: "{title}"' not in metadata or f'subtitle: "{subtitle}"' not in metadata:
            errors.append(f"stale title/subtitle metadata: {path}")
        if f"title: {title}" not in publication or f'subtitle: "{subtitle}"' not in publication:
            errors.append(f"canonical title/subtitle missing from publication.yaml: {title}")

def numbered_sources(directory):
    found = {}
    for path in Path(directory).glob("*.md"):
        match = re.match(r"(\d\d)-", path.name)
        if match:
            found[int(match.group(1))] = path
    return found

def validate_pair(label, no_dir, en_dir, count_items=False):
    no = numbered_sources(no_dir)
    en = numbered_sources(en_dir)
    if not no:
        errors.append(f"no Norwegian {label} found")
    if not en:
        errors.append(f"no English {label} found")
    for number in sorted(set(no) | set(en)):
        if number not in no:
            errors.append(f"{label} {number:02d} missing Norwegian source")
        if number not in en:
            errors.append(f"{label} {number:02d} missing English source")
        if number in no and number in en and count_items:
            no_text = no[number].read_text(encoding="utf-8")
            en_text = en[number].read_text(encoding="utf-8")
            no_items = len(re.findall(r"^\d+\.\s+", no_text, re.MULTILINE))
            en_items = len(re.findall(r"^\d+\.\s+", en_text, re.MULTILINE))
            if no_items != en_items:
                errors.append(f"{label} {number:02d} item count differs: NO={no_items}, EN={en_items}")
    for path in list(no.values()) + list(en.values()):
        text = path.read_text(encoding="utf-8")
        if not text.strip():
            errors.append(f"empty source: {path}")
        if not re.search(r"^#\s+\S", text, re.MULTILINE):
            errors.append(f"missing H1 heading: {path}")
    return no, en

no_ch, en_ch = validate_pair("chapter", "course/no", "course/en")
no_ex, en_ex = validate_pair("exercise sheet", "exercises/no", "exercises/en", True)
no_sol, en_sol = validate_pair("solution sheet", "solutions/no", "solutions/en", True)

if set(no_ex) != set(no_sol):
    errors.append("Norwegian exercise/solution sheet numbers differ")
if set(en_ex) != set(en_sol):
    errors.append("English exercise/solution sheet numbers differ")

if errors:
    print("Source validation failed:")
    for error in errors:
        print(f"- {error}")
    sys.exit(1)

print(
    f"Source validation passed: {len(no_ch)} NO + {len(en_ch)} EN chapters; "
    f"{len(no_ex)} NO + {len(en_ex)} EN exercise sheets; "
    f"{len(no_sol)} NO + {len(en_sol)} EN solution sheets"
)
