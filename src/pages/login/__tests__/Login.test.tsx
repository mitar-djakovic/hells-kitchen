import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { expect, test } from 'vitest';

import { theme } from '../../../config';
import Login from '../index';

test('login', () => {
	render(
		<ThemeProvider theme={theme}>
			<Login />
		</ThemeProvider>
	);
	const main = screen.getByTestId('login-page');
	expect(main).toBeDefined();
});
