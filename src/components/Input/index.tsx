import { ChangeEvent, ReactNode, RefCallback } from 'react';

import { Icons, InputMessage, InputStyled, InputView, InputWrapper, Label } from './Input.styled';

type Type = 'text' | 'password' | 'email';
type Status = 'primary' | 'warning' | 'error' | 'success' | 'neutral';

interface InputProps {
	value: string;
	placeholder?: string;
	fullWidth?: boolean;
	type?: Type;
	message?: string;
	label?: string;
	className?: string;
	status?: Status;
	startIcon?: ReactNode;
	endIcon?: ReactNode;
	name: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
	forwardRef?: RefCallback<HTMLInputElement>;
}

const Input = ({
	value,
	fullWidth = false,
	type = 'text',
	placeholder,
	message = '',
	label,
	className,
	status = 'neutral',
	startIcon,
	endIcon,
	name,
	onBlur,
	onChange,
	forwardRef,
}: InputProps) => {
	const hasStartIcon = startIcon !== undefined;
	const hasEndIcon = endIcon !== undefined;

	return (
		<InputView className={className} data-testid="input" fullWidth={fullWidth}>
			<InputWrapper>
				<Icons hasStartIcon={hasStartIcon} hasEndIcon={hasEndIcon} status={status}>
					{startIcon}
					{endIcon}
				</Icons>
				<InputStyled
					value={value}
					ref={forwardRef}
					status={status}
					placeholder={placeholder}
					type={type}
					hasStartIcon={hasStartIcon}
					name={name}
					onChange={onChange}
					onBlur={onBlur}
				/>
				{label && (
					<Label hasStartIcon={hasStartIcon} status={status} className="label">
						{label}
					</Label>
				)}
			</InputWrapper>
			{message && <InputMessage status={status}>{message}</InputMessage>}
		</InputView>
	);
};

export default Input;
