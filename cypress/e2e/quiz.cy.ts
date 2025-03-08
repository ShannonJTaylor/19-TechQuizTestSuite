describe("Tech Quiz App", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3001");  // Adjust if your app runs on a different port
    });
  
    it("Loads and displays random questions", () => {
      cy.intercept("GET", "/api/questions", {
        statusCode: 200,
        body: [
          { question: "What is React?", choices: ["Library", "Framework"], answer: "Library" },
          { question: "What is Node.js?", choices: ["Runtime", "Library"], answer: "Runtime" },
          // Add more mocked questions here
        ],
      }).as("getQuestions");
  
      cy.get("button").contains("Start Quiz").click();
      cy.wait("@getQuestions");
      
      cy.get(".question").should("have.length", 10); // Ensure 10 questions are displayed
    });
  
    it("Answers questions and shows score", () => {
      cy.get("button").contains("Start Quiz").click();
      cy.wait("@getQuestions");
  
      cy.get(".question").each(($question, index) => {
        cy.wrap($question).find("button").first().click();  // Simulate selecting the first choice
      });
  
      cy.contains("Your final score is").should("be.visible"); // Verify final score message
    });
  });
  






// describe("Tech Quiz App", () => {
//     beforeEach(() => {
//       cy.visit("http://localhost:3001"); // Adjust if necessary
//     });
  
//     it("Loads the homepage", () => {
//       cy.contains("Tech Quiz").should("be.visible");
//     });
  
//     it("Starts the quiz and completes it", () => {
//       cy.get("button").contains("Start Quiz").click();
//       cy.get(".question").should("have.length", 10);
  
//       // Answer each question (assuming choices are buttons)
//       cy.get(".choice").each(($el) => {
//         cy.wrap($el).first().click();
//       });
  
//       cy.contains("Your final score is").should("be.visible"); // Adjust based on UI
//     });
//   });
  