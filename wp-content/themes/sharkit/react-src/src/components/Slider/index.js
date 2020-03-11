// CORE REACT
import React, { useEffect, useState } from 'react';
import api from '../../utils/Api';
// Boostrap Components
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

// Estilos
import * as S from './styled';

export default function Slider() {

  const [sliders, setSliders] = useState([]);

  useEffect(() => {
      async function getSliders(){
          const response = await  api.get(`wp-json/wp/v2/slider`);
          setSliders(response.data);     
      }
      getSliders();
  }, []);


  return (
    <Carousel>
      {sliders.map(slide => (
      <Carousel.Item key={slide.id}>
        <S.SliderWrapper>
            <S.SliderImage imagem={slide.fimg_url}>
                <S.SliderText>
                    <Container>
                        <S.SliderH1 dangerouslySetInnerHTML={{ __html: slide.titulo_1 }} />
                        <S.SliderH2 dangerouslySetInnerHTML={{ __html: slide.titulo_2 }} />
                    </Container>
                </S.SliderText>
            </S.SliderImage>
        </S.SliderWrapper>
      </Carousel.Item>
      ))}
    </Carousel>
  );
}