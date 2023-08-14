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

const Button = styled.button<{
	status: Status;
	variant: Variant;
	size: Size;
	$hasStartIcon?: boolean;
	$hasEndIcon?: boolean;
}>`
	font-weight: 400;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	font-size: ${({ theme, size }) => theme.typography.text[size].fontSize};
	line-height: ${({ theme, size }) => theme.typography.text[size].lineHeight};
	background-color: ${({ theme, variant, status }) =>
		variant === 'contained'
			? theme.colors.primaryColors[status][500]
			: theme.colors.primaryColors.base.white};
	color: ${({ theme, variant, status }) =>
		variant === 'contained'
			? theme.colors.primaryColors.base.white
			: theme.colors.primaryColors[status][500]};
	border: 0.1rem solid
		${({ theme, status, variant }) =>
			variant === 'content'
				? theme.colors.primaryColors.base.white
				: theme.colors.primaryColors[status][500]};

	div {
		margin: ${({ size, $hasStartIcon, $hasEndIcon }) => {
			if (size === 'xl') {
				if ($hasStartIcon) {
					return $hasEndIcon ? '0rem 1.2rem' : '0rem 0rem 0rem 1.2rem';
				}
				if ($hasEndIcon) {
					return '0rem 1.2rem 0rem 0rem';
				}
			}
			if ($hasStartIcon) {
				return $hasEndIcon ? '0rem 0.8rem' : '0rem 0rem 0rem 0.8rem';
			}
			if ($hasEndIcon) {
				return '0rem 0.8rem 0rem 0rem';
			}
		}};
		svg {
			path {
				stroke: ${({ theme, variant, status }) =>
					variant === 'contained'
						? theme.colors.primaryColors.base.white
						: theme.colors.primaryColors[status][500]};
			}
		}
	}

	&:disabled {
		background-color: ${({ theme, variant, status }) =>
			variant === 'contained'
				? theme.colors.primaryColors[status][200]
				: theme.colors.primaryColors.base.white};

		border: 0.1rem solid
			${({ theme, status, variant }) =>
				variant === 'content'
					? theme.colors.primaryColors.base.white
					: theme.colors.primaryColors[status][200]};

		div {
			svg {
				path {
					stroke: ${({ theme, variant, status }) =>
						variant === 'contained'
							? theme.colors.primaryColors.base.white
							: theme.colors.primaryColors[status][200]};
				}
			}
		}
	}

	&:hover {
		background-color: ${({ theme, variant, status, disabled }) => {
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

		color: ${({ theme, variant }) => {
			if (variant === 'outlined') {
				return theme.colors.primaryColors.base.white;
			}
		}};

		div {
			svg {
				path {
					stroke: ${({ theme, variant, status, disabled }) => {
						if (!disabled) {
							return variant === 'content'
								? theme.colors.primaryColors[status][500]
								: theme.colors.primaryColors.base.white;
						}
					}};
				}
			}
		}
	}
`;

const RoundButton = styled(Button)<{
	size: Size;
	variant: Variant;
	status: Status;
}>`
	border-radius: 50%;
	padding: ${({ size }) => roundPadding[size]};
`;

const RegularButton = styled(Button)<{
	$fullWidth: boolean;
	size: Size;
	status: Status;
	variant: Variant;
}>`
	border-radius: 0.4rem;
	width: ${({ $fullWidth }) => $fullWidth && '100%'};
	padding: ${({ size }) => regularPadding[size]};

	&:disabled {
		color: ${({ theme, variant, status }) =>
			variant === 'contained'
				? theme.colors.primaryColors.base.white
				: theme.colors.primaryColors[status][200]};
	}
`;

export { RegularButton, RoundButton };
