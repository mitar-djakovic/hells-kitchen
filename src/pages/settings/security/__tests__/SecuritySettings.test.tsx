import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';

import SecuritySettings from '../index';

test('SecuritySettings page', () => {
	render(<SecuritySettings />);
	const main = within(screen.getByText('SecuritySettings'));
	expect(main).toBeDefined();
});
