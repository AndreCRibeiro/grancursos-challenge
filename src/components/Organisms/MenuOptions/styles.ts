import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  height: fit-content;
  background: var(--light-0);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.170509);
  padding: 31px 23px;
`;

export const CloseDiv = styled.div`
  position: absolute;
  top: 30px;
  left: 240px;
  color: var(--red-500);

  svg {
    width: 22px;
    height: 22px;
  }
`;