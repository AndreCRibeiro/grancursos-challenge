import React, { ReactElement } from 'react';

import { Container } from './styles';


interface ButtonProps {
  buttonText: string;
  icon?: ReactElement;
  lighterBackgroundColor?: boolean;
}

const Button: React.FC<ButtonProps> = ({ buttonText, icon, lighterBackgroundColor }) => {
  return (
    <Container type="button" lighterBackgroundColor={lighterBackgroundColor}>
      {icon ? icon : null}
      {buttonText}
    </Container>
  );
};

export default Button;
