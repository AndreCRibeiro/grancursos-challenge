import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
  .form-control {
  display: flex;
  align-items: baseline;
  }

  span {
    font-size: 14px;
    color: #2C2C2C;
    cursor: pointer;
  }

  input {
    margin-right: 10px;
  }

  input[type="checkbox"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    margin: 0rem 0.5rem 0rem 0rem;
    width: 1.15em;
    height: 1.15em;
    border: 0.01em solid gray;
    border-radius: 0.15em;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;
    
    cursor: pointer;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    /* Windows High Contrast Mode */
    background-color: red;
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }
`;