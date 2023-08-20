import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { expect, test } from 'vitest';

import { theme } from '../../../config';
import Signup from '../index';

test('Signup page', () => {
	render(
		<ThemeProvider theme={theme}>
			<Signup />
		</ThemeProvider>
	);
	const main = screen.getByTestId('signup-page');
	expect(main).toBeDefined();
});
