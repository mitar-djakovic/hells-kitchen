import { Input, Label, SwitchToggle } from './Switch.styled';

interface SwitchProps {
	label?: string;
	checked: boolean;
	onClick: () => void;
}

const Switch = ({ label, checked, onClick }: SwitchProps) => (
	<Label>
		<Input checked={checked} type="checkbox" onChange={onClick} />
		<SwitchToggle />
		<span>{label}</span>
	</Label>
);

export default Switch;
