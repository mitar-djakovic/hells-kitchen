import styled from 'styled-components';

const DisplayXXL = styled.h1`
	font-size: ${({ theme }) => theme.typography.display.xxl.fontSize};
	line-height: ${({ theme }) => theme.typography.display.xxl.lineHeight};
	letter-spacing: ${({ theme }) => theme.typography.display.xxl.letterSpacing};
`;

const DisplayXL = styled.h2`
	font-size: ${({ theme }) => theme.typography.display.xl.fontSize};
	line-height: ${({ theme }) => theme.typography.display.xl.lineHeight};
	letter-spacing: ${({ theme }) => theme.typography.display.xl.letterSpacing};
`;

const DisplayLG = styled.h3`
	font-size: ${({ theme }) => theme.typography.display.lg.fontSize};
	line-height: ${({ theme }) => theme.typography.display.lg.lineHeight};
	letter-spacing: ${({ theme }) => theme.typography.display.lg.letterSpacing};
`;

const DisplayMD = styled.h4`
	font-size: ${({ theme }) => theme.typography.display.md.fontSize};
	line-height: ${({ theme }) => theme.typography.display.md.lineHeight};
	letter-spacing: ${({ theme }) => theme.typography.display.md.letterSpacing};
`;

const DisplaySM = styled.h5`
	font-size: ${({ theme }) => theme.typography.display.sm.fontSize};
	line-height: ${({ theme }) => theme.typography.display.sm.lineHeight};
	letter-spacing: ${({ theme }) => theme.typography.display.sm.letterSpacing};
`;

const DisplayXS = styled.h6`
	font-size: ${({ theme }) => theme.typography.display.xs.fontSize};
	line-height: ${({ theme }) => theme.typography.display.xs.lineHeight};
	letter-spacing: ${({ theme }) => theme.typography.display.xs.letterSpacing};
`;

const TextXL = styled.p`
	font-size: ${({ theme }) => theme.typography.text.xl.fontSize};
	line-height: ${({ theme }) => theme.typography.text.xl.lineHeight};
	letter-spacing: ${({ theme }) => theme.typography.text.xl.letterSpacing};
`;

const TextLG = styled.p`
	font-size: ${({ theme }) => theme.typography.text.lg.fontSize};
	line-height: ${({ theme }) => theme.typography.text.lg.lineHeight};
	letter-spacing: ${({ theme }) => theme.typography.text.lg.letterSpacing};
`;

const TextMD = styled.p`
	font-size: ${({ theme }) => theme.typography.text.md.fontSize};
	line-height: ${({ theme }) => theme.typography.text.md.lineHeight};
	letter-spacing: ${({ theme }) => theme.typography.text.md.letterSpacing};
`;

const TextSM = styled.p`
	font-size: ${({ theme }) => theme.typography.text.sm.fontSize};
	line-height: ${({ theme }) => theme.typography.text.sm.lineHeight};
	letter-spacing: ${({ theme }) => theme.typography.text.sm.letterSpacing};
`;

const TextXS = styled.p`
	font-size: ${({ theme }) => theme.typography.text.xs.fontSize};
	line-height: ${({ theme }) => theme.typography.text.xs.lineHeight};
	letter-spacing: ${({ theme }) => theme.typography.text.xs.letterSpacing};
`;

export {
	DisplayLG,
	DisplayMD,
	DisplaySM,
	DisplayXL,
	DisplayXS,
	DisplayXXL,
	TextLG,
	TextMD,
	TextSM,
	TextXL,
	TextXS,
};
