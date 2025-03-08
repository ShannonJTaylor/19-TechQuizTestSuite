describe('End-to-End Quiz Flow', () => {
    it('should allow the user to complete the quiz and see their score', () => {
      cy.visit('http://localhost:3000');
      
      // Start the quiz
      cy.contains('Start Quiz').click();
  
      // Answer questions (you may need to adjust based on the number of questions and the answers available)
      cy.contains('Answer 1').click(); // First question
      cy.contains('Answer 2').click(); // Second question
      // Repeat for all questions as necessary
  
      // Check if the quiz completed message and score are visible
      cy.contains('Quiz Completed').should('be.visible');
      cy.get('.alert.alert-success').should('contain', 'Your score');
    });
  });
  