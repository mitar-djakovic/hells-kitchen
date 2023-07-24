import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';

import ValidateEmailConfirmation from '../index';

test('ValidateEmailConfirmation page', () => {
	render(<ValidateEmailConfirmation />);
	const main = within(screen.getByText('ValidateEmailConfirmation'));
	expect(main).toBeDefined();
});
