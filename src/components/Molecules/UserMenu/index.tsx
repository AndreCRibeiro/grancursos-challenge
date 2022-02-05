import React from 'react';
import {
  FiCalendar,
  FiMail,
  FiCheckSquare,
  FiMessageSquare,
  FiStar,
  FiBell,
  FiSearch
} from 'react-icons/fi';

import { Container, IconsDiv, UserOptionsDiv } from './styles';


const UserMenu: React.FC = () => {
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
        <p>English</p>
        <FiBell />
        <FiSearch />
        <p>John Doe</p>
      </UserOptionsDiv>
    </Container>
  );
};

export default UserMenu;
