import styled from 'styled-components';
import Theme from '../../../styles/Theme';


export const Container = styled.div`
  width: 100%;
  background: var(--light-0);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 22px;

  @media (max-width: ${Theme.breakPoints.mobile}) {
    padding: 5px 10px;
  }
`;

export const IconsDiv = styled.div`
  svg {
    width: 18px;
    height: 18px;
    cursor: pointer;

    @media (max-width: ${Theme.breakPoints.mobile}) {
      width: 13px;
      height: 13px;
    }

    @media (max-width: ${Theme.breakPoints.smallMobile}) {
      width: 12px;
      height: 12px;
    }
  }

  svg:first-of-type {
    margin-right: 5px;

    @media (max-width: ${Theme.breakPoints.smallMobile}) {
      margin-right: 2px;
    }
  }

  svg + svg {
    margin: 0px 5px;

    @media (max-width: ${Theme.breakPoints.smallMobile}) {
      margin: 0px 3px;
    }
  }

  svg:last-of-type {
    margin-left: 5px;
    color: var(--light-500);

    @media (max-width: ${Theme.breakPoints.smallMobile}) {
      margin-left: 2px;
    }
  }
`;

export const UserOptionsDiv = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 20px;
    font-size: 14px;
    line-height: 17px;
    color: var(--dark-600);
    cursor: pointer;

    @media (max-width: ${Theme.breakPoints.mobile}) {
      margin-right: 10px;
      font-size: 12px;
    }

    @media (max-width: ${Theme.breakPoints.mobile}) {
      margin-right: 5px;
      font-size: 12px;
    }
  }

  svg {
    width: 16px;
    height: 16px;
    color: var(--mid-600);
    cursor: pointer;
    
    @media (max-width: ${Theme.breakPoints.mobile}) {
      width: 13px;
      height: 13px;
    }
  }

  svg + svg {
    margin: 0px 12px;
  }

  > div {
    display: flex;
    flex-direction: column;
    text-align: end;
    margin-right: 9px;

    span {
      font-size: 14px;
      line-height: 17px;

      @media (max-width: ${Theme.breakPoints.mobile}) {
        font-size: 12px;
      }

      @media (max-width: ${Theme.breakPoints.mobile}) {
        font-size: 11px;
      }
    }

    span + span {
      font-size: 11px;
      width: 100%;

      @media (max-width: ${Theme.breakPoints.mobile}) {
        font-size: 9px;
      }

      @media (max-width: ${Theme.breakPoints.mobile}) {
        font-size: 8px;
      }
    }
  }
`;