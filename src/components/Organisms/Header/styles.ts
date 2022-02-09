import styled from 'styled-components';
import Theme from '../../../styles/Theme';


export const Container = styled.div``;

export const MenusOpenDiv = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  width: 40px;
  height: 25px;
  background: red;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  svg {
    width: 22px;
    height: 22px;
  }

  @media (max-width: ${Theme.breakPoints.smallMobile}) {
    top: 75px;
  }
`;

export const MenuMobile = styled.div`
  position: absolute;
  top: 215px;
  left: 330px;
  z-index: 2;
  box-shadow: 0px 12px 48px rgba(0, 0, 0, 0.06);

  @media (max-width: ${Theme.breakPoints.mobile}) {
    top: 0;
    left: 0;
  }
`;
