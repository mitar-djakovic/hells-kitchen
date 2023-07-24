import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';

import RequestEmailConfirmation from '../index';

test('RequestEmailConfirmation page', () => {
	render(<RequestEmailConfirmation />);
	const main = within(screen.getByText('RequestEmailConfirmation'));
	expect(main).toBeDefined();
});
