import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    desktop: "1199px",
    tablet: "991px",
    mobile: "768px"
});

// Configuração para o topo do site */
export const MenuWrapper = styled.section`
    display: block;
    width: 100%;
    border-top: 15px solid #205ce2;
    -webkit-box-shadow: 10px 10px 43px -17px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 43px -17px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 43px -17px rgba(0,0,0,0.75);

    img{
        max-height: 50px;
        width: auto;
    }

    ${customMedia.lessThan("desktop")`
        font-size: 14px;        
    `}
`;

export const Layouth2 = styled.h2`
    font-size: 42px;
    font-weight: 300;

    ${customMedia.lessThan("desktop")`
        font-size: 14px;        
    `}
`;

export const Layouth3 = styled.h3`
    font-size: 32px;
    font-weight: 700;

    ${customMedia.lessThan("desktop")`
        font-size: 14px;        
    `}
`;