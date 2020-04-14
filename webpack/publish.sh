cp ./package.json ./dist/package.json
cp ./README.md ./dist/README.md
cp ./.npmignore ./dist/.npmignore
cd ./dist
npm publish
rm ./package.json
rm ./.npmignore
cd ..