import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';

import ConfirmResetPassword from '../index';

test('ConfirmResetPassword page', () => {
	render(<ConfirmResetPassword />);
	const main = within(screen.getByText('ConfirmResetPassword'));
	expect(main).toBeDefined();
});
