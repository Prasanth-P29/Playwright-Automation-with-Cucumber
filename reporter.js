const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: './reports/cucumber_report.json',
  output: './reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Name": "SauceDemo Automation",
    "Test Environment": "QA",
    "Browser": "Chromium",
    "Platform": "Windows 11",
    "Executed": "Playwright + Cucumber",
  },
};

reporter.generate(options);
