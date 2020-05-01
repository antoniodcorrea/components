cp ./package.json ./dist/package.json
cp ./README.md ./dist/README.md
cp ./.npmrc ./dist/.npmrc
cp ./.npmignore ./dist/.npmignore
cd ./dist
npm publish
rm ./package.json
rm ./.npmignore
cd ..