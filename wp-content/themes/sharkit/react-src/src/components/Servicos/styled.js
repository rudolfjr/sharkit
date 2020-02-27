import styled from 'styled-components';
import { generateMedia } from "styled-media-query";
import fundoServicos from '../../assets/img/fundo-servicos.jpg';

const customMedia = generateMedia({
    desktop: "1199px",
    tablet: "991px",
    mobile: "768px"
});


export const ServicosWrapper = styled.section`
    background-image: url(${fundoServicos});
    width: 100%;
    background-size: cover;
    background-position: center;
    display: table;
    padding: 70px 0px;
    text-align: center;
    border-top: 1px solid #e2e2e2;
    margin-top: 50px;

    ${customMedia.lessThan("desktop")`
        font-size: 14px;        
    `}
`;

export const ServicosTitle = styled.h2`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 18px;
    margin: 15px 0px;
    text-align: center;
    min-height: 40px;
`;

export const ServicosSecaoTitle = styled.h2`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 32px;
    margin: 0px;
    margin-bottom: 70px;
    text-align: center;
`;

export const ServicoCaixa = styled.div`
    
    ${customMedia.lessThan("desktop")`    
        margin-bottom: 60px;
    `}
`;
