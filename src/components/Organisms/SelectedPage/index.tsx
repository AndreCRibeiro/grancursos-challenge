import React from 'react';

// import * as Atoms from '../../Atoms';
import * as Molecules from '../../Molecules';

import { Container } from './styles';


const SelectedPage: React.FC = () => {
  return (
    <Container>
      <header>
        <Molecules.UserMenu />
        <Molecules.Breadcumb />
      </header>
      <main>
        Main
      </main>
      <footer>
        Footer
      </footer>
    </Container>
  );
};

export default SelectedPage;
