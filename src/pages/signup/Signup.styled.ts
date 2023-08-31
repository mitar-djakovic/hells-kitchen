// eslint-disable-next-line import/no-unresolved
import Image from 'next/image';
// eslint-disable-next-line import/no-unresolved
import Link from 'next/link';
import styled from 'styled-components';

import { Typography } from '../../components';

const SignupView = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

const Background = styled(Image)``;

const BackgroundLayer = styled.div`
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.2);
	position: absolute;
	z-index: 10;
`;

const InfoContainer = styled.div`
	box-sizing: border-box;
	padding: 0 4rem;
`;

const FormContainer = styled.div`
	width: 50rem;
	box-sizing: border-box;
	padding: 6rem 3rem;
	background-color: ${({ theme }) => theme.colors.primaryColors.base.white};
	z-index: 100;
	border-radius: 2rem;
	text-align: center;
`;

const Form = styled.form`
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
	margin-bottom: 1rem;
`;

const SubTitle = styled(Typography)`
	font-weight: 400;
	margin-bottom: 4.8rem;
	color: ${({ theme }) => theme.colors.primaryColors.neutral[600]};
	letter-spacing: 0.1rem;
`;

const AppName = styled(Typography)`
	color: ${({ theme }) => theme.colors.primaryColors.base.white};
	text-transform: uppercase;
	position: absolute;
	z-index: 100;
	left: 5rem;
	top: 4rem;
`;

const ChangePage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

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
};
