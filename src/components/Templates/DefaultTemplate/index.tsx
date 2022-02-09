import React from 'react';

import * as Organisms from '../../Organisms';

import { Container } from './styles';


export const DefaultTemplate: React.FC = () => {
  return (
    <Container>
      <Organisms.Header />
    </Container>
  );
};

