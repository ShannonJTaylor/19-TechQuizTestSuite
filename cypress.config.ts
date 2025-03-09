import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3001", // Set the base URL for your app
    supportFile: "cypress/support/index.js", // Adjust if you have a support file
    specPattern: "cypress/e2e/**/*.js", // Set the pattern for your test files
    video: false, // Disable video recording during tests
    
    retries: {
      runMode: 2, // Retry failed tests in the run mode
      openMode: 0, // Do not retry failed tests in the interactive mode
    },
    env: {
      // You can set custom environment variables here
      API_URL: "http://localhost:3001", // Example API URL
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
