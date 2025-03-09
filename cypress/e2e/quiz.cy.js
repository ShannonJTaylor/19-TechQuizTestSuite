describe('Quiz functionality with correct answers', () => {
  it('Completes the quiz with the correct score', () => {
    cy.visit('/'); // Visit the quiz page

    // Start the quiz
    cy.contains('Start Quiz').click();

    // Answer all questions with correct answers
    const correctAnswers = [1, 2, 2, 2];
    correctAnswers.forEach((answerIndex) => {
      cy.get('.btn.btn-primary').eq(answerIndex).click();
      cy.wait(500); // Wait for the next question to appear      
    });

    // Step 3: Handle the last question separately (this triggers the end of the quiz)
    cy.get('.btn.btn-primary').eq(correctAnswers[3]).click(); // Last question click

    // Wait for the Quiz Completed page to load by checking for the visibility of the card
    cy.get('.card.p-4.text-center', { timeout: 30000 }) // Increase timeout if necessary
      .should('exist')  // Ensure the element exists in the DOM
      .should('be.visible');  // Make sure it's visible

      // You can use the `.then()` approach to ensure the button and the header are visible before interacting with them
    cy.get('button').contains('Take New Quiz').then(($btn) => {
      expect($btn).to.be.visible;  // Assert the button is visible
      cy.wrap($btn).click();       // Click the button after it's visible
    });

    // Now check for the header
    cy.contains('h2', 'Quiz Completed', { timeout: 10000 })
      .should('be.visible');  // Wait for 'Quiz Completed' to appear

    // Check the rest of the completion page content
    cy.get('.alert.alert-success')
      .should('contain', `Your score: ${correctAnswers.length}/${correctAnswers.length}`)
      .should('be.visible');
    cy.contains('button', 'Take New Quiz').should('be.visible').click();
  });
});


// describe('Quiz functionality with correct answers', () => {
//   it('Completes the quiz with the correct score', () => {
//     cy.visit('/'); // Visit the quiz page

//     // Start the quiz
//     cy.contains('Start Quiz').click();

//     // Answer all questions with correct answers
//     const correctAnswers = [1, 2, 2, 2];
//     correctAnswers.forEach((answerIndex) => {
//       cy.get('.btn.btn-primary').eq(answerIndex).click();
//       cy.wait(500); // Wait for the next question to appear      
//     });
//     // cy.get('.btn.btn-primary').eq(correctAnswers[0]).click(); // First question
//     // cy.wait(500);  
//     // cy.get('.btn.btn-primary').eq(correctAnswers[1]).click(); // Second question
//     // cy.wait(500);  
//     // cy.get('.btn.btn-primary').eq(correctAnswers[2]).click(); // Third question
//     // cy.wait(500);  

//     // Step 3: Handle the last question separately (this triggers the end of the quiz)
//     cy.get('.btn.btn-primary').eq(correctAnswers[3]).click(); // Last question click
//     cy.wait(2000);  // Ensure we wait long enough for the quiz to complete

//     cy.get('body').then(($body) => {
//       console.log('Body content at the end of quiz:', $body.html());
//     });

//     cy.contains('h2', 'Quiz Completed', { timeout: 10000 }).should('exist');

//     // Now check the final screen
//     cy.get('.card.p-4.text-center', { timeout: 30000 })
//       .should('be.visible')
//       .within(() => {
//         cy.contains('h2', 'Quiz Completed').should('be.visible');
//         cy.get('.alert.alert-success')
//           .should('contain', `Your score: ${correctAnswers.length}/${correctAnswers.length}`)
//           .should('be.visible');
//         cy.contains('button', 'Take New Quiz').should('be.visible').click();
//       });
//   });
// });