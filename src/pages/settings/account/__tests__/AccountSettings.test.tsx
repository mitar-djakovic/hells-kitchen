import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';

import AccountSettings from '../index';

test('AccountSettings page', () => {
	render(<AccountSettings />);
	const main = within(screen.getByText('AccountSettings'));
	expect(main).toBeDefined();
});
