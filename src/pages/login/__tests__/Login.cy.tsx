describe('<Login />', () => {
	beforeEach(() => {
		// eslint-disable-next-line no-undef
		cy.visit('http://localhost:3000/login');
	});
	it('displays two todo items by default', () => {
		// eslint-disable-next-line no-undef
		cy.get('div').contains('Login');
	});
});
