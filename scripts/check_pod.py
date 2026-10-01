#!/usr/bin/env python3
from pathlib import Path
import re
import subprocess
import sys

EXPECTED_WIDTH = 6.0 * 72.0
EXPECTED_HEIGHT = 9.0 * 72.0
TOLERANCE = 1.0


def pdfinfo(path):
    try:
        return subprocess.check_output(["pdfinfo", str(path)], text=True, stderr=subprocess.STDOUT)
    except (OSError, subprocess.CalledProcessError) as exc:
        raise RuntimeError(f"pdfinfo failed: {exc}")


def main():
    if len(sys.argv) != 2:
        print("usage: check_pod.py PRINT.pdf")
        return 2
    path = Path(sys.argv[1])
    errors = []
    if not path.is_file() or path.stat().st_size == 0:
        errors.append("missing or empty print PDF")
    else:
        with path.open("rb") as stream:
            if stream.read(5) != b"%PDF-":
                errors.append("invalid PDF header")
        try:
            info = pdfinfo(path)
            pages = re.search(r"^Pages:\s*(\d+)\s*$", info, re.MULTILINE | re.IGNORECASE)
            size = re.search(r"^Page\s+size:\s*([0-9.]+)\s*x\s*([0-9.]+)\s*pts(?:\s.*)?$", info, re.MULTILINE | re.IGNORECASE)
            if not pages or int(pages.group(1)) < 1:
                errors.append("invalid page count")
            if not size:
                errors.append("unable to determine trim size")
            else:
                width, height = map(float, size.groups())
                if abs(width-EXPECTED_WIDTH) > TOLERANCE or abs(height-EXPECTED_HEIGHT) > TOLERANCE:
                    errors.append(f"trim size is {width:.1f}x{height:.1f} pt; expected 432x648 pt (6x9 in)")
        except RuntimeError as exc:
            errors.append(str(exc))
    if errors:
        print(f"POD QA failed: {path}")
        for error in errors:
            print(f"- {error}")
        return 1
    print(f"POD QA passed: {path} (6x9 in)")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
