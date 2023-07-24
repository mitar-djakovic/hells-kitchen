import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';

import Comic from '../index';

test('Comic page', () => {
	render(<Comic />);
	const main = within(screen.getByText('Comic'));
	expect(main).toBeDefined();
});
