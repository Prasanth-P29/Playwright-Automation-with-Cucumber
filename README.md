# 🧪 Playwright Automation Framework with Cucumber (BDD)

This project demonstrates an **end-to-end Playwright automation framework integrated with Cucumber (Behavior-Driven Development)**, using the **Page Object Model (POM)** structure.  
It includes **login** and **search** feature examples, clean folder organization, and an **HTML test report**.

---

## 📁 Folder Structure

Playwright Automation with Cucumber/
│
├── features/
│ ├── login.feature
│ ├── search.feature
│
├── pages/
│ ├── BasePage.ts
│ ├── LoginPage.ts
│ ├── SearchPage.ts
│
├── step-definitions/
│ ├── loginSteps.ts
│ ├── searchSteps.ts
│
├── support/
│ ├── hooks.ts
│
├── reports/
│ ├── cucumber_report.json
│ └── generate-report.js
│
├── package.json
├── tsconfig.json
└── README.md

yaml
Copy code

---

## ⚙️ Setup Instructions

### 1️⃣ Install Dependencies
Run this in your project root:

```bash
npm install
If not already installed:

bash
Copy code
npm install @cucumber/cucumber ts-node typescript playwright multiple-cucumber-html-reporter --save-dev
🚀 Running the Tests
Run Cucumber Tests
bash
Copy code
npm test
This command will:

Run your .feature files using Cucumber

Use Playwright for browser automation

Generate a JSON report file at reports/cucumber_report.json

🧾 Generating the HTML Report
Option 1: Run separately
After tests complete, generate the HTML report:

bash
Copy code
npm run report
Option 2: Auto-generate (recommended)
In your package.json, the test script is chained:

json
Copy code
"scripts": {
  "test": "npx @cucumber/cucumber --require-module ts-node/register --require ./step-definitions/**/*.ts --require ./support/*.ts --format json:./reports/cucumber_report.json && npm run report",
  "report": "node ./reports/generate-report.js"
}