import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../config/index';
import Icon from '../Icon';

import Input from './index';

import '../../styles/global.css';

const meta = {
	title: 'Components/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Input>;

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
		value: 'Hello',
		fullWidth: false,
		type: 'text',
		placeholder: 'Placeholder',
		name: 'name',
		onChange: () => console.log('onChange'),
		onBlur: () => console.log('onBlur'),
		className: '',
		label: 'Label',
		startIcon: <Icon name="behance" size="lg" />,
		endIcon: <Icon name="behance" size="lg" />,
		message: 'Message',
		status: 'primary',
	},
};
