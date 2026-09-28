#!/usr/bin/env python3
from pathlib import Path
import sys

required = [
    Path('README.md'), Path('COURSE.md'),
    Path('course/no/00-introduksjon.md'),
    Path('course/en/00-introduction.md'),
    Path('book/metadata-no.yaml'), Path('book/metadata-en.yaml'),
]
missing = [str(p) for p in required if not p.is_file()]
if missing:
    print('Missing required M0 files:')
    print('\n'.join(f'- {p}' for p in missing))
    sys.exit(1)
for p in Path('course').rglob('*.md'):
    if not p.read_text(encoding='utf-8').strip():
        print(f'Empty source: {p}')
        sys.exit(1)
print('M0 source checks passed')
