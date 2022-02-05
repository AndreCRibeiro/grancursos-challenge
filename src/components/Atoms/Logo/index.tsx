import React from 'react';

// Icons & Pictures
import LogoGran from '../../../assets/img/Logo.svg';

import { GranLogo } from './styles';

const Logo: React.FC = () => {
  return (
    <GranLogo
      src={LogoGran}
      alt="Logo GranCursos"
    />
  );
};

export default Logo;
