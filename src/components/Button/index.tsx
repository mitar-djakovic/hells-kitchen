import { ReactElement } from 'react';

import { RegularButton, RoundButton } from './Button.styled';

type Variant = 'contained' | 'outlined' | 'content';
type Status = 'primary' | 'warning' | 'error' | 'success' | 'neutral';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface StandardButtonProps {
	onClick: () => void;
	disabled?: boolean;
	variant?: Variant;
	status?: Status;
	size?: Size;
	className?: string;
}

interface RoundButtonProps extends StandardButtonProps {
	round: true;
	startIcon?: never;
	endIcon?: never;
	children: ReactElement;
	fullWidth?: never;
}

interface RegularButtonProps extends StandardButtonProps {
	round?: false;
	startIcon?: ReactElement;
	endIcon?: ReactElement;
	children: string;
	fullWidth?: boolean;
}

type ButtonProps = RegularButtonProps | RoundButtonProps;

const Button = ({
	children,
	onClick,
	fullWidth = false,
	round,
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
			{children}
		</RoundButton>
	) : (
		<RegularButton
			onClick={onClick}
			$fullWidth={fullWidth}
			size={size}
			disabled={disabled}
			variant={variant}
			status={status}
			className={className}
			$hasStartIcon={hasStartIcon}
			$hasEndIcon={hasEndIcon}
		>
			{startIcon}
			{children}
			{endIcon}
		</RegularButton>
	);
};

export type { Size, Status, Variant };
export default Button;
