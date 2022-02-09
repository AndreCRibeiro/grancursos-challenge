import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';


interface InputFieldProps {
  placeholderText: string;
}

const InputField: React.FC<InputFieldProps> = ({ placeholderText }) => {
  return (
    <Container>
      <div>
        <input placeholder={placeholderText} type="text" />
      </div>
      <FiSearch />
    </Container>
  );
};

export default InputField;
