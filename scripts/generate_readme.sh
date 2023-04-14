# Add links to each of the types in "types/{type}" with the name of the type to readme.md
# delete whatever is in the readme.md between "<!-- TYPES START -->" and "<!-- TYPES END -->"
# add all new links between the lines "<!-- TYPES START -->" and "<!-- TYPES END -->"

# collect all the types
types=$(ls types)

# replace all content between the lines "<!-- TYPES START -->" and "<!-- TYPES END -->" with the new links
sed -i '' '/<!-- TYPES START -->/,/<!-- TYPES END -->/d' readme.md
echo "<!-- TYPES START -->" >> readme.md
for type in $types
do
  echo "- [$type](types/$type)" >> readme.md
done
echo "<!-- TYPES END -->" >> readme.md

