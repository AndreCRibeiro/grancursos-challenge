import React from 'react';

import { GeneralText } from './styles';

interface TextProps {
  text: string;
  isAtMenuOptions?: boolean;
}

const Text: React.FC<TextProps> = ({ text, isAtMenuOptions }) => {
  return (
    <GeneralText isAtMenuOptions={isAtMenuOptions}>{text}</GeneralText>
  );
};

export default Text;
