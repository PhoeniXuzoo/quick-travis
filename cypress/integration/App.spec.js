describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('is the button in the page', () => {
      cy.visit ('/');
      cy.get('[data-cy=submitBtn]').should('contain', 'Submit');
    });

    it('is the return value right', () => {
      cy.visit ('/');
      cy.get('[data-cy=submitBtn]').click();
      cy.get('[data-cy=Data]').should('contain' ,'illegal');
    });
  });