describe('Login incorreto na página de login', () => {
	beforeEach(() => {
		cy.visit('https://adopet-frontend-cypress.vercel.app/');
		cy.get('[data-test="login-button"]').click();
	});

	it('Deve preencher os campos de login com informações fora do padrão e exibir mensagem de erro para o usuário', () => {
		cy.login('@ana.com', 'ana');
		cy.verif_msg_login(
			'Por favor, verifique o email digitado',
			'A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres'
		);
	});
});
