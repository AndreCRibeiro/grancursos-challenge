import styled from 'styled-components';
import Theme from '../../../styles/Theme';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 30px 35px;

  @media (max-width: ${Theme.breakPoints.mobile}) {
    padding: 15px;
  }
`;
