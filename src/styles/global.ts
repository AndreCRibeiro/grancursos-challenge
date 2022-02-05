import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F9F9F9;
    // Primary colors
    --light-0: #FFFFFF;
    --dark-900: #091E42;
    --red-500: #FF000A;
    --blue-600: #0052CC;
    
    // Secondary colors
    --green-500: #36B37E;
    --yellow-500: #FFAB00;
    --purple-500: #6554C0;

    // Neutral colors (Darken)
    --dark-800: #172B4D;
    --dark-700: #253858;
    --dark-600: ##344563;
    --dark-500: #42526E;

    // Neutral colors (Medium)
    --mid-900: #505F79;
    --mid-800: #5E6C84;
    --mid-700: #6B778C;
    --mid-600: #97A0AF;
    --mid-500: #A5ADBA;
    --mid-400: #B3BAC5;

    // Neutral colors (Lighter)
    --light-500: #C1C7D0;
    --light-400: #B3BAC5;
    --light-300: #EBECF0;
    --light-200: #F4F5F7;
    --light-100: #FAFBFC;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%;  //14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`;