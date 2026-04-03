#!/bin/bash

# Build HTML posts
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

# Build RSS feed
{
  cat templates/feed-header.xml
  for md_file in blog-md/*.md; do
    pandoc "$md_file" -f gfm+footnotes -t plain --template=templates/feed-item.xml
  done
  cat templates/feed-footer.xml
} > feed.xml
echo "Built: feed.xml"
