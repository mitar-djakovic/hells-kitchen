import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { describe, expect, test, vi } from 'vitest';

import { theme } from '../../../config';
import Icon from '../../Icon';
import Button from '../index';

describe('Button', () => {
	test('should render default button', () => {
		const onClickMock = vi.fn();
		render(
			<ThemeProvider theme={theme}>
				<Button onClick={onClickMock}>Hello</Button>
			</ThemeProvider>
		);

		const button = screen.getByRole('button');

		expect(button).toBeDefined();
		expect(button.innerHTML).toBe('Hello');
	});
	test('should click on button', () => {
		const onClickMock = vi.fn();
		render(
			<ThemeProvider theme={theme}>
				<Button onClick={onClickMock}>Hello</Button>
			</ThemeProvider>
		);

		const button = screen.getByRole('button');

		fireEvent.click(button);
		expect(onClickMock).toHaveBeenCalledOnce();
	});
	test('should be disabled', () => {
		const onClickMock = vi.fn();
		render(
			<ThemeProvider theme={theme}>
				<Button disabled onClick={onClickMock}>
					Hello
				</Button>
			</ThemeProvider>
		);

		const button = screen.getByRole('button');

		fireEvent.click(button);

		expect(button).toHaveProperty('disabled');
		expect(onClickMock).not.toHaveBeenCalled();
	});
	test('should be round', async () => {
		const onClickMock = vi.fn();
		const { container } = render(
			<ThemeProvider theme={theme}>
				<Button round onClick={onClickMock}>
					<Icon name="dribble" />
				</Button>
			</ThemeProvider>
		);

		const button = screen.getByRole('button');
		const icon = container.getElementsByTagName('div');

		expect(button).toBeDefined();
		expect(icon).toBeDefined();
		expect(icon).not.toBeTypeOf('string');
	});
});
