# TechQuizTestSuite
## Overview
TechQuizTestSuite is a fully functioning Tech Quiz application built using the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to take a quiz consisting of 10 random tech-related questions and view their final score.

This repository enhances the functionality of the Tech Quiz app by adding comprehensive testing using Cypress for both component and end-to-end tests, ensuring the app’s reliability and robustness.

The application was provided as starter code, and the goal was to add and configure Cypress to test the core functionality of the quiz app.
--

## Table of Contents
[Features](#Features)
[Demo-Video](#Demo-Video)
[Installation](#Installation)
[Testing-with-Cypress](#Testing-with-Cypress)
[Cypress-Test-Structure](#Cypress-Test-Structure)
[Dependencies](#Dependencies)
[Contributing](#Contributing)
[License](#License)

---
## Demo Video
[Demo-Video](https://app.screencastify.com/v3/watch/LkYaAR0ugQKPQAjwLW7B)

---


## Features
- React Frontend: User interface for taking the quiz.
- MongoDB Database: Stores the questions for the quiz.
- Node.js/Express.js Backend: API to serve quiz questions.
- Cypress Tests:
- Component testing for quiz components.
- End-to-end testing for the full quiz experience.

## Installation
Clone the repository
```bash
cleargit clone https://github.com/your-username/TechQuizTestSuite.git
cd TechQuizTestSuite
```
Install Dependencies
```bash
npm install
```
This will install:
The required dependencies for the MERN stack app.
Cypress for testing purposes.

### Environment Setup
Ensure you have the necessary environment variables for your app to run. You may need to set up your .env file with appropriate configurations for MongoDB and other services.

### Start the Backend and Frontend
Run the development servers for both the frontend and backend:
```bash
# Start the backend (Node.js/Express.js)
npm run start:server

# Start the frontend (React app)
npm run start:client
```
By default, the backend will run on http://localhost:3001, and the frontend will run on http://localhost:3000.

## Testing with Cypress
### Running Component and End-to-End Tests
Run End-to-End (E2E) tests:
```bash
npm run test:e2e
```
Run Component tests:
```bash
npm run test:component
```
Run Both tests sequentially:
```bash
npm run test
```
This command will run both the E2E and Component tests in sequence.

## Dependencies
### Development Dependencies:
Cypress: For end-to-end and component testing.
"devDependencies": {
  "cypress": "^10.0.0"
}
### Backend Dependencies:
Express: Web server.
MongoDB: Database.
Mongoose: ORM for MongoDB.
Frontend Dependencies:
React: Frontend framework.
Axios: For API requests to the backend.

## Contributing
If you would like to contribute to the TechQuizTestSuite project, feel free to fork the repository and submit a pull request. Contributions are welcome, especially for additional tests or improvements!

## License
[This project is licensed under the MIT License.](https://opensource.org/licenses/MIT)

---
Built with ❤️ by ShannonJTaylor
