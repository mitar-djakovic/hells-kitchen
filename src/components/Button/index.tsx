import { ReactNode } from 'react';

import { RegularButton, RoundButton, Text } from './Button.styled';

type Variant = 'contained' | 'outlined' | 'content';
type Status = 'primary' | 'warning' | 'error' | 'success' | 'neutral';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps {
	onClick: () => void;
	children?: string;
	fullWidth?: boolean;
	round?: boolean;
	disabled?: boolean;
	variant?: Variant;
	status?: Status;
	size?: Size;
	className?: string;
	startIcon?: ReactNode;
	endIcon?: ReactNode;
}

const Button = ({
	children,
	onClick,
	fullWidth = false,
	round = false,
	disabled = false,
	variant = 'contained',
	status = 'primary',
	size = 'md',
	className,
	startIcon,
	endIcon,
}: ButtonProps) => {
	const hasStartIcon = startIcon !== undefined;
	const hasEndIcon = endIcon !== undefined;

	return round ? (
		<RoundButton
			onClick={onClick}
			size={size}
			disabled={disabled}
			variant={variant}
			status={status}
			className={className}
		>
			{startIcon}
		</RoundButton>
	) : (
		<RegularButton
			onClick={onClick}
			fullWidth={fullWidth}
			size={size}
			disabled={disabled}
			variant={variant}
			status={status}
			className={className}
		>
			{startIcon}
			<Text hasStartIcon={hasStartIcon} hasEndIcon={hasEndIcon} size={size}>
				{children}
			</Text>
			{endIcon}
		</RegularButton>
	);
};

export type { Size, Status, Variant };
export default Button;
