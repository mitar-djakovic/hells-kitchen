describe('<Login />', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/login');
	});
	it('displays two todo items by default', () => {
		cy.get('div').contains('Login');
	});
});
