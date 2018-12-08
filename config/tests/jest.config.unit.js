module.exports = {
  rootDir: '../../',
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/config/tests/tsconfig.unit.json',
    },
  },
};
