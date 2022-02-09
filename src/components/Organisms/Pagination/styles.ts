import styled from 'styled-components';
import Theme from '../../../styles/Theme';

interface DotsProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WhiteDot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #EDEDED;
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: ${Theme.breakPoints.mobile}) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: ${Theme.breakPoints.mobile}) {
    width: 25px;
    height: 25px;
  }
`;

export const NumbersDiv = styled.div`
  margin-left: 17px;
  margin-right: 17px;
  background: #EDEDED;
  display: flex;
  border-radius: 20px;
  height: 40px;
  padding: 0 10px;

  @media (max-width: ${Theme.breakPoints.mobile}) {
    height: 30px;
    padding: 0 5px;
    margin-left: 10px;
    margin-right: 10px;
    max-width: 300px;
  }

  @media (max-width: ${Theme.breakPoints.mobile}) {
    height: 25px;
    max-width: 260px;
  }
`;

export const NumberSelect = styled.div<DotsProps>`
  width: 40px;
  background: ${props => props.selected ? `var(--red-500)` : ''};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.selected ? '#fff' : ''};
  cursor: pointer;
`;