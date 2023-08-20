import { FieldError, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Input } from '../../components';

import {
	AppName,
	Form,
	FormContainer,
	Info,
	InfoContainer,
	InfoDescription,
	InfoTitle,
	InputWrapper,
	LoginView,
	SubTitle,
	Title,
} from './Login.styled';
import { loginValidationSchema } from './loginValidationSchema';

interface LoginCredentials {
	email: string;
	password: string;
}

type Status = 'primary' | 'warning' | 'error' | 'success' | 'neutral';

export default function Login() {
	const {
		register,
		getFieldState,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginCredentials>({
		resolver: yupResolver(loginValidationSchema),
		mode: 'all',
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const handleStatus = (isTouched: boolean, isDirty: boolean, error?: FieldError): Status => {
		if (error && (isDirty || isTouched)) {
			return 'error';
		}
		if (!error && (isDirty || isTouched)) {
			return 'success';
		}
		return 'neutral';
	};

	const getCommonProps = (name: keyof LoginCredentials) => {
		const { name: inputName, onBlur, onChange, ref } = register(name);
		const { isTouched, isDirty } = getFieldState(name);
		const status = handleStatus(isTouched, isDirty, errors[name]);

		return {
			name: inputName,
			message: errors[name]?.message,
			fullWidth: true,
			onBlur,
			onChange,
			forwardRef: ref,
			status,
		};
	};

	const handleLogin = (values: LoginCredentials) => {
		console.log('values', values);
	};

	return (
		<LoginView>
			<FormContainer>
				<div>
					<Title variant="dsm">Login</Title>
					<SubTitle variant="tmd">Relive the moments and create new ones</SubTitle>
					<Form>
						<InputWrapper>
							<Input
								{...getCommonProps('email')}
								label="Email"
								placeholder="Enter your email"
								type="email"
							/>
						</InputWrapper>
						<InputWrapper>
							<Input
								{...getCommonProps('password')}
								label="Password"
								placeholder="Enter your password"
								type="password"
							/>
						</InputWrapper>
						<Button onClick={handleSubmit(handleLogin)} disabled={isSubmitting} fullWidth>
							Login
						</Button>
					</Form>
				</div>
			</FormContainer>
			<InfoContainer>
				<AppName variant="tsm">Hells Kitchen</AppName>
				<Info>
					<InfoTitle variant="dxl">Continue your journey with us.</InfoTitle>
					<InfoDescription variant="txl">
						Step into your realm once more and explore new comics
					</InfoDescription>
				</Info>
			</InfoContainer>
		</LoginView>
	);
}
