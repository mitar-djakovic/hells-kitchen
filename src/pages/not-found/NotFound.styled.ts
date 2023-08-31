// eslint-disable-next-line import/no-unresolved
import Image from 'next/image';
import styled from 'styled-components';

import { Typography } from '../../components';

const NotFoundView = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Background = styled(Image)``;

const BackgroundLayer = styled.div`
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.4);
	position: absolute;
	z-index: 10;
`;

const AppName = styled(Typography)`
	color: ${({ theme }) => theme.colors.primaryColors.base.white};
	text-transform: uppercase;
	position: absolute;
	z-index: 100;
	left: 5rem;
	top: 4rem;
`;

const Title = styled(Typography)`
	font-weight: 600;
	color: ${({ theme }) => theme.colors.primaryColors.base.white};
`;

const SubTitle = styled(Typography)`
	font-weight: 400;
	margin-bottom: 4.8rem;
	color: ${({ theme }) => theme.colors.primaryColors.base.white};
`;

const Content = styled.div`
	z-index: 111;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export { AppName, Background, BackgroundLayer, Content, NotFoundView, SubTitle, Title };
