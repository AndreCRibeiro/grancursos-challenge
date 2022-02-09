import React, { useState } from 'react';
import {
  FiCalendar,
  FiMail,
  FiCheckSquare,
  FiMessageSquare,
  FiStar,
  FiBell,
  FiSearch
} from 'react-icons/fi';

import * as Atoms from '../../Atoms';

import { Container, IconsDiv, UserOptionsDiv } from './styles';


const UserMenu: React.FC = () => {
  const [languageOption, setLanguageOption] = useState(false);
  const [userStatus, setUserStatus] = useState('Available')
  return (
    <Container>
      <IconsDiv>
        <FiCalendar />
        <FiMail />
        <FiCheckSquare />
        <FiMessageSquare />
        <FiStar />
      </IconsDiv>
      <UserOptionsDiv>
        <p onClick={() => setLanguageOption(!languageOption)}>
          {languageOption ? 'Português' : 'English'}
        </p>
        <FiBell />
        <FiSearch />
        <div>
          <span>John Doe</span>
          <span>{userStatus}</span>
        </div>
        <Atoms.Avatar onChangeStatus={(e) => setUserStatus(e)} />
      </UserOptionsDiv>
    </Container>
  );
};

export default UserMenu;
