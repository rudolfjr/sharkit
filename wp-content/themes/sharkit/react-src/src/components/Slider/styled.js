import styled, { keyframes } from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    desktop: "1199px",
    tablet: "991px",
    mobile: "768px"
});

// Animações
const opacidade = keyframes`
  from {
    opacity: 0;
    margin-top: -20px;
    margin-bottom: 20px;
  }

  to {
    opacity: 1;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;


// Configuração para o topo do site */
export const SliderWrapper = styled.section`
    display: block;
    width: 100%;
`;

export const SliderImage = styled.div`
    background-image: url(${props => props.imagem});
    width: 100%;
    height: 600px;
    background-size: cover;
    background-position: center;
    display: table;

    ${customMedia.lessThan("tablet")`
        height: 350px;  
    `}
`;

export const SliderText = styled.div`
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
`;

export const SliderH1 = styled.h1`
    margin: 0px;
    font-size: 72px;
    color: #205ce2;
    text-shadow: 2px 3px rgba(0,0,0,0.5);
    text-transform: uppercase;
    font-weight: 700;
    animation: ${opacidade} 2s ease;
    animation-fill-mode: forwards;
    opacity: 0;

    ${customMedia.lessThan("tablet")`
        font-size: 42px;        
    `}

    ${customMedia.lessThan("mobile")`
        font-size: 28px;     
        padding: 10px 40px;   
    `}
`;

export const SliderH2 = styled.h2`
    margin: 0px;
    font-size: 42px;
    color: #fff;
    text-shadow: 2px 3px rgba(0,0,0,0.5);
    text-transform: uppercase;
    animation: ${opacidade} 2s ease;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    opacity: 0;

    ${customMedia.lessThan("tablet")`
        font-size: 28px;        
    `}

    ${customMedia.lessThan("mobile")`
        font-size: 22px;     
        padding: 10px 40px;   
    `}
`;