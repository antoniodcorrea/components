module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(jsx?|tsx?)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: './tools/jest/tsconfig.json',
    },
  },
  testRegex: './src/*/.*test.js$',
  setupFiles: ['<rootDir>/tools/jest/setupTests.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|svg|ttf|woff|woff2)$': '<rootDir>/tools/jest/fileMock.js',
    '\\.(css|less)$': '<rootDir>/tools/jest/styleMock.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
