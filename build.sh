#!/bin/bash

SITE_URL="https://ilanbigio.com"
SITE_TITLE="Ilan Bigio"
FEED_FILE="feed.xml"

xml_escape() { sed 's/&/\&amp;/g; s/</\&lt;/g; s/>/\&gt;/g'; }

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

# Build RSS items
items=""
for md_file in blog-md/*.md; do
  fm() { awk "/^---/{f=!f;next} f && /^$1:/{sub(/^$1:[[:space:]]*/,\"\"); print; exit}" "$md_file"; }
  title=$(fm title | xml_escape)
  slug=$(fm slug)
  pub_date=$(date -d "1 $(fm date)" -R 2>/dev/null || date -R)
  desc=$(awk 'BEGIN{f=0;past=0} /^---/{f=!f; if(!f)past=1; next} past && /^.+/{print;exit}' "$md_file" | xml_escape)
  items+="    <item>
      <title>$title</title>
      <link>$SITE_URL/blog/$slug</link>
      <guid>$SITE_URL/blog/$slug</guid>
      <pubDate>$pub_date</pubDate>
      <description>$desc</description>
    </item>
"
done

# Write feed
cat > "$FEED_FILE" <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>$SITE_TITLE</title>
    <link>$SITE_URL</link>
    <atom:link href="$SITE_URL/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Writing by Ilan Bigio</description>
    <language>en-us</language>
$items  </channel>
</rss>
EOF

echo "Built: $FEED_FILE"
