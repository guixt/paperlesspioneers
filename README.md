# Paperless Pioneers / Invoice Inc.

This repository contains two experimental code bases:

1. **Paperless Pioneers** – a small Python command line tool for
   extracting text from PDF files.
2. **Invoice Inc.** – the beginning of an interactive learning game
   about creating correct invoices. The game logic is implemented in
   TypeScript and can be evolved modularly.

## Paperless Pioneers

Install the Python dependencies and run the script with a PDF file to
print its text:

```bash
pip install -r requirements.txt
python paperless.py path/to/file.pdf
```

## Invoice Inc.

The TypeScript part is organised in a small module structure under
`src/`. Running `npx tsc` compiles the code to the `dist/` directory.
A basic demo scenario can then be executed with Node:

```bash
npx tsc
node dist/index.js
```

This will initialise a simple game sequence, validate a mock invoice and
print the current score. The implementation is intentionally modular so
that new events and rules can be added step by step under
`src/modules` and `src/core`.
