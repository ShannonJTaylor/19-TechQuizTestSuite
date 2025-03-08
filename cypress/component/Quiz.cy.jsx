describe('Quiz Component', () => {
    cy.stub(getQuestions, 'getQuestions').resolves([
        {
          question: 'What is 2 + 2?',
          answers: [
            { text: '4', isCorrect: true },
            { text: '5', isCorrect: false },
          ],
        },
        {
          question: 'What is the capital of France?',
          answers: [
            { text: 'Paris', isCorrect: true },
            { text: 'London', isCorrect: false },
          ],
        },
      ]);
    
    it('should load the quiz page with "Start Quiz" button', () => {
      cy.visit('http://localhost:3000'); // Assuming this is the correct URL
  
      // Check if the "Start Quiz" button is visible
      cy.contains('Start Quiz').should('be.visible');
    });
  
    it('should display questions after starting the quiz', () => {
      cy.visit('http://localhost:3000');
      
      // Start the quiz
      cy.contains('Start Quiz').click();
  
      // Wait for the question to appear
      cy.get('.card p-4').should('contain', 'What is'); // Adjust based on actual question text
    });
  
    it('should update score when answering correctly', () => {
      cy.visit('http://localhost:3000');
      
      // Start the quiz
      cy.contains('Start Quiz').click();
  
      // Click a correct answer
      cy.contains('Answer 1').click(); // Assuming the first button is the correct answer
      cy.get('.alert.alert-success').should('contain', 'Your score: 1/10');
    });
  
    it('should show "Quiz Completed" after answering all questions', () => {
      cy.visit('http://localhost:3000');
      
      // Start the quiz
      cy.contains('Start Quiz').click();
  
      // Answer all questions (repeat the answer process for each question)
      cy.contains('Answer 1').click();
      cy.contains('Answer 2').click(); // Add more answers if necessary
  
      // Once all questions are answered, check for the completion message
      cy.contains('Quiz Completed').should('be.visible');
      cy.get('.alert.alert-success').should('contain', 'Your score');
    });
  });
  