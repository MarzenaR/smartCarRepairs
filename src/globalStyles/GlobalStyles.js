import { createGlobalStyle } from "styled-components";
import UKNumberPlate from "../assets/fonts/UKNumberPlate.ttf";

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: UKNumberPlate;
    src: url(${UKNumberPlate});
    font-style: normal;
    font-weight: 400;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body {
    margin: auto;
    background-color: #f5f5f5 ;
    /* font-family: 'Montserrat', sans-serif; */
font-family: 'Open Sans', sans-serif;
/* font-family: 'Roboto', sans-serif; */



}

svg{
    width: auto;
    height: auto;
}

`;

export default GlobalStyles;
