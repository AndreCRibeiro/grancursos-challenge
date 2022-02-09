import styled from 'styled-components';
import Theme from '../../../styles/Theme';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 30px 35px;

  @media (max-width: ${Theme.breakPoints.mobile}) {
    padding: 15px;
  }

  main {
    display: flex;

    @media (max-width: ${Theme.breakPoints.ipad}) {
    flex-direction: column;
    }
  }

  footer {
    margin-top: 80px;
    padding-bottom: 40px;
    width: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: ${Theme.breakPoints.mobile}) {
      margin-top: 0px;
    }
  }
`;
