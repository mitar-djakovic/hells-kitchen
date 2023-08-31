import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';

import Collections from '../index';

test('Collections page', () => {
	render(<Collections />);
	const main = within(screen.getByText('Collections'));
	expect(main).toBeDefined();
});
