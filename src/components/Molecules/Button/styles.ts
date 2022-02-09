import styled from 'styled-components';
import Theme from '../../../styles/Theme';

interface ButtonProps {
  lighterBackgroundColor?: boolean;
}

export const Container = styled.button<ButtonProps>`
    width: 100%;
    height: 56px;
    background: ${props => props.lighterBackgroundColor ? '#EDEDED' : `var(--red-500)`};
    color: ${props => props.lighterBackgroundColor ? '#2c2c2c' : '#FFFFFF'};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    margin-top: 23px;
    border: none;
    font-size: 14px;
    font-weight: 600;
    transition: filter 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(0.8);
    }

    svg {
      position: relative;
      top: 1px;
      right: 8px;
      width: 18px;
      height: 18px;
    }

    @media (max-width: ${Theme.breakPoints.mobile}) {
      height: 40px;
      font-size: 12px;

      svg {
      position: relative;
      top: 1px;
      right: 4px;
      width: 18px;
      height: 18px;
    }
    }
`;