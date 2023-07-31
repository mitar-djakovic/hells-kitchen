import { RegularButton, RoundButton } from './Button.styled';

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
}: ButtonProps) =>
	round ? (
		<RoundButton
			onClick={onClick}
			size={size}
			disabled={disabled}
			variant={variant}
			status={status}
			className={className}
		>
			<div>1</div>
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
			{children}
		</RegularButton>
	);

export type { Size, Status, Variant };
export default Button;
