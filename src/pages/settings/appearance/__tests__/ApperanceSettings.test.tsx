import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';

import AppearanceSettings from '../index';

test('RequestEmailConfirmation page', () => {
	render(<AppearanceSettings />);
	const main = within(screen.getByText('AppearanceSettings'));
	expect(main).toBeDefined();
});
