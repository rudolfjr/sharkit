// CORE REACT
import React from 'react';

// Boostrap Components
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

// Estilos
import * as S from './styled';

// Imagens
import slider1 from '../../assets/img/slider-1.jpg';
import slider2 from '../../assets/img/slider-2.jpg';


export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <S.SliderWrapper>
            <S.SliderImage imagem={slider1}>
                <S.SliderText>
                    <Container>
                        <S.SliderH1>SHARKIT</S.SliderH1>
                        <S.SliderH2>Você procura,<br/>nós encontramos.</S.SliderH2>
                    </Container>
                </S.SliderText>
            </S.SliderImage>
        </S.SliderWrapper>
      </Carousel.Item>
      <Carousel.Item>
        <S.SliderWrapper>
            <S.SliderImage imagem={slider2}>
                <S.SliderText>
                    <Container>
                        <S.SliderH1>Seleção e<br/>Recrutamento</S.SliderH1>
                        <S.SliderH2>Feitos sob medida <br/>para sua empresa.</S.SliderH2>
                    </Container>
                </S.SliderText>
            </S.SliderImage>
        </S.SliderWrapper>
      </Carousel.Item>
    </Carousel>
  );
}