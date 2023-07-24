import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';

import ProfileSettings from '../index';

test('ProfileSettings page', () => {
	render(<ProfileSettings />);
	const main = within(screen.getByText('ProfileSettings'));
	expect(main).toBeDefined();
});
