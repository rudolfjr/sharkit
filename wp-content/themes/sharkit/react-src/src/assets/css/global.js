import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');

    .alinhar{
        align-items: center;
        margin-top: auto;
        margin-bottom: auto;
    }

    .espacar-top{
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .espacar-titulos{
        margin-top: 80px;
    }

    .card{
        margin-bottom: 30px;
    }

`;

export default GlobalStyles; 