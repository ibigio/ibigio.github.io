#!/bin/bash

for md_file in blog-md/*.md; do
  filename=$(basename "$md_file" .md)
  pandoc "$md_file" \
    -f gfm+footnotes \
    -t html \
    -s \
    --syntax-highlighting=none \
    --template=templates/post.html \
    -o "blog/$filename.html"
  echo "Built: $md_file -> blog/$filename.html"
done
