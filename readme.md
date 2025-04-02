# QA Automation Portfolio - API Project (Cypress + GitHub Actions)

This project is part of my QA automation portfolio and showcases my ability to create robust, scalable, and well-structured API test automation using **Cypress**. It includes both **positive and negative scenarios**, a clean folder structure, custom commands, and integration with **GitHub Actions** for CI/CD.

Tested API: [https://restful-booker.herokuapp.com]

---

## 🚀 Technologies and Tools Used

- **Cypress** - Modern testing framework (even for API)
- **Node.js / NPM** - Environment and package manager
- **GitHub Actions** - CI/CD pipeline for automated test execution
- **VS Code** - Development environment

---

## 📁 Project Structure

```
project-root/
├── cypress/
│   ├── e2e/                   # Organized test cases
│   │   ├── auth-crud.cy.js        # Full CRUD flow with authentication
│   │   └── failed-crud.cy.js      # Negative scenarios and validations
│   │
│   ├── fixtures/              # External test data
│   │   ├── auth.json
│   │   ├── authfail.json
│   │   ├── post1.json
│   │   ├── post2.json
│   │   └── postfail.json
│   │
│   └── support/
│       ├── commands.js        # Custom Cypress commands
│       └── e2e.js             # Support file for Cypress
│
├── .github/
│   └── workflows/
│       └── pipeline.yml       # GitHub Actions configuration
│
├── cypress.config.js         # Cypress configuration
├── package.json              # Scripts and dependencies
├── package-lock.json         # Dependency lockfile
├── .gitignore
└── README.md                 # This file ✨
```

---

## 🧪 Test Scenarios Implemented

### ✅ Successful Tests (`auth-crud.cy.js`)

1. **Authenticate** using valid credentials
2. **Create** two records with different data
3. **Read** all records and verify data
4. **Read** a specific record
5. **Update** a record using token
6. **Delete** a record using token

### ❌ Negative Tests (`failed-crud.cy.js`)

1. **Invalid login** with incorrect credentials
2. **Unauthorized POST** request (no token)
3. **POST with incomplete data** (missing fields)
4. **GET non-existent resource**
5. **PUT/DELETE with invalid or missing token**

---

## ⚙️ How to Run This Project

### 1. Clone the repository
```bash
cd your-folder
git clone https://github.com/rafael-de-paiva/portfolio-qa-api-cypress.git
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run tests (with Cypress UI or headlessly)

- **Open Cypress GUI:**
```bash
npx cypress open
```

- **Run all tests headlessly:**
```bash
npx cypress run
```

---

## 🤖 CI/CD Pipeline (GitHub Actions)

- Pipeline is triggered **automatically on pull requests to `main`**
- Uses the official Cypress GitHub Action
- Ensures clean installation and automated run of tests for every PR

```yaml
on:
  pull_request:
    branches: [main]
```

---

## ✍️ Technical Highlights

- **Custom Commands**: Simplified request calls with `cy.postAuth`, `cy.postInfo`, `cy.getInfo`, etc.
- **Fixtures**: Separated test data from test logic for maintainability
- **Separation of Concerns**: Clear distinction between success/failure tests
- **Real API Behavior Handling**: Includes status checks, empty bodies, and edge case validations

## 🙏 Thanks for Visiting

Thanks for checking out my project! Feel free to connect or reach out:

- Email: [rafael123paiva@gmail.com]
- LinkedIn: [https://www.linkedin.com/in/rafael-paiva-49b88430a/]

---

With dedication and attention to detail,  
**Rafael** 🐉
