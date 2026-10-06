const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  fullyParallel: true,

  // Retry failed tests only in GitHub CI
  retries: process.env.CI ? 2 : 0,

  // One worker is more stable for a beginner/small CI setup
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html'],
    ['list'],
    ['github']
  ],

  use: {
    baseURL: process.env.BASE_URL || 'https://your-test-site.com',

    // Keeps useful evidence if a test fails
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});