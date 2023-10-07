const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true,
  projectId: 'bm2ffv',
  screenshotOnRunFailure: false,
  defaultCommandTimeout: 10000,
  reporter: 'cypress-multi-reporters',
  failOnStatusCode: false,
  reporterOptions: {
    configFile: 'dicta-shared/reporter-config.json',
  },
  env: {
    DEV_URL: 'https://sharing-nakdan-simple.netlify.app/',
    LIVE_URL: 'https://nakdan.dicta.org.il/',
    TOOL_TESTS: true,
    REQUESTS_TESTS: false,
    RECORD_KEY: '7abfbb2f-12de-4abd-ac31-b079f865c180',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://sharing-nakdan-simple.netlify.app/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
