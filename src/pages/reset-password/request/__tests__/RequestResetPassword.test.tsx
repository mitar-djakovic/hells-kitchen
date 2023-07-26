import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';

import RequestResetPassword from '../index';

test('RequestResetPassword page', () => {
	render(<RequestResetPassword />);
	const main = within(screen.getByText('RequestResetPassword'));
	expect(main).toBeDefined();
});
