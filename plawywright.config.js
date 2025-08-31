module.exports = {
  webServer: {
    command: 'npm run start-prod',
    port: 5000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
}
