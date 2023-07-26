import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';

import UserProfile from '../index';

test('UserProfile page', () => {
	render(<UserProfile />);
	const main = within(screen.getByText('UserProfile'));
	expect(main).toBeDefined();
});
