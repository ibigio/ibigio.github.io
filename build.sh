#!/bin/bash

SITE_URL="https://ilanbigio.com"
SITE_TITLE="Ilan Bigio"
FEED_FILE="feed.xml"

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

# Generate RSS feed from markdown frontmatter
{
  echo '<?xml version="1.0" encoding="UTF-8"?>'
  echo '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">'
  echo '  <channel>'
  echo "    <title>$SITE_TITLE</title>"
  echo "    <link>$SITE_URL</link>"
  echo "    <atom:link href=\"$SITE_URL/feed.xml\" rel=\"self\" type=\"application/rss+xml\"/>"
  echo '    <description>Writing by Ilan Bigio</description>'
  echo '    <language>en-us</language>'

  for md_file in blog-md/*.md; do
    # Extract frontmatter fields
    title=$(awk '/^---/{f=!f;next} f && /^title:/{sub(/^title:[[:space:]]*/,""); print; exit}' "$md_file")
    slug=$(awk '/^---/{f=!f;next} f && /^slug:/{sub(/^slug:[[:space:]]*/,""); print; exit}' "$md_file")
    date_str=$(awk '/^---/{f=!f;next} f && /^date:/{sub(/^date:[[:space:]]*/,""); print; exit}' "$md_file")
    # Extract first non-empty paragraph after frontmatter as description
    desc=$(awk 'BEGIN{in_fm=0;done_fm=0} /^---/{in_fm=!in_fm; if(!in_fm && !done_fm) done_fm=1; next} done_fm && /^.+/{print; exit}' "$md_file")

    pub_date=$(date -d "1 $date_str" -R 2>/dev/null || date -d "$date_str" -R 2>/dev/null || date -R)

    echo '    <item>'
    echo "      <title>$(echo "$title" | sed 's/&/\&amp;/g; s/</\&lt;/g; s/>/\&gt;/g')</title>"
    echo "      <link>$SITE_URL/blog/$slug</link>"
    echo "      <guid>$SITE_URL/blog/$slug</guid>"
    echo "      <pubDate>$pub_date</pubDate>"
    echo "      <description>$(echo "$desc" | sed 's/&/\&amp;/g; s/</\&lt;/g; s/>/\&gt;/g; s/'"'"'/\&apos;/g')</description>"
    echo '    </item>'
  done

  echo '  </channel>'
  echo '</rss>'
} > "$FEED_FILE"

echo "Built: $FEED_FILE"
