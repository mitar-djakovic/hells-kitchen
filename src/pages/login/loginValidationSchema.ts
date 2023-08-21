import { object, string } from 'yup';

export const loginValidationSchema = object({
	email: string().email('Email is not valid').required('Email is required'),
	password: string()
		.min(6, 'Minimum amount of character is 6')
		.max(30, 'Maximum amount of character is 30')
		.required('Password is required'),
});
