// eslint-disable-next-line import/no-unresolved
import { useRouter } from 'next/router';

import notFoundBg from '../../assets/notFoundBg.jpg';
import { Button } from '../../components';

import {
	AppName,
	Background,
	BackgroundLayer,
	Content,
	NotFoundView,
	SubTitle,
	Title,
} from './NotFound.styled';

export default function NotFound() {
	const router = useRouter();
	return (
		<NotFoundView>
			<AppName variant="tlg">Hells Kitchen</AppName>
			<Background src={notFoundBg} alt="Background image" fill />
			<BackgroundLayer />
			<Content>
				<Title variant="dxxl">404 - Lost in the Multiverse</Title>
				<SubTitle variant="dxs">
					Fear not, dear reader! We&apos;ll find your page and restore order to this digital
					universe!
				</SubTitle>
				<Button status="success" onClick={() => router.push('/login')}>
					Return to login
				</Button>
			</Content>
		</NotFoundView>
	);
}
