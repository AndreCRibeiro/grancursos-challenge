import styled, { css } from 'styled-components';
import Theme from '../../../styles/Theme';

interface StatusOptionsFrameOptions {
  showFrame: boolean;
}

interface StatusRepresentationProps {
  statusType: 'Available' | 'Away' | 'Invisible';
}

export const Container = styled.img`
  width: 38px;
  height: 38px;
  cursor: pointer;
`;

export const StatusRepresentation = styled.div<StatusRepresentationProps>`
  position: absolute;
  right: 62px;
  top: 75px;
  width: 8px;
  height: 8px;
  border-radius: 50%;

  ${props =>
    props.statusType === 'Available' &&
    css`
      background: green;
  `}
  ${props =>
    props.statusType === 'Away' &&
    css`
      background: yellow;
  `}
  ${props =>
    props.statusType === 'Invisible' &&
    css`
      background: gray;
  `}
  

  @media (max-width: ${Theme.breakPoints.ipad}) {
    right: -52px;
    top: 76px;
  }

  @media (max-width: ${Theme.breakPoints.ipadMini}) {
    right: -104px;
  }

  @media (max-width: ${Theme.breakPoints.mobile}) {
    right: 30px;
    top: 48px;
  }
`;

export const StatusOptionsFrame = styled.div<StatusOptionsFrameOptions>`
  position: absolute;
  width: 100px;
  top: 85px;
  right: 50px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 12px 48px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  visibility: ${props => (props.showFrame ? '' : 'hidden')};

  button {
    display: flex;
    align-items: center;

    width: 100%;
    height: 100%;
    padding: 7px 15px;

    background: transparent;
    color: rgba(40, 40, 40, 1);
    border: none;
    font-size: 14px;
    border-bottom: 0.5px solid red;
    
    &:hover {
      background: rgba(255, 25, 25, 0.6);
    }
  }

  &::before {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    top: 0;
    background: #de3131;
    padding: 0;
  }

  @media (max-width: ${Theme.breakPoints.ipad}) {
    right: -56px;
  }

  @media (max-width: ${Theme.breakPoints.ipadMini}) {
    right: -110px;
  }

  @media (max-width: ${Theme.breakPoints.mobile}) {
    right: 27px;
    top: 57px;
  }
`;