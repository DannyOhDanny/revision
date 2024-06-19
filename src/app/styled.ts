import { createGlobalStyle } from 'styled-components';

const AppStyles = createGlobalStyle`

html {
display: flex;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

* {
    padding: 0;
    margin: 0;
}

h1 {
   font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: normal;
  
}

h2 {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 24px;
  font-weight: 700;
  line-height: normal;
}


h3 {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
}

p {
    font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: normal; 
}


ul,
    ol {
    list-style: none;
}

html {
    scroll-behavior: smooth;

&:focus-within {
        scroll-behavior: smooth;
    }
}

a {
   text-decoration: none;
 }

 body {
    min-height: 100%;
    text-rendering: optimizespeed;
    background-color: white;
    margin: 0 auto;
}

*,
*::before,
*::after {
        transition-duration: 0.01ms !important;
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        scroll-behavior: auto !important;
    }
}

button {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
}

`;

export default AppStyles;
