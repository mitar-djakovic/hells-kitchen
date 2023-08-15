import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../config/index';
import Icon from '../Icon';

import Button from './index';

import '../../styles/global.css';

const meta = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	decorators: [
		(StoryComponent) => (
			<ThemeProvider theme={theme}>
				<StoryComponent />
			</ThemeProvider>
		),
	],
	args: {
		children: 'Hello',
		size: 'md',
		fullWidth: false,
		round: false,
		disabled: false,
		variant: 'contained',
		status: 'primary',
		className: '',
		startIcon: <Icon name="behance" size="md" />,
		endIcon: <Icon name="behance" size="md" />,
	},
};
