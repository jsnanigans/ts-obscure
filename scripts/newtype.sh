param1=$1
name=$(echo $param1)
cp -r template types/$name
sed -i '' "s/Name/$name/g" types/$name/readme.md
