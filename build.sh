#!/usr/bin/env bash
set -e

esbuild ./src/root/**/*.js --outdir=./docs --format=esm --minify --target=es2022

find ./src/root -name '*.html' -print0 | while IFS= read -r -d '' file; do
out="./docs/${file#src/}"
mkdir -p "$(dirname "$out")"
html-minifier-terser \
  --collapse-whitespace \
  --remove-comments \
  "$file" -o "$out"
done


