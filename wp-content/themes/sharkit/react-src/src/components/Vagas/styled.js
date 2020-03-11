import styled from 'styled-components';
import { generateMedia } from "styled-media-query";
import { Link } from 'react-router-dom';

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

export const vagasLink = styled(Link)`
  background-color: #007bff;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  padding: 10px 20px;
  font-weight: 700;
  text-decoration: none;
  display: inline-block;

  &:hover{
    text-decoration: none;
    color: #fff;
    opacity: 0.9;
  }
`;