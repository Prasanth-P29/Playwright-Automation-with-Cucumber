# 🎭 Playwright Automation Framework (TypeScript + POM)

This project is a structured Playwright test automation framework built with **TypeScript** using the **Page Object Model (POM)** design pattern.

It automates login and product verification on [SauceDemo](https://www.saucedemo.com).

---

## 📁 Folder Structure
├── features/ # Gherkin feature files (for BDD learning)
│ ├── login.feature
│ └── search.feature
│
├── step-definitions/ # Step definitions (Cucumber glue code - not executed)
│ ├── loginSteps.ts
│ └── searchSteps.ts
│
├── support/ # Hooks for setup/teardown (used in Cucumber style)
│ └── hooks.ts
│
├── pages/ # Page Object Model (POM) classes
│ ├── BasePage.ts
│ ├── LoginPage.ts
│ └── SearchPage.ts
│
├── tests/ # Playwright test specs (executed using playwright test)
│ ├── login.spec.ts
│ └── search.spec.ts
│
├── playwright.config.ts # Playwright configuration
├── tsconfig.json # TypeScript configuration
├── package.json
└── README.md


### ✅ **Tech Stack**
- **Playwright** → Browser automation & test runner  
- **TypeScript** → Type safety and modern syntax  
- **POM (Page Object Model)** → Reusable, clean UI interaction logic  

### ✅ **Concepts Used**
- **Encapsulation of locators & actions** inside page classes  
- **Test files only call methods**, not raw locators  
- **Assertions** handled by Playwright’s `expect`  


⚙️ Installation & Setup
1️⃣ Install dependencies
--> npm install

2️⃣ Install Playwright browsers
--> npx playwright install

▶️ Running Tests
Run all tests
--> npx playwright test

Run specific test file
--> npx playwright test tests/login.spec.ts

Run in UI mode (visual runner)
--> npx playwright test --ui
