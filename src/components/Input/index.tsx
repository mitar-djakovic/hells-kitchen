import { ChangeEvent, RefCallback } from 'react';

import { IconName } from '../../types';
import Icon from '../Icon';

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
	startIcon?: IconName;
	endIcon?: IconName;
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
	message,
	label,
	className,
	status = 'neutral',
	startIcon,
	endIcon,
	name,
	onBlur,
	onChange,
	forwardRef,
}: InputProps) => (
	<InputView className={className} data-testid="input" fullWidth={fullWidth}>
		<InputWrapper>
			<Icons hasStartIcon={startIcon !== 'none'} hasEndIcon={endIcon !== 'none'} status={status}>
				{startIcon && <Icon name={startIcon} size="lg" />}
				{endIcon && <Icon name={endIcon} size="lg" />}
			</Icons>
			<InputStyled
				value={value}
				ref={forwardRef}
				status={status}
				placeholder={placeholder}
				type={type}
				hasStartIcon={startIcon !== 'none'}
				name={name}
				onChange={onChange}
				onBlur={onBlur}
			/>
			{label && (
				<Label hasStartIcon={startIcon !== 'none'} status={status} className="label">
					{label}
				</Label>
			)}
		</InputWrapper>
		{message && <InputMessage status={status}>{message}</InputMessage>}
	</InputView>
);

export default Input;
