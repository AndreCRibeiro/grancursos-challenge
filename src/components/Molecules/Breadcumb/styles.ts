import styled from 'styled-components';
import Theme from '../../../styles/Theme';

export const Container = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 51px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }

  h3 {
    font-size: 24px;
    font-weight: 400;
  }

  @media (max-width: ${Theme.breakPoints.mobile}) {
    margin-top: 35px;
    margin-bottom: 18px;
    div {
      svg {
        width: 12px;
      }
      span {
        font-size: 12px;
      }
    }
    h3 {
      font-size: 12px;
      font-weight: 400;
    }
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 32px;
  background: #979797;
  margin: 0px 15px;

  @media (max-width: ${Theme.breakPoints.mobile}) {
    margin: 0px 5px;
  }  
`;

export const SettingsDiv = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--red-500);
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
  }
`;
