import { Name } from '../../types';
import Icon from '../Icon';

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
	startIcon?: Name;
	endIcon?: Name;
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
	console.log('startIcon', startIcon !== 'none');
	return round ? (
		<RoundButton
			onClick={onClick}
			size={size}
			disabled={disabled}
			variant={variant}
			status={status}
			className={className}
		>
			{startIcon && <Icon name={startIcon} size={size} />}
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
			{startIcon && <Icon name={startIcon} size={size} />}
			<Text hasStartIcon={startIcon !== 'none'} hasEndIcon={endIcon !== 'none'} size={size}>
				{children}
			</Text>
			{endIcon && <Icon name={endIcon} size={size} />}
		</RegularButton>
	);
};

export type { Size, Status, Variant };
export default Button;
