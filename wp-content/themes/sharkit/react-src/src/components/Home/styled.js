import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    desktop: "1199px",
    tablet: "991px",
    mobile: "768px"
});


export const MenuWrapper = styled.section`
    display: block;
    width: 100%;
    -webkit-box-shadow: 10px 10px 43px -17px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 43px -17px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 43px -17px rgba(0,0,0,0.75);

    img{
        max-height: 50px;
        width: auto;
    }

    ${customMedia.lessThan("desktop")`
        font-size: 18px;        
    `}
`;

export const Layouth2 = styled.h2`
    font-size: 42px;
    font-weight: 300;

    ${customMedia.lessThan("desktop")`
        font-size: 32px;        
    `}
`;

export const Layouth3 = styled.h3`
    font-size: 32px;
    font-weight: 700;

    ${customMedia.lessThan("desktop")`
        font-size: 24px;        
    `}
`;



export const FooterWrapper = styled.section`
    display: block;
    width: 100%;
    background-color: #333333;
    padding: 40px 0px;
    color: #fff;

    img{
        max-height: 100px;
    }

    a{
        color: #fff;
        font-size: 14px;

        svg{
            max-height: 32px;
        }
    }

    ul{
        padding-left:20px;
    }

    h4{
        margin-top: 60px;
    }

    .redes{
        a{
            width: 32px;
            height: 32px;
            display: inline-block;
            position: relative;
            float: left;
            margin: 5px;
        }
    }


    ${customMedia.lessThan("desktop")`
        font-size: 14px;        
    `}
`;