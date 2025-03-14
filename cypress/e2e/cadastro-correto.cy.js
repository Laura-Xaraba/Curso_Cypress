describe('Cadastro correto na plataforma Adopet', () => {
	beforeEach(() => {
		cy.visit('https://adopet-frontend-cypress.vercel.app/');
		cy.get('[data-test="register-button"]').click();
	});

	it('Deve visitar a página de cadastro e preencher corretamente os campos para cadastrar um novo usuário na plataforma', () => {
		cy.get('[data-test="input-name"]').type('Ana Clara de Jesus');
		cy.get('[data-test="input-email"]').type('anacjesus@email.com');
		cy.get('[data-test="input-password"]').type('Anac123');
		cy.get('input[name="confirm_password"]').type('Anac123');
		cy.get('[data-test="submit-button"]').click();
	});
});
