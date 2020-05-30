describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('is the button in the page', () => {
      cy.visit ('/');
      cy.get('[data-cy=submitBtn]').should('contain', 'Submit');
    });
  });