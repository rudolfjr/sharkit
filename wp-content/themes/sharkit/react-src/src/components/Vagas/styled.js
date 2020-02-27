import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    desktop: "1199px",
    tablet: "991px",
    mobile: "768px"
});


export const VagasTitle = styled.h2`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 32px;
    margin: 70px 0px;
    text-align: center;

    ${customMedia.lessThan("desktop")`
        font-size: 24px;        
    `}
`;
