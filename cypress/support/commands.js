Cypress.Commands.add('login', (email, senha) => {
	cy.get('[data-test="input-loginEmail"]').type(email);
	cy.get('[data-test="input-loginPassword"]').type(senha);
	cy.get('[data-test="submit-button"]').click();
});

Cypress.Commands.add('verif_msg_login', (msg_email, msg_senha) => {
    cy.contains(msg_email).should('be.visible');
    cy.contains(msg_senha).should('be.visible');
})

Cypress.Commands.add('cadastro', (nome, email, senha) => {
    cy.get('[data-test="input-name"]').type(nome);
    cy.get('[data-test="input-email"]').type(email);
    cy.get('[data-test="input-password"]').type(senha);
    cy.get('input[name="confirm_password"]').type(senha);
    cy.get('[data-test="submit-button"]').click();
})

Cypress.Commands.add('cadastro_incorreto', (nome) => {
    cy.get('[data-test="input-name"]').type(nome);
    cy.get('[data-test="submit-button"]').click();
})

Cypress.Commands.add('verif_msg_cadastro', (msg_email, msg_senha, msg_repSenha) => {
    cy.contains(msg_email).should('be.visible');
    cy.contains(msg_senha).should('be.visible');
    cy.contains(msg_repSenha).should('be.visible');
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
