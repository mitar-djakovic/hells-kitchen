import { FieldError, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import backgroundImg from '../../assets/3.jpg';
import { Button, Icon, Input, Typography } from '../../components';

import {
	AppName,
	Background,
	BackgroundLayer,
	ChangePage,
	ChangePageLink,
	Dash,
	Devider,
	Form,
	FormContainer,
	InfoContainer,
	InputWrapper,
	LoginView,
	SocialButtons,
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
			<AppName variant="tlg">Hells Kitchen</AppName>
			<Background src={backgroundImg} alt="some background" fill />
			<BackgroundLayer />
			<FormContainer>
				<InfoContainer>
					<Title variant="dsm">Login</Title>
					<SubTitle variant="tmd">
						Relive the best comic moments and memories or create new ones
					</SubTitle>
				</InfoContainer>
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
					<ChangePage>
						<Typography variant="tsm">Don’t have an account?</Typography>
						<ChangePageLink href="/signup">Sign up</ChangePageLink>
					</ChangePage>
					<Button onClick={handleSubmit(handleLogin)} disabled={isSubmitting} fullWidth>
						Log in
					</Button>
					<Devider>
						<Dash />
						<Typography variant="tsm">or Log in with</Typography>
						<Dash />
					</Devider>
					<SocialButtons>
						<Button
							onClick={() => null}
							fullWidth
							variant="outlined"
							startIcon={<Icon name="google" />}
						>
							Google
						</Button>
						<Button
							onClick={() => null}
							fullWidth
							variant="outlined"
							startIcon={<Icon name="apple" />}
						>
							Apple
						</Button>
						<Button
							onClick={() => null}
							fullWidth
							variant="outlined"
							startIcon={<Icon name="facebook" />}
						>
							Facebook
						</Button>
					</SocialButtons>
				</Form>
			</FormContainer>
		</LoginView>
	);
}
