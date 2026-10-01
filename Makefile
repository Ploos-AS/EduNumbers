PANDOC ?= pandoc
PYTHON ?= python3
PUBLISHING_CLI ?= .ploos-publishing/scripts/ploos_publish.py
PAPERBACK_PROFILE ?= .ploos-publishing/metadata/paperback-kdp-white.yaml
PDF_ENGINE ?= xelatex
NO_SRC := $(sort $(wildcard course/no/*.md))
EN_SRC := $(sort $(wildcard course/en/*.md))

.PHONY: all html epub pdf print paperback kindle check validate pod-qa quality clean
all: check html epub pdf print kindle validate pod-qa quality

build:
	mkdir -p build/html/no build/html/en build/epub build/pdf build/print build/paperback build/kindle

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

paperback: print
	@command -v rsvg-convert >/dev/null 2>&1 || { echo "rsvg-convert is required for paperback covers"; exit 1; }
	@test -f $(PUBLISHING_CLI) || { echo "Ploos publishing CLI not found: $(PUBLISHING_CLI)"; exit 1; }
	@NO_PAGES=$(pdfinfo build/print/edunumbers-no-print.pdf | awk '/^Pages:/ {print $2}'); \
	$(PYTHON) $(PUBLISHING_CLI) paperback-cover publication.yaml --language nb --pages $NO_PAGES --config $(PAPERBACK_PROFILE) -o build/paperback/edunumbers-no-cover.pdf
	@EN_PAGES=$(pdfinfo build/print/edunumbers-en-print.pdf | awk '/^Pages:/ {print $2}'); \
	$(PYTHON) $(PUBLISHING_CLI) paperback-cover publication.yaml --language en --pages $EN_PAGES --config $(PAPERBACK_PROFILE) -o build/paperback/edunumbers-en-cover.pdf

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

pod-qa: paperback
	$(PYTHON) scripts/check_pod.py build/print/edunumbers-no-print.pdf
	$(PYTHON) scripts/check_pod.py build/print/edunumbers-en-print.pdf
	pdfinfo build/paperback/edunumbers-no-cover.pdf >/dev/null
	pdfinfo build/paperback/edunumbers-en-cover.pdf >/dev/null

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
