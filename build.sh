#!/bin/bash

# Loop through all markdown files in blog-md/
for md_file in blog-md/*.md; do
  # Extract filename without path and extension
  filename=$(basename "$md_file" .md)

  # Convert markdown to HTML using pandoc
  pandoc "$md_file" \
    -f gfm+footnotes \
    -t html \
    -s \
    --syntax-highlighting=none \
    --template=templates/post.html \
    -o "blog/$filename.html"

  echo "Built: $md_file -> blog/$filename.html"
done
