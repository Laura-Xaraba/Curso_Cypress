describe('API Adopet', () => {
  //const tempoEspera = Math.random() * 1000;
  const authorization =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTY0M2NkNi03MTEyLTQxNWItOTVkMi0wNzkwNGIwZDFhMWMiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTc0MjIxNTMzOCwiZXhwIjoxNzQyNDc0NTM4fQ.-Y3CnUyFOqHJKtVovrN-MLxdGpRvkZT8paPfudV9hrA';

  it('Deve exibir as mensagens da API', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c',
      headers: { authorization },
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property('msg');
      //expect(res.duration).to.be.lte(tempoEspera);
    });
  });

  it('Nome do perfil', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/0dd7ead6-eb41-45dd-8a75-03b02285bbe7',
      headers: { authorization },
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property('perfil');
      expect(res.body.perfil.nome).to.be.equal('camila');
    });
  });
});
