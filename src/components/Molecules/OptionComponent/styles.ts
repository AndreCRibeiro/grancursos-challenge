import styled from 'styled-components';

interface ContainerProps {
  isSelected?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 36px;
  background: ${props => props.isSelected ? '#ECECEC' : ''};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 13px;
  border-radius: 4px;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
  }

  svg {
    width: 14px;
    height: 15px;
    margin-right: 7px;
  }

  div + svg {
    width: 14px;
    height: 15px;
  }
`;

export const Text = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #2C2C2C;
`;
