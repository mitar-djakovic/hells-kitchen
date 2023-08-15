import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { describe, expect, test, vi } from 'vitest';

import { theme } from '../../../config';
import Input from '../index';

describe('Input', () => {
	test('should render default input', () => {
		const onChange = vi.fn();

		render(
			<ThemeProvider theme={theme}>
				<Input value="value" name="name" onChange={onChange} />
			</ThemeProvider>
		);

		const input = screen.getByTestId('input');

		expect(input).toBeTruthy();
	});
});
