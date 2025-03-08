import React from "react";
import { mount } from "cypress/react";
import Quiz from "../../client/src/components/Quiz";  // Adjust path if needed

describe("Quiz Component", () => {
  it("renders correctly", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").should("be.visible"); // Example test
  });

  it("displays questions when started", () => {
    mount(<Quiz />);
    cy.get("button").contains("Start Quiz").click();
    cy.get(".question").should("have.length", 10); // Ensure 10 questions appear
  });
});
