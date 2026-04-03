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
  cat << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Ilan Bigio</title>
    <link>https://ilanbigio.com</link>
    <atom:link href="https://ilanbigio.com/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Writing by Ilan Bigio</description>
    <language>en-us</language>
EOF
  for md_file in blog-md/*.md; do
    pandoc "$md_file" -f gfm+footnotes -t plain --template=templates/feed-item.xml
  done
  cat << 'EOF'
  </channel>
</rss>
EOF
} > feed.xml
echo "Built: feed.xml"
