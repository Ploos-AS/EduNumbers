PANDOC ?= pandoc
PYTHON ?= python3
PDF_ENGINE ?= xelatex
NO_SRC := $(sort $(wildcard course/no/*.md))
EN_SRC := $(sort $(wildcard course/en/*.md))

.PHONY: all html epub pdf print kindle check validate quality clean
all: check html epub pdf print kindle validate quality

build:
	mkdir -p build/html/no build/html/en build/epub build/pdf build/print build/kindle

check:
	$(PYTHON) scripts/check_sources.py

html: build
	$(PANDOC) --standalone --toc --metadata-file=book/metadata-no.yaml $(NO_SRC) -o build/html/no/index.html
	$(PANDOC) --standalone --toc --metadata-file=book/metadata-en.yaml $(EN_SRC) -o build/html/en/index.html

epub: build
	$(PANDOC) --toc --css=book/epub.css --metadata-file=book/metadata-no.yaml $(NO_SRC) -o build/epub/edunumbers-no.epub
	$(PANDOC) --toc --css=book/epub.css --metadata-file=book/metadata-en.yaml $(EN_SRC) -o build/epub/edunumbers-en.epub

pdf: build
	$(PANDOC) --pdf-engine=$(PDF_ENGINE) --toc --metadata-file=book/metadata-no.yaml $(NO_SRC) -o build/pdf/edunumbers-no.pdf
	$(PANDOC) --pdf-engine=$(PDF_ENGINE) --toc --metadata-file=book/metadata-en.yaml $(EN_SRC) -o build/pdf/edunumbers-en.pdf

print: build
	$(PANDOC) --pdf-engine=$(PDF_ENGINE) --toc --metadata-file=book/metadata-no.yaml --metadata-file=book/print.yaml $(NO_SRC) -o build/print/edunumbers-no-print.pdf
	$(PANDOC) --pdf-engine=$(PDF_ENGINE) --toc --metadata-file=book/metadata-en.yaml --metadata-file=book/print.yaml $(EN_SRC) -o build/print/edunumbers-en-print.pdf

kindle: epub
	@if command -v ebook-convert >/dev/null 2>&1; then \
		ebook-convert build/epub/edunumbers-no.epub build/kindle/edunumbers-no.azw3; \
		ebook-convert build/epub/edunumbers-en.epub build/kindle/edunumbers-en.azw3; \
	else \
		cp build/epub/edunumbers-no.epub build/kindle/edunumbers-no-kindle.epub; \
		cp build/epub/edunumbers-en.epub build/kindle/edunumbers-en-kindle.epub; \
		echo 'Calibre not installed; Kindle-compatible EPUB retained.'; \
	fi

validate:
	$(PYTHON) scripts/check_artifacts.py

quality:
	@command -v epubcheck >/dev/null 2>&1 || { echo "epubcheck is required for publication QA"; exit 1; }
	@command -v pdfinfo >/dev/null 2>&1 || { echo "pdfinfo is required for publication QA"; exit 1; }
	epubcheck build/epub/edunumbers-no.epub
	epubcheck build/epub/edunumbers-en.epub
	pdfinfo build/pdf/edunumbers-no.pdf >/dev/null
	pdfinfo build/pdf/edunumbers-en.pdf >/dev/null
	pdfinfo build/print/edunumbers-no-print.pdf >/dev/null
	pdfinfo build/print/edunumbers-en-print.pdf >/dev/null
	@if ls build/kindle/*.azw3 >/dev/null 2>&1; then \
		command -v ebook-meta >/dev/null 2>&1 || { echo "ebook-meta is required for AZW3 QA"; exit 1; }; \
		ebook-meta build/kindle/edunumbers-no.azw3 >/dev/null; \
		ebook-meta build/kindle/edunumbers-en.azw3 >/dev/null; \
	else \
		echo "Kindle output is EPUB fallback; EPUB validation already passed."; \
	fi

clean:
	rm -rf build
