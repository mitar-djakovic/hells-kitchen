// eslint-disable-next-line import/no-unresolved
import Link from 'next/link';
import styled from 'styled-components';

import { Typography } from '../../components';

const LoginView = styled.div`
	width: 100%;
	height: 100vh;
	box-sizing: border-box;
	padding: 2rem;
	display: flex;
`;

const InfoContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.secondaryColors.blueDark[800]};
	width: 40%;
	border-radius: 3rem;
	margin-left: 2rem;
	box-sizing: border-box;
	padding: 4rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const FormContainer = styled.div`
	width: 60%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const InputWrapper = styled.div`
	height: 6.8rem;
	width: 100%;
`;

const Form = styled.form`
	width: 46rem;

	button {
		margin-top: 2.4rem;
	}
`;

const Title = styled(Typography)`
	font-weight: 600;
`;

const SubTitle = styled(Typography)`
	font-weight: 400;
	margin-bottom: 4.8rem;
	color: ${({ theme }) => theme.colors.primaryColors.neutral[600]};
`;

const AppName = styled(Typography)`
	color: ${({ theme }) => theme.colors.primaryColors.base.white};
	text-transform: uppercase;
	position: absolute;
	right: 5rem;
	top: 4rem;
`;

const Info = styled.div`
	margin-top: 16rem;
`;

const InfoTitle = styled(Title)`
	color: ${({ theme }) => theme.colors.primaryColors.base.white};
	margin-bottom: 1rem;
`;

const InfoDescription = styled(Typography)`
	color: ${({ theme }) => theme.colors.primaryColors.base.white};
`;

const ChangePage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 3.2rem;

	p {
		margin-right: 0.4rem;
	}
`;

const ChangePageLink = styled(Link)`
	color: ${({ theme }) => theme.colors.primaryColors.primary[700]};
	font-size: ${({ theme }) => theme.typography.text.sm.fontSize};
	line-height: ${({ theme }) => theme.typography.text.sm.lineHeight};
	font-weight: 600;
`;

export {
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
	LoginView,
	SubTitle,
	Title,
};
