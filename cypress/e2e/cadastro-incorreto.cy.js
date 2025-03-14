describe('Cadastro incompleto na plataforma Adopet', () => {
	beforeEach(() => {
		cy.visit('https://adopet-frontend-cypress.vercel.app/');
		cy.get('[data-test="register-button"]').click();
	});

	it('Deve preencher os campos de cadastro incorretamente eexibir mensagem ao usuário', () => {
		cy.get('[data-test="input-name"]').type('Ana Clara de Jesus');
		cy.get('[data-test="submit-button"]').click();
		cy.contains('É necessário informar um endereço de email').should(
			'be.visible'
		);
		cy.contains('Crie uma senha').should('be.visible');
		cy.contains('Repita a senha criada acima').should('be.visible');
	});
});
