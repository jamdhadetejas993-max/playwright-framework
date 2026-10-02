import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration
 */
export default defineConfig({

  // Test folder
  testDir: './tests',

  // Run test files in parallel
  fullyParallel: true,

  // Fail CI build if test.only is accidentally used
  forbidOnly: !!process.env.CI,

  // Retry failed tests only on CI
  retries: process.env.CI ? 2 : 0,

  // Use 1 worker on CI, default locally
  workers: process.env.CI ? 1 : undefined,

  // HTML Report
  reporter: [
    ['html', {
      outputFolder: 'My-Report',
      open: 'always'
    }],
    ['allure-playwright', ],
  ],

  // Common settings for all tests
  use: {

    // Base URL
    // baseURL: 'https://www.saucedemo.com',

    // Capture trace when test fails and is retried
    trace: 'on-first-retry',
  },

  // Browser configurations
  projects: [

    // Chrome / Chromium
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    // Firefox
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    // Safari / WebKit
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

    // Mobile Chrome
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },

    // Mobile Safari
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    // Microsoft Edge
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     ...devices['Desktop Edge'],
    //     channel: 'msedge',
    //   },
    // },

    // Google Chrome
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     channel: 'chrome',
    //   },
    // },
  ],

  // Start local application before tests
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});