import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FiMenu } from 'react-icons/fi';

// import * as Atoms from '../../Atoms';
import * as Molecules from '../../Molecules';
import MenuOptions from '../MenuOptions';

import { Container, MenusOpenDiv, MenuMobile } from './styles';


const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 415px)' });

  return (
    <Container>
      <Molecules.UserMenu />
      {isMobile && (
        <MenusOpenDiv onClick={() => setOpenMenu(!openMenu)} >
          <FiMenu />
        </MenusOpenDiv>
      )}
      {
        openMenu && (
          <MenuMobile>
            <MenuOptions onClickClose={() => setOpenMenu(false)} />
          </MenuMobile>
        )
      }
      <Molecules.Breadcumb />
    </Container>
  );
};

export default Header;
