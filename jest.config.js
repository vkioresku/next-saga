module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '\\.svg': '<rootDir>/test/svgrMock.js',
  },
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/test/svgrMock.js',
    '^@(Test)(.*)$': '<rootDir>/test/$2',
  },
};
