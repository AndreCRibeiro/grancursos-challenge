import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  background: var(--light-0);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 22px;
`;

export const IconsDiv = styled.div`
  svg {
    width: 18px;
    height: 18px;
  }

  svg:first-of-type {
    margin-right: 5px;
  }

  svg + svg {
    margin: 0px 5px;
  }

  svg:last-of-type {
    margin-left: 5px;
    color: #ddd
  }
`;

export const UserOptionsDiv = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 20px;
  }

  svg {
    width: 16px;
    height: 16px;
    color: #606060
  }

  svg + svg {
    margin: 0px 12px;
  }
`;