import { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    //min-height: fit-content;
  }

  @keyframes overlayShow {
    0% { opacity: 1 };
    100% { opacity: 0 };
  }
  
  @keyframes contentShow {
    0% { 
      opacity: 0;
      transform: translate(-50%, -48%) scale(.96) 
    };
    100% { 
      opacity: 1;
      transform: translate(-50%, -50%) scale(1) 
    };
  }
`