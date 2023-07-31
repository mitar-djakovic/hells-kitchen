import styled from 'styled-components';

import { Size } from './index';

const sizeMap = {
	md: '2rem',
	lg: '2.4rem',
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
