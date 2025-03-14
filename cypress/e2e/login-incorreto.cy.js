describe('Login incorreto na página de login', () => {
	beforeEach(() => {
		cy.visit('https://adopet-frontend-cypress.vercel.app/');
		cy.get('[data-test="login-button"]').click();
		cy.intercept(
			'POST',
			'https://adopet-api-i8qu.onrender.com/adotante/login',
			{
				statusCode: 400,
			}
		).as('stubPost');
	});

	it('Deve preencher os campos de login com informações fora do padrão e exibir mensagem de erro para o usuário', () => {
		cy.login('@ana.com', 'ana');
		cy.verif_msg_login(
			'Por favor, verifique o email digitado',
			'A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres'
		);
	});

	it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
		cy.login('ana@email.com', 'Senha123');
		cy.wait('@stubPost');
		cy.contains('Falha no login. Consulte suas credenciais.').should(
			'be.visible'
		);
	});
});
