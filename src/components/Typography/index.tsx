import {
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
} from './Typography.styled';

type Variant =
	| 'dxxl'
	| 'dxl'
	| 'dlg'
	| 'dmd'
	| 'dsm'
	| 'dxs'
	| 'txl'
	| 'tlg'
	| 'tmd'
	| 'tsm'
	| 'txs';

interface TypographyProp {
	variant: Variant;
	children: string | string[];
	className?: string;
}

const TypographyMap = {
	dxxl: DisplayXXL,
	dxl: DisplayXL,
	dlg: DisplayLG,
	dmd: DisplayMD,
	dsm: DisplaySM,
	dxs: DisplayXS,
	txl: TextXL,
	tlg: TextLG,
	tmd: TextMD,
	tsm: TextSM,
	txs: TextXS,
};

const Typography = ({ variant, children, className }: TypographyProp) => {
	const Type = TypographyMap[variant];

	return (
		<Type data-testid="typography" className={className}>
			{children}
		</Type>
	);
};

export default Typography;
