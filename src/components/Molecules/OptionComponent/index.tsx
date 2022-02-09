import React, { ReactElement } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

import { Container, Text } from './styles';

interface MenuOptionsProps {
  text: string;
  icon: ReactElement;
  isDropable?: boolean;
  selected?: boolean;
  onClick?: () => void;
}


const OptionComponent: React.FC<MenuOptionsProps> = ({ text, icon, isDropable, selected, ...rest }) => {
  return (
    <Container isSelected={selected} {...rest}>
      <div>
        {icon}
        <Text isSelected={selected}>{text}</Text>
      </div>

      {isDropable && selected && (<FiChevronDown />)}
      {isDropable && !selected && (<FiChevronRight />)}

    </Container>
  );
};

export default OptionComponent;
