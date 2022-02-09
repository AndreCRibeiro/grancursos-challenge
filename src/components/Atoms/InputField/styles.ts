import styled from 'styled-components';
import Theme from '../../../styles/Theme';

export const Container = styled.div`
    div {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 48px;

      input {
        border: none;
        font-size: 16px;
        width: 100%;
        background: transparent;
        &:focus {
          outline: none;
        }
      }
    }
    svg {
      position: absolute;
      top: 293px;
      right: 60px;
      width: 18px;
      height: 18px;
    }

    @media (max-width: ${Theme.breakPoints.ipad}) {
      svg {
        top: 340px;
        right: -20px;
      }
    }

    @media (max-width: ${Theme.breakPoints.ipadMini}) {
      svg {
        right: -60px;
      }
    }

    @media (max-width: ${Theme.breakPoints.mobile}) {
      svg {
        top: 245px;
        right: 50px;
      }
    }
`;