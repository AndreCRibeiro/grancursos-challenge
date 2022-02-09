import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 8px;
    cursor: pointer;

    div {
      display: flex;
      svg {
        margin-top: 2px;
        color: var(--blue-600);
      }
    }

    span {
      margin-left: 10px;
      font-size: 16px;
    }
`;