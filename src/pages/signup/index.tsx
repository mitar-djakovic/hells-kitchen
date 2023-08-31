import { FieldError, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import backgroundImg from '../../assets/5.jpg';
import { Button, Input, Typography } from '../../components';

import {
	AppName,
	Background,
	BackgroundLayer,
	ChangePage,
	ChangePageLink,
	Form,
	FormContainer,
	InfoContainer,
	InputWrapper,
	PersonalData,
	SignupView,
	SubTitle,
	Title,
} from './Signup.styled';
import { signupValidationSchema } from './signupValidationSchema';

interface SignupCredentials {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

type Status = 'primary' | 'warning' | 'error' | 'success' | 'neutral';

export default function Signup() {
	const {
		register,
		getFieldState,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<SignupCredentials>({
		resolver: yupResolver(signupValidationSchema),
		mode: 'all',
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
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

	const getCommonProps = (name: keyof SignupCredentials) => {
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

	const handleSignup = async (values: SignupCredentials) => {
		console.log('signupValues', values);
	};
	return (
		<SignupView data-testid="signup-page">
			<AppName variant="tlg">Hells Kitchen</AppName>
			<Background src={backgroundImg} alt="Some text" fill />
			<BackgroundLayer />
			<FormContainer>
				<InfoContainer>
					<Title variant="dsm">Create an account</Title>
					<SubTitle variant="tmd">
						Take the next step and discover world best community of comic lowers
					</SubTitle>
				</InfoContainer>
				<Form onSubmit={handleSubmit(handleSignup)}>
					<PersonalData>
						<InputWrapper>
							<Input
								{...getCommonProps('firstName')}
								label="First name"
								placeholder="Enter your first name"
							/>
						</InputWrapper>
						<InputWrapper>
							<Input
								{...getCommonProps('lastName')}
								label="Last name"
								placeholder="Enter your last name"
							/>
						</InputWrapper>
					</PersonalData>
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
					<InputWrapper>
						<Input
							{...getCommonProps('confirmPassword')}
							label="Confirm password"
							placeholder="Confirm your password"
							type="password"
						/>
					</InputWrapper>
					<ChangePage>
						<Typography variant="tsm">Already have an account?</Typography>
						<ChangePageLink href="/login">Log in</ChangePageLink>
					</ChangePage>
					<Button onClick={handleSubmit(handleSignup)} disabled={isSubmitting} fullWidth>
						Signup
					</Button>
				</Form>
			</FormContainer>
		</SignupView>
	);
}
