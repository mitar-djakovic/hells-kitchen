import React from 'react';

import Login from './index';

describe('<Login />', () => {
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		// eslint-disable-next-line no-undef
		cy.mount(<Login />);
	});
});
