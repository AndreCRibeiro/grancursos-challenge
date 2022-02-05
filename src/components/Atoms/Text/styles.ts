import styled from 'styled-components';

interface GeneralTextProps {
  isAtMenuOptions?: boolean;
}

export const GeneralText = styled.p<GeneralTextProps>`
  font-size: 14px;
  color: #999999;
  font-weight: 400;
  margin-bottom: 10px;
  margin-left: ${props => props.isAtMenuOptions ? '14px' : '0px'};
  margin-top: ${props => props.isAtMenuOptions ? '25px' : '0px'};
`;
