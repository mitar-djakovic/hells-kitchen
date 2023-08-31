import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';

import Collection from '../index';

test('Collection page', () => {
	render(<Collection />);
	const main = within(screen.getByText('Collection'));
	expect(main).toBeDefined();
});
