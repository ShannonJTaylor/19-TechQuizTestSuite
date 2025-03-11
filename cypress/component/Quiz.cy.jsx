import React from 'react';
import { mount } from '@cypress/react';  // Mount function to render the component
import  Quiz  from '../../client/src/components/Quiz'; // The Quiz component you want to test

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.fixture('questions.json').then((questions) => {
      cy.intercept('GET', '/api/questions/random', { 
        statusCode: 200, 
        body: questions 
      }).as('getQuestions');
    });
  });
  
  it('should load the quiz page with "Start Quiz" button', () => {
    mount(<Quiz />);  // Render the Quiz component
    cy.contains('Start Quiz').should('be.visible');
    });
  
  it('should display questions after starting the quiz', () => {
    mount(<Quiz />);       
    // Start the quiz
    cy.contains('Start Quiz').click({ slowMo: 3500 });
   
    // Wait for the question to appear
    cy.wait('@getQuestions');  //Wait for mocked API call to complete
    //cy.get('.card p-4').should('contain', 'What').or('contain', 'Which'); // Adjust based on actual question text
    cy.get('.card h2').should('be.visible');
     });
  
     it('should update score when answering correctly', () => {
    mount(<Quiz />);  // Mount the component  
    cy.contains('Start Quiz').click({ slowMo: 3500 });  // Start the quiz
    
    cy.wait('@getQuestions');  // Wait for questions
    cy.get('.btn').eq(1).click({ slowMo: 3500 });  // clicks teh second button
    
    cy.get('.alert.alert-success').should('not.exist');  // Check if success message doesn't show yet
  });
  
    it('should show "Quiz Completed" after answering all questions', () => {
      mount(<Quiz />);  // Mount the component      
      // Start the quiz
      cy.contains('Start Quiz').click({ slowMo: 3500 });
      
      cy.wait('@getQuestions');  // Wait for the mock API call  
      // Answer all questions (repeat the answer process for each question)
      cy.get('.btn').eq(1).click({ slowMo: 2000 });  // Correct answer for first question, second button
      
      cy.get('.btn').eq(2).click({ slowMo: 2000 });  // Correct answer for second question, third button
      
      cy.get('.btn').eq(2).click({ slowMo: 2000 });  // Correct answer for third question, third button
      
      cy.get('.btn').eq(2).click({ slowMo: 2000 });  // Correct answer for fourth questiom, third button
      
      // Once all questions are answered, check for the completion message
      cy.contains('Quiz Completed').should('be.visible');
      cy.get('.alert.alert-success').should('contain', 'Your score');
    });
  });
  