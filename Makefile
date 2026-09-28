PANDOC ?= pandoc
PYTHON ?= python3
PDF_ENGINE ?= xelatex
NO_SRC := $(sort $(wildcard course/no/*.md))
EN_SRC := $(sort $(wildcard course/en/*.md))

.PHONY: all html epub pdf kindle check clean
all: check html epub pdf kindle

build:
	mkdir -p build/html/no build/html/en build/epub build/pdf build/kindle

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

kindle: epub
	@if command -v ebook-convert >/dev/null 2>&1; then \
		ebook-convert build/epub/edunumbers-no.epub build/kindle/edunumbers-no.azw3; \
		ebook-convert build/epub/edunumbers-en.epub build/kindle/edunumbers-en.azw3; \
	else \
		cp build/epub/edunumbers-no.epub build/kindle/edunumbers-no-kindle.epub; \
		cp build/epub/edunumbers-en.epub build/kindle/edunumbers-en-kindle.epub; \
		echo 'Calibre not installed; Kindle-compatible EPUB retained.'; \
	fi

clean:
	rm -rf build
