describe('dev', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('passes', () => {
    cy.contains('p', 'Get started').should('include.text', 'Get started');
  });

  it('a태그 링크 타고 넘어가기', () => {
    cy.get('a')
      .should((a) => {
        expect(a.attr('target', 'target')).to.equal('_blank');
        a.attr('target', '_self');
      })
      .click();
  });
});
