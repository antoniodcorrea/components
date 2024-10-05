rm -rf ./dist/*
./node_modules/.bin/webpack --config ./webpack/webpack.config.ts
paste -d "\n" ./dist/src/components/index.d.ts ./dist/src/hooks/index.d.ts > ./dist/index.d.ts_bk
mv ./dist/src/components/* ./dist
mv ./dist/src/hooks/* ./dist
rm ./dist/index.d.ts
mv ./dist/index.d.ts_bk ./dist/index.d.ts
rm -rf ./dist/src