import styled from 'styled-components';
import Theme from '../../../styles/Theme';


export const Container = styled.div`
  width: 371px;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  padding: 32px 25px;

  > svg {
    position: absolute;
    right: 20px;
  }

  @media (max-width: ${Theme.breakPoints.notebook}) {
    width: 300px;
  }
`;

export const CategoryText = styled.p`
  font-size: 18px;
  color: #2c2c2c;
  font-weight: 600;
  margin-bottom: 21px;
`;

export const CategorySeparator = styled.div`
  width: 100%;
  height: 1px;
  background: #d6d6d6;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const RangeDiv = styled.div`
  display: flex;
  justify-content: space-between;
  
  span {
    font-size: 18px;
    font-weight: 800;
    color: #2c2c2c;
  }
`;