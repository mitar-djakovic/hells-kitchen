import styled from 'styled-components';

const CheckboxContainer = styled.div`
	display: inline-block;
	vertical-align: middle;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
	border: 0;
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;

const StyledCheckbox = styled.div<{ checked: boolean; color: string }>`
	width: 1.6rem;
	height: 1.6rem;
	box-sizing: border-box;
	cursor: pointer;
	background: ${({ theme, checked }) =>
		checked ? theme.colors.primaryColors.primary[50] : theme.colors.primaryColors.base.white};
	border-radius: 0.3rem;
	transition: all 150ms;
	font-style: normal;
	border: 1px solid ${({ color }) => color};
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	${HiddenCheckbox}:focus + & {
		box-shadow: 0 0 0 3px #acacac;
	}
`;

export { CheckboxContainer, HiddenCheckbox, StyledCheckbox };
