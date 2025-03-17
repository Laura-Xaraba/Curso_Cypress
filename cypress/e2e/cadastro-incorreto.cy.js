describe('Cadastro incompleto na plataforma Adopet', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  });

  it('Deve preencher os campos de cadastro incorretamente eexibir mensagem ao usuário', () => {
    cy.cadastro_incorreto('Ana de Jesus');
    cy.verif_msg_cadastro(
      'É necessário informar um endereço de email',
      'Crie uma senha',
      'Repita a senha criada acima'
    );
  });
});
