import styled from 'styled-components';

type Status = 'primary' | 'warning' | 'error' | 'success' | 'neutral';

const InputView = styled.div<{ fullWidth: boolean }>`
	width: ${(props) => (props.fullWidth ? '100%' : '32rem')};
`;

const InputWrapper = styled.div`
	position: relative;
`;

const Icons = styled.div<{ hasStartIcon: boolean; hasEndIcon: boolean; status: Status }>`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	padding: 0.8rem 1.2rem;
	flex-direction: ${({ hasStartIcon, hasEndIcon }) => hasEndIcon && !hasStartIcon && 'row-reverse'};
	pointer-events: none;

  div {
    svg {
      path {
        stroke: ${({ theme, status }) => theme.colors.primaryColors[status][500]}};
      }
    }
  }
`;

const InputStyled = styled.input<{ label?: string; status: Status; hasStartIcon: boolean }>`
	border-radius: 0.8rem;
	width: 100%;
	outline: none;
	box-sizing: border-box;
	font-size: ${({ theme }) => theme.typography.text.md.fontSize};
	line-height: ${({ theme }) => theme.typography.text.md.lineHeight};
	letter-spacing: ${({ theme }) => theme.typography.text.md.letterSpacing};
	font-weight: 400;
	border: 0.1rem solid ${({ theme, status }) => theme.colors.primaryColors[status][500]};
	padding: 0.8rem 1.2rem 0.8rem ${({ hasStartIcon }) => (hasStartIcon ? '3.6' : '1.2')}rem;
 	box-shadow: 0 0.1rem 0.2rem 0 rgba(16, 24, 40, 0.05);
	color: ${({ theme }) => theme.colors.primaryColors.neutral[500]};

	&::placeholder {
		color: transparent;
		font-weight: 400;
		padding-left: 0.5rem;
	}

	&:focus::placeholder {
		color: #3a3535;
	}

	// no focus on input. value is valid
	&:not(:placeholder-shown):not(:focus) + .label {
		transform: scale(0.75) translateY(-2.8rem) translateX(-1.6rem);
		transition: 0.2s ease;
		color: ${({ theme, status }) => theme.colors.primaryColors[status][500]};
	}

	// Work when focus is on the input, value of input is not important
	&:focus + .label {
		transform: scale(0.75) translateY(-2.8rem) translateX(-15%);
    color: ${({ theme, status }) => theme.colors.primaryColors[status][500]}
	}

	transition: 0.2s ease;

	// Invalid value
	&:invalid:not(:placeholder-shown) {
		transition: 0.2s ease;
		color: ${({ theme, status }) => theme.colors.primaryColors[status][500]};
	}

	//Focus on input and value is invalid
	//  &:invalid:not(:placeholder-shown) + .placeholder {
	//    transition: 0.2s ease;
  //    color: ${({ theme, status }) => theme.colors.primaryColors[status][400]}
	//  }

	// No focus and value is invalid
	&:not(:placeholder-shown):not(:focus).input:invalid + .label {
		transform: scale(0.75) translateY(-2.8rem) translateX(-15%);
    color: ${({ theme, status }) => theme.colors.primaryColors[status][500]}
		transition: 0.2s ease;
	}
`;

const InputMessage = styled.div<{ status: string }>`
	margin-top: 0.4rem;
	border-radius: 0.2rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0 0.8rem 0.6rem 0.5rem;
	gap: 0.4rem;
	color: ${({ theme, status }) => theme.colors.primaryColors[status][700]};
`;

const Label = styled.span<{ status: string; hasStartIcon: boolean }>`
	pointer-events: none;
	position: absolute;
	top: 1rem;
	left: ${({ hasStartIcon }) => (hasStartIcon ? '3.6rem' : '1.2rem')};
	padding: 0 0.8rem;
	background-color: #ffffff;
	border-radius: 0.5rem;
	transition:
		transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
		opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
	font-size: ${({ theme }) => theme.typography.text.md.fontSize};
	line-height: ${({ theme }) => theme.typography.text.md.lineHeight};
	font-weight: 400;
`;

export { Icons, InputMessage, InputStyled, InputView, InputWrapper, Label };
