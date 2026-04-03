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
fm() { awk "/^---/{f=!f;next} f && /^$1:/{sub(/^$1:[[:space:]]*/,\"\"); print; exit}" "$2"; }
first_para() { awk 'BEGIN{f=0;past=0} /^---/{f=!f;if(!f)past=1;next} past&&/^.+/{print;exit}' "$1"; }
xml_esc() { sed 's/&/\&amp;/g; s/</\&lt;/g; s/>/\&gt;/g; s/"/\&quot;/g'; }

{
  printf -- '---\nposts:\n'
  for md_file in blog-md/*.md; do
    printf '  - slug: "%s"\n'        "$(fm slug "$md_file")"
    printf '    pub-date: "%s"\n'    "$(date -d "1 $(fm date "$md_file")" -R 2>/dev/null || date -R)"
    printf '    title: "%s"\n'       "$(fm title "$md_file" | xml_esc)"
    printf '    description: "%s"\n' "$(first_para "$md_file" | xml_esc)"
  done
  printf -- '---\n'
} | pandoc --template=templates/feed.xml -f markdown -t plain -o feed.xml

echo "Built: feed.xml"
