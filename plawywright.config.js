// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  webServer: {
    command: 'npm start',
    url: 'http://localhost:8080',
    timeout: 180 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  testDir: 'e2e-tests',
});
