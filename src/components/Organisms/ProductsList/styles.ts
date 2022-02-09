import styled from 'styled-components';
import Theme from '../../../styles/Theme';

export const Container = styled.div`
  width: 100%;
  padding: 0px 2px 0px 30px;
  margin-bottom: 30px;

  input {
    width: 100%;
    height: 62px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    padding: 10px 30px;
    border: none;
    margin-bottom: 28px;
  }

  @media (max-width: ${Theme.breakPoints.ipad}) {
    padding: 0px 2px 0px 3px;
  }

  @media (max-width: ${Theme.breakPoints.mobile}) {
    margin-bottom: 10px;
  }
`;

export const HeaderProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 15px;

  > span {
    align-self: end;

    @media (max-width: ${Theme.breakPoints.ipad}) {
      font-size: 12px;
      padding-right: 5px;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const IconDiv = styled.div`
  width: 40px;
  height: 40px;
  background: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  &.icon {
    margin-right: 13px;
  }
`;