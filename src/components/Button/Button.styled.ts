import styled from 'styled-components';

import { Size, Status, Variant } from './index';

const roundPadding = {
	xl: '1.6rem',
	lg: '1.4rem',
	md: '1.2rem',
	sm: '1rem',
	xs: '0.8rem',
};

const regularPadding = {
	xl: '1.6rem 2.8rem',
	lg: '1.2rem 2rem',
	md: '1rem 1.8rem',
	sm: '1rem 1.6rem',
	xs: '0.8rem 1.4rem',
};

const RoundButton = styled.button<{
	size: Size;
	variant: Variant;
	status: Status;
}>`
	font-weight: 400;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	cursor: pointer;
	padding: ${({ size }) => roundPadding[size]};
	font-size: ${({ theme, size }) => theme.typography.text[size].fontSize};
	line-height: ${({ theme, size }) => theme.typography.text[size].lineHeight};
	background-color: ${({ theme, variant, status }) => {
		if (variant === 'contained') {
			return theme.colors.primaryColors[status][500];
		}
		if (variant === 'outlined') {
			return theme.colors.primaryColors.base.white;
		}
		return 'transparent';
	}};
	color: ${({ theme, variant, status }) => {
		if (variant === 'contained') {
			return theme.colors.primaryColors.base.white;
		}
		return theme.colors.primaryColors[status][500];
	}};
	border: 0.1rem solid
		${({ theme, status, variant }) =>
			variant === 'content' ? 'transparent' : theme.colors.primaryColors[status][500]};

	&:disabled {
		background-color: ${({ theme, variant, status }) => {
			if (variant === 'contained') {
				return theme.colors.primaryColors[status][200];
			}
			if (variant === 'outlined') {
				return theme.colors.primaryColors.base.white;
			}
			return 'transparent';
		}};
		border: 0.1rem solid
			${({ theme, status, variant }) =>
				variant === 'content' ? 'transparent' : theme.colors.primaryColors[status][200]};
		color: ${({ theme, variant, status }) => {
			if (variant === 'contained') {
				return theme.colors.primaryColors.base.white;
			}
			return theme.colors.primaryColors[status][200];
		}};
	}

	&:hover {
		background-color: ${({ theme, variant, disabled, status }) => {
			if (!disabled) {
				if (variant === 'outlined') {
					return theme.colors.primaryColors[status][500];
				}
				if (variant === 'contained') {
					return theme.colors.primaryColors[status][400];
				}
				return theme.colors.primaryColors[status][200];
			}
		}};
		border: 0.1rem solid
			${({ theme, status, disabled, variant }) => {
				if (!disabled) {
					if (variant === 'content') {
						return theme.colors.primaryColors[status][200];
					}
					return theme.colors.primaryColors[status][400];
				}
			}};
		color: ${({ theme, variant, disabled, status }) => {
			if (!disabled) {
				if (variant === 'outlined') {
					return theme.colors.primaryColors.base.white;
				}
				if (variant === 'contained') {
					return theme.colors.primaryColors.base.white;
				}
				return theme.colors.primaryColors[status][500];
			}
		}};
	}

	div:first-child {
		width: ${({ size }) => (size === 'xl' ? '2.4rem' : '2rem')};
		height: ${({ size }) => (size === 'xl' ? '2.4rem' : '2rem')};
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const RegularButton = styled.button<{
	fullWidth: boolean;
	size: Size;
	status: Status;
	variant: Variant;
}>`
	font-weight: 400;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 0.4rem;
	cursor: pointer;
	width: ${({ fullWidth }) => fullWidth && '100%'};
	padding: ${({ size }) => regularPadding[size]};
	font-size: ${({ theme, size }) => theme.typography.text[size].fontSize};
	line-height: ${({ theme, size }) => theme.typography.text[size].lineHeight};
	background-color: ${({ theme, variant, status }) => {
		if (variant === 'contained') {
			return theme.colors.primaryColors[status][500];
		}
		if (variant === 'outlined') {
			return theme.colors.primaryColors.base.white;
		}
		return 'transparent';
	}};
	color: ${({ theme, variant, status }) => {
		if (variant === 'contained') {
			return theme.colors.primaryColors.base.white;
		}
		return theme.colors.primaryColors[status][500];
	}};
	border: 0.1rem solid
		${({ theme, status, variant }) =>
			variant === 'content' ? 'transparent' : theme.colors.primaryColors[status][500]};

	&:disabled {
		background-color: ${({ theme, variant, status }) => {
			if (variant === 'contained') {
				return theme.colors.primaryColors[status][200];
			}
			if (variant === 'outlined') {
				return theme.colors.primaryColors.base.white;
			}
			return 'transparent';
		}};
		border: 0.1rem solid
			${({ theme, status, variant }) =>
				variant === 'content' ? 'transparent' : theme.colors.primaryColors[status][200]};
		color: ${({ theme, variant, status }) => {
			if (variant === 'contained') {
				return theme.colors.primaryColors.base.white;
			}
			return theme.colors.primaryColors[status][200];
		}};
	}

	&:hover {
		background-color: ${({ theme, variant, disabled, status }) => {
			if (!disabled) {
				if (variant === 'outlined') {
					return theme.colors.primaryColors[status][500];
				}
				if (variant === 'contained') {
					return theme.colors.primaryColors[status][400];
				}
				return theme.colors.primaryColors[status][200];
			}
		}};
		border: 0.1rem solid
			${({ theme, status, disabled, variant }) => {
				if (!disabled) {
					if (variant === 'content') {
						return theme.colors.primaryColors[status][200];
					}
					return theme.colors.primaryColors[status][400];
				}
			}};
		color: ${({ theme, variant, disabled, status }) => {
			if (!disabled) {
				if (variant === 'outlined') {
					return theme.colors.primaryColors.base.white;
				}
				if (variant === 'contained') {
					return theme.colors.primaryColors.base.white;
				}
				return theme.colors.primaryColors[status][500];
			}
		}};
	}
`;

export { RegularButton, RoundButton };
