import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';

import Explore from '../index';

test('Explore page', () => {
	render(<Explore />);
	const main = within(screen.getByText('Explore'));
	expect(main).toBeDefined();
});
