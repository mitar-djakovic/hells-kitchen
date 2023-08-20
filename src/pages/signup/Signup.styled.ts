import styled from 'styled-components';

const SignupView = styled.div`
	width: 100%;
	height: 100vh;
	box-sizing: border-box;
	padding: 2rem;
	background-color: #7f7f7f;
	display: flex;
`;

const InfoContainer = styled.div`
	background-color: #000066;
	width: 40%;
	border-radius: 3rem;
	margin-right: 2rem;
`;

const FormContainer = styled.div`
	background-color: #ffffff;
	width: 60%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Form = styled.form`
	width: 46rem;

	button {
		margin-top: 2.4rem;
	}
`;

const InputWrapper = styled.div`
	height: 6.8rem;
	width: 100%;
`;

const PersonalData = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	& > div {
		&:nth-child(1) {
			margin-right: 0.5rem;
		}
		&:nth-child(2) {
			margin-left: 0.5rem;
		}
	}
`;

export { Form, FormContainer, InfoContainer, InputWrapper, PersonalData, SignupView };
