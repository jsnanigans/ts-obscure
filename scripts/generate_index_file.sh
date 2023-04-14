# create index.ts that exports all the types

# collect all types
types=$(ls types)

# clear/crate index.ts
echo "" > index.ts
# add "export * from './{type}'" for each type to index.ts
for type in $types
do
  echo "export * from './types/$type'" >> index.ts
done
