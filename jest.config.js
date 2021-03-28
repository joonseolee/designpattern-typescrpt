module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)x?$',
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
      "^~(.*)$": "<rootDir>$1",
      "^src(.*)$": "<rootDir>src$1"
    },
  }