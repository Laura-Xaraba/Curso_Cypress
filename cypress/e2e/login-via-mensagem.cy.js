describe('Login correto na página de login redirecionada pela ativação do botão "mensagem"', () => {
	beforeEach(() => {
		cy.visit('https://adopet-frontend-cypress.vercel.app/');
		cy.get('.header__message').click();
	});

	it('Deve acessar a página de login pelo redirecionamento via "mensagem", preencher os campos de login corretamente e autenticar o usuário na página', () => {
		cy.login('ana@email.com', 'Senha123');
	});
});
