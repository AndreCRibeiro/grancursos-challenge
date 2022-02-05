import React from 'react';
import { FiChevronsRight, FiHome, FiSettings } from 'react-icons/fi';

import { Container, Line, SettingsDiv } from './styles';


const Breadcumb: React.FC = () => {
  return (
    <Container>
      <div>
        <h3>
          Card Actions
        </h3>
        <Line />
        <FiHome style={{ marginRight: '5px' }} />
        <FiChevronsRight style={{ marginRight: '5px' }} />
        eCommerce
        <FiChevronsRight style={{ marginRight: '5px', marginLeft: '5px' }} />
        Electronics
      </div>
      <SettingsDiv>
        <FiSettings color="#fff" />
      </SettingsDiv>
    </Container >
  );
};

export default Breadcumb;
