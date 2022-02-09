import styled from 'styled-components';
import Theme from '../../../styles/Theme';

export const Container = styled.div`
  p {
    font-size: 18px;
    color: #2C2C2C;
    margin-bottom: 22px;
  }
`;

export const FilterSmallScreens = styled.div`
    display: flex;

    svg {
      width: 20px;
      height: 20px;
      stroke: red;
      margin-left: 5px;
    }
`;

export const FilterOpenedOnSmallScreens = styled.div`
  position: absolute;
  top: 215px;
  left: 330px;
  z-index: 2;
  box-shadow: 0px 12px 48px rgba(0, 0, 0, 0.06);

  @media (max-width: ${Theme.breakPoints.mobile}) {
    top: 145px;
    left: 85px;
  }

  @media (max-width: ${Theme.breakPoints.smallMobile}) {
    top: 170px;
    left: 0;
  }
`;
