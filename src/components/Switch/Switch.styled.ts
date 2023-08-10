import styled from 'styled-components';

const Label = styled.label`
	display: flex;
	align-items: center;
	gap: 10px;
	cursor: pointer;
`;

const SwitchToggle = styled.div`
	position: relative;
	width: 3.2rem;
	height: 2rem;
	background: ${({ theme }) => theme.colors.primaryColors.neutral[400]};
	border-radius: 1.2rem;
	transition: 300ms all;
	box-sizing: border-box;
	padding: 0.2rem;

	&:before {
		transition: 300ms all;
		content: '';
		position: absolute;
		width: 1.6rem;
		height: 1.6rem;
		border-radius: 50%;
		top: 50%;
		background: white;
		transform: translate(0, -50%);
	}
`;

const Input = styled.input`
	opacity: 0;
	position: absolute;

	&:checked + ${SwitchToggle} {
		background: ${({ theme }) => theme.colors.primaryColors.primary[500]};

		&:before {
			transform: translate(1.2rem, -50%);
		}
	}
`;

export { Input, Label, SwitchToggle };
