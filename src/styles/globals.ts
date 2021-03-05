import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;

  }
  *, html, body {
    background: var(--background);

  }
  html{
    overflow-y: scroll;
    scrollbar-color: rgba(12, 21, 94, .4) transparent;
    scrollbar-width: thin;
    scroll-behavior: smooth;
    -moz-appearance: none !important;

    ::-webkit-scrollbar {
        width: 20px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
       scrollbar-color: rgba(12, 21, 94, .4) transparent;
      border-radius: 20px;
      border: 6px solid transparent;
      background-clip: content-box;

    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: var(--primary);
      cursor: pointer;
    }
  }

  *, input, button{
    border: 0;
    outline: none;
    background: none;
    font-family: "Poppins", sans-serif;
  }

  :root{
    --primary:    #95a5a6;
    --secondary:  #34495e;
    --tertiary:   #bdc3c7;
    --background: #f5f6fa;
  }
`