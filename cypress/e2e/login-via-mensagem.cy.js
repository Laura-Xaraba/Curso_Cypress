describe('Login correto na página de login redirecionada pela ativação do botão "mensagem"', () => {
	beforeEach(() => {
		cy.visit('https://adopet-frontend-cypress.vercel.app/');
		cy.get('.header__message').click();
	});

	it('Deve acessar a página de login pelo redirecionamento via "mensagem", preencher os campos de login corretamente e autenticar o usuário na página', () => {
		cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
		cy.get('[data-test="input-loginPassword"]').type('Senha123');
		cy.get('[data-test="submit-button"]').click();
	});
});
