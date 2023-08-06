import React from 'react';

import { IconName } from '../../types';
import Icon from '../Icon';

import { CheckboxContainer, HiddenCheckbox, StyledCheckbox } from './Checkbox.styled';

interface CheckboxProps {
	className?: string;
	checked: boolean;
	onChange: () => void;
	iconName?: IconName;
	color?: string;
}

const Checkbox = ({
	className = '',
	checked,
	onChange,
	iconName = 'x',
	color = '#7F56D9',
}: CheckboxProps) => (
	<CheckboxContainer className={className}>
		<HiddenCheckbox checked={checked} onChange={onChange} />
		<StyledCheckbox checked={checked} color={color}>
			{checked && <Icon name={iconName} size="xs" color={color} />}
		</StyledCheckbox>
	</CheckboxContainer>
);

export default Checkbox;
