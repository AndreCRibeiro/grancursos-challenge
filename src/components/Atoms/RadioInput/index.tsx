import React from 'react';

import { Container } from './styles';

interface RadioInputProps {
  label: string;
  value: number;
}

const RadioInput: React.FC<RadioInputProps> = ({ label, value }) => {
  return (
    <Container>
      <label className="container">{label}
        <input type="radio" name="radio" value={value} />
        <span className="checkmark"></span>
      </label>
    </Container>

  );
};

export default RadioInput;
