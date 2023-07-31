import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../config/index';

import Icon from './index';

const meta = {
	title: 'Components/Icon',
	component: Icon,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Icon>;

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
		name: 'behance',
		size: 'md',
		className: '',
	},
};
