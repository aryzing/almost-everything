module.exports = {
  rootDir: '../../',
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/config/tests/tsconfig.tests.json',
    },
  },
  testMatch: ['**/?(*.)+(integration).ts?(x)'],
  setupFiles: ['<rootDir>/config/tests/setupIntegrationFetch.js'],
};
