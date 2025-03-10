describe('Quiz functionality with correct answers', () => {
  it('Completes the quiz with the correct score', () => {
    cy.visit('/'); // Visit the quiz page

    // Start the quiz
    cy.contains('Start Quiz').click();

    // Answer all questions with correct answers
    const correctAnswers = [1, 2, 2, 2, 0, 3, 1, 0, 1,3];
    correctAnswers.forEach((answerIndex) => {
      cy.get('.btn.btn-primary').eq(answerIndex).click();
      cy.wait(500); // Wait for the next question to appear      
    });

   
 
 
    // Wait for the Quiz Completed page to load by checking for the visibility of the card
    
    cy.get('h2').contains('Quiz Completed').then(($h2) => {
      expect($h2).to.be.visible;
    })
    
   

      // You can use the `.then()` approach to ensure the button and the header are visible before interacting with them
    cy.get('button').contains('Take New Quiz').then(($btn) => {
      expect($btn).to.be.visible;  // Assert the button is visible
      cy.wrap($btn).click();       // Click the button after it's visible
    });


  });
});


