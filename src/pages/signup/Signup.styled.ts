// eslint-disable-next-line import/no-unresolved
import Link from 'next/link';
import styled from 'styled-components';

import { Typography } from '../../components';

const SignupView = styled.div`
	width: 100%;
	height: 100vh;
	box-sizing: border-box;
	padding: 2rem;
	display: flex;
`;

const InfoContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.secondaryColors.blueDark[700]};
	width: 40%;
	border-radius: 3rem;
	margin-right: 2rem;
	box-sizing: border-box;
	padding: 4rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Info = styled.div`
	margin-top: 16rem;
`;

const FormContainer = styled.div`
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

const Title = styled(Typography)`
	font-weight: 600;
`;

const SubTitle = styled(Typography)`
	font-weight: 400;
	margin-bottom: 4.8rem;
	color: ${({ theme }) => theme.colors.primaryColors.neutral[600]};
`;

const InfoTitle = styled(Title)`
	color: ${({ theme }) => theme.colors.primaryColors.base.white};
	margin-bottom: 1rem;
`;

const InfoDescription = styled(Typography)`
	color: ${({ theme }) => theme.colors.primaryColors.base.white};
`;

const AppName = styled(Typography)`
	color: ${({ theme }) => theme.colors.primaryColors.base.white};
	text-transform: uppercase;
	position: absolute;
`;

const Slider = styled.div`
	background-color: ${({ theme }) => theme.colors.secondaryColors.blueDark[900]};
	border-radius: 2rem;
	height: 28rem;
	display: flex;
	align-items: center;
	justify-content: center;
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
	PersonalData,
	SignupView,
	Slider,
	SubTitle,
	Title,
};
