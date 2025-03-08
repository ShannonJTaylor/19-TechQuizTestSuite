describe('End-to-End Quiz Flow', () => {
  it('should load the quiz page and start the quiz when "Start Quiz" button is clicked', () => {
    cy.visit('http://127.0.0.1:3001'); // Assuming this is the correct URL
    // Check if the "Start Quiz" button is visible
    cy.contains('Start Quiz').should('be.visible');
    
    // Start the quiz
    cy.contains('Start Quiz').click();
    // Wait for the first question to appear
    cy.get('.card p-4').should('contain', 'What'); // Adjust based on actual question text
  });

  it('should answer all questions and show the completion message with the score', () => {
    cy.visit('http://127.0.0.1:3001'); // Visit the quiz page
    cy.contains('Start Quiz').click();  // Click the start button
    
    // Answer all questions (replace with actual answer text from questions.json)
    cy.get('.btn').contains('8').click();  // Correct answer for the first question
    cy.get('.btn').contains('list').click();  // Correct answer for the second question
    cy.get('.btn').contains('def').click();  // Correct answer for the third question
    cy.get('.btn').contains('set()').click();  // Correct answer for the fourth question
    
    // Once all questions are answered, check for the completion message
    cy.contains('Quiz Completed').should('be.visible');
    cy.get('.alert.alert-success').should('contain', 'Your score');
  });
});
