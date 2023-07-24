import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';

import Signup from '../index';

test('Signup page', () => {
	render(<Signup />);
	const main = within(screen.getByText('Signup'));
	expect(main).toBeDefined();
});
