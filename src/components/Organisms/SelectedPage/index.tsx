import React from 'react';

// import * as Atoms from '../../Atoms';
import * as Molecules from '../../Molecules';

import { Container } from './styles';


const SelectedPage: React.FC = () => {
  return (
    <Container>
      <Molecules.UserMenu />
      <Molecules.Breadcumb />
      <p>Teste</p>
    </Container>
  );
};

export default SelectedPage;
