import styled from 'styled-components';

import { Size } from './index';

const sizeMap = {
	xs: '1.2rem',
	sm: '1.4rem',
	md: '1.6rem',
	lg: '1.8rem',
	xl: '2rem',
};

const IconStyled = styled.div<{ size: Size; color: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${({ size }) => sizeMap[size]};
	height: ${({ size }) => sizeMap[size]};

	svg {
		width: ${({ size }) => sizeMap[size]};
		height: ${({ size }) => sizeMap[size]};

		path {
			stroke: ${({ color }) => color};
		}
	}
`;

export { IconStyled };
