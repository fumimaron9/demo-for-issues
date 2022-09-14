module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: '@happy-dom/jest-environment',
  moduleNameMapper: {
    '^~/(.+)$': '<rootDir>/src/$1',
  },
}
