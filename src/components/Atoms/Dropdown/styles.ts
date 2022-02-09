import styled from 'styled-components';

type Props = {
  isOpen: boolean;
};

export const Container = styled.div<Props>`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 40px;
  width: 120px;

  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  margin-right: 13px;

  .html-select {
    display: none;
  }
  .custom-select-wrapper {
    position: relative;
    user-select: none;
    width: 100%;
    top: 0;
    left: 0;
  }
  .custom-select {
    padding-right: 30px;
    position: relative;
    cursor: pointer;
    color: #2C2C2C;
  }
  .custom-select__trigger {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 100%;
  }
  .custom-options {
    position: absolute;
    display: block;
    top: 18px;
    left: -8px;
    width: 100%;
    overflow: auto;
    max-height: 400px;
    right: 0;
    background: white;
    transition: all 0.3s;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    z-index: 2;
    padding: 8px;
    border-width: 10px;

    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background: yellow;
    }
  }
  .custom-select.open .custom-options {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
    margin-top: 8px;
    box-shadow: -1px 1px 2px rgba(67, 70, 74, 0.0001),
      -2px 2px 5px rgba(67, 86, 100, 0.123689);
    border-radius: 5px;
  }
  .custom-option {
    position: relative;
    display: block;
    padding: 5px 8px;
    cursor: pointer;
    transition: all 0.5s;
    border-radius: 6px;
    color: black;
    margin-bottom: 12px;
    height: 32px;
    width: 100%;
  }
  .custom-option:hover {
    cursor: pointer;
    background-color: #ddd;
    color: black;
  }
  .custom-option.selected {
    color: black;
    background-color: white;
  }

  .arrow {
    position: relative;
    height: 7.72px;
    width: 12.26px;
    left: 25px;
  }
  .arrow::before,
  .arrow::after {
    content: '';
    position: absolute;
    bottom: 0px;
    width: 0.15rem;
    height: 100%;
    transition: all 0.5s;
  }
  .arrow::before {
    left: -2px;
    transform: rotate(45deg);
    background-color: red;
  }
  .arrow::after {
    left: 2px;
    transform: rotate(-45deg);
    background-color: red;
  }
  .open .arrow::before {
    left: -2px;
    transform: rotate(-45deg);
  }
  .open .arrow::after {
    left: 2px;
    transform: rotate(45deg);
  }
`;
