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

    .video-responsivo{

        position: relative;
        padding-bottom: 56.25%;
        padding-top: 30px; 
        height: 0; 
        overflow: hidden;
        margin-top: 50px;
        margin-bottom: 50px;

        iframe, object, embed {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }



`;

export default GlobalStyles; 