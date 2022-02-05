import styled from 'styled-components';

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
`;

export const Line = styled.div`
  width: 1px;
  height: 32px;
  background: #979797;
  margin: 0px 15px;
`;

export const SettingsDiv = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #717171;
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
