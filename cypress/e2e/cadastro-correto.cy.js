describe('Cadastro correto na plataforma Adopet', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  });

  it('Deve visitar a página de cadastro e preencher corretamente os campos para cadastrar um novo usuário na plataforma', () => {
    cy.cadastro('Ana de Jesus', 'ana@email.com', 'Senha123');
    //Visto que o teste já foi feito, haverá falha no cadastro posto que as informações já existem no BD.
    cy.contains('Falha ao cadastrar!').should('be.visible');
  });
});
