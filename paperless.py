import argparse
from pathlib import Path

from PyPDF2 import PdfReader


def extract_text(pdf_path: Path) -> str:
    reader = PdfReader(str(pdf_path))
    text = "".join(page.extract_text() or "" for page in reader.pages)
    return text


def main() -> None:
    parser = argparse.ArgumentParser(description="Extract text from a PDF")
    parser.add_argument("pdf", type=Path, help="Path to PDF file")
    args = parser.parse_args()

    if not args.pdf.exists():
        parser.error(f"File {args.pdf} does not exist")

    print(extract_text(args.pdf))


if __name__ == "__main__":
    main()
