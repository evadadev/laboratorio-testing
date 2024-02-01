module.exports = {
  rootDir: '../../',
  verbose: true,
  restoreMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/test/setup-after.ts'],
};
