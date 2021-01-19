const setupTestsFile = true;

module.exports = {
  setupFilesAfterEnv: setupTestsFile ? ['<rootDir>/jest.setup.js'] : [],
  ...require('@snowpack/app-scripts-react/jest.config.js')(),
};