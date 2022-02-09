import React from 'react';

import { Container } from './styles';

interface CheckboxProps {
  label: string;
  numberOfElements: number;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, numberOfElements }) => {
  return (
    <Container>
      <div>
        <label className="form-control">
          <input type="checkbox" name="checkbox" />
          <span>{label}</span>
        </label>
      </div>
      <span>{numberOfElements}</span>
    </Container>

  );
};

export default Checkbox;
