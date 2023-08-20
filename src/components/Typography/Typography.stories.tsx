import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../config';

import Typography from './index';

const meta = {
	title: 'Components/Typography',
	component: Typography,
	tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	decorators: [
		(StoryComponent) => (
			<ThemeProvider theme={theme}>
				<StoryComponent />
			</ThemeProvider>
		),
	],
	args: {
		variant: 'dxl',
		children: 'Some text',
	},
};
