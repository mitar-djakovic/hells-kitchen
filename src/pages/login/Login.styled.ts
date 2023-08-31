// eslint-disable-next-line import/no-unresolved
import Image from 'next/image';
// eslint-disable-next-line import/no-unresolved
import Link from 'next/link';
import styled from 'styled-components';

import { Typography } from '../../components';

const LoginView = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
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

const InputWrapper = styled.div`
	height: 6.8rem;
	width: 100%;
`;

const Form = styled.form`
	button {
		margin-top: 1.4;
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
	z-index: 100;
	left: 5rem;
	top: 4rem;
`;

const Background = styled(Image)``;

const BackgroundLayer = styled.div`
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.4);
	position: absolute;
	z-index: 10;
`;

const ChangePage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 1rem;

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

const Devider = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 2rem 0;
`;

const Dash = styled.div`
	width: 1.5rem;
	height: 0.1rem;
	background-color: ${({ theme }) => theme.colors.primaryColors.base.black};

	&:first-child {
		margin-right: 1rem;
	}
	&:last-child {
		margin-left: 1rem;
	}
`;

const SocialButtons = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 2rem;

	button {
		margin: 0;

		&:nth-child(2) {
			margin: 0 1rem;
		}
	}
`;

export {
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
};
