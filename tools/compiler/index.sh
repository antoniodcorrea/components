# Builder for library
# Transpile css
find src -name '*.less' -not -path 'src/css/*' | while read line; do
    REPLACE=`echo $line | sed "s|\.less|\.css|"`
    (lessc "$line" "$REPLACE" &)
done
# Clean previous components folder
find components -name '*' -delete
# Compile TS
tsc -d
# Replace .less for .css
find components -type f \( -name "*.js" -o -name "*.d.ts" \) -exec sed -i '' 's#\.less'\''#\.css'\''#' {} ';'
cd src
# Remove css comments
find . -name '*.css'  -exec sed -i '' '/\/\*.*\*\//d;/\/\*/,/\*\// d' {} ';'
# Copy css and svgs
find .  -type f \( -name "*.css" -o -name "*.svg" \) -not -path './css/*' -exec rsync -R {} ../../components ';'
# Clean css
find . -name '*css' -delete
echo "Compiled success"