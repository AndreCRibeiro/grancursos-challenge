import React from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

import { Container, Text } from './styles';

interface MenuOptionsProps {
  text: string;
  icon: any;
  isDropable?: boolean;
  selected?: boolean;
}


const OptionComponent: React.FC<MenuOptionsProps> = ({ text, icon, isDropable, selected }) => {
  return (
    <Container isSelected={selected}>
      <div>
        {icon}
        <Text>{text}</Text>
      </div>

      {isDropable && selected && (<FiChevronDown />)}
      {isDropable && !selected && (<FiChevronRight />)}

    </Container>
  );
};

export default OptionComponent;
