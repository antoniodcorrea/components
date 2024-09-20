./node_modules/.bin/webpack --config ./webpack/webpack.config.ts
mv ./dist/src/components/* ./dist
mv ./dist/src/hooks/* ./dist
rm -rf ./dist/src