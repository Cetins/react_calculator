describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display of running total after button update', () => {
    cy.get('#number4').click();
    cy.get('#number1').click();
    cy.get('.display').should('contain', '41');
  });

  it('update the display after arithmetical operations', () => {
    cy.get('#number8').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-add').click();
    cy.get('.display').should('contain', '5');
  });

  it('should display positive results', () => {
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '45');
  });

  it('should display negative results', () => {
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-4');
  });

  it('should display decimal results', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2.5');
  });

  it('should display very large numbers', () => {
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('#number5').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number4').click();
    cy.get('#number6').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '84684900');
  });

  it('should handle dividence by 0', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Not a number');
  });
})