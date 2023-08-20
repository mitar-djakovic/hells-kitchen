import { object, ref, string } from 'yup';

const min = 'Minimum amount of character is ';
const max = 'Maximum amount of character is ';
export const signupValidationSchema = object({
	firstName: string()
		.min(3, min + 3)
		.max(30, max + 30)
		.required('First name is required'),
	lastName: string()
		.min(3, min + 3)
		.max(30, max + 30)
		.required('Last name is required'),
	email: string().email('Email is not valid').required('Email is required'),
	password: string()
		.min(6, min + 6)
		.max(30, max + 30)
		.required('Password is required'),
	confirmPassword: string()
		.oneOf([ref('password'), undefined], 'Passwords must match')
		.min(6, 'Minimum amount of character is 6')
		.max(30, 'Maximum amount of character is 30')
		.required('Confirm password is required'),
});
