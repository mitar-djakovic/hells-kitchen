import { FieldError, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Input, Typography } from '../../components';

import {
	AppName,
	ChangePage,
	ChangePageLink,
	Form,
	FormContainer,
	Info,
	InfoContainer,
	InfoDescription,
	InfoTitle,
	InputWrapper,
	PersonalData,
	SignupView,
	Slider,
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
			<InfoContainer>
				<AppName variant="tsm">Hells Kitchen</AppName>
				<Info>
					<InfoTitle variant="dxl">Start your journey with us.</InfoTitle>
					<InfoDescription variant="txl">
						Discover world best community of comic lowers
					</InfoDescription>
				</Info>
				<Slider>Slider</Slider>
			</InfoContainer>
			<FormContainer>
				<div>
					<Title variant="dsm">Create an account</Title>
					<SubTitle variant="tmd">Take the next step and sign up to your account</SubTitle>
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
						<Button onClick={handleSubmit(handleSignup)} disabled={isSubmitting} fullWidth>
							Signup
						</Button>
					</Form>
					<ChangePage>
						<Typography variant="tsm">Already have an account?</Typography>
						<ChangePageLink href="/login">Log in</ChangePageLink>
					</ChangePage>
				</div>
			</FormContainer>
		</SignupView>
	);
}
