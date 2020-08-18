module.exports = {
  roots: ['<rootDir>'],
  testMatch: ['**/__tests__/tests/**/*.+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
