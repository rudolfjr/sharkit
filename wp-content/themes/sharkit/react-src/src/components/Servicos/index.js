// CORE REACT
import React, { useEffect, useState } from 'react';
import api from '../../utils/Api';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import * as S from './styled';


export default function Servicos() {

    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        async function getServicos(){
            const response = await  api.get(`wp-json/wp/v2/servico?per_page=5`);
            setServicos(response.data);   
        }
        getServicos();
    }, []);


  return (
    <S.ServicosWrapper>
        <Container>
            <Row>
                <Col>
                    <S.ServicosSecaoTitle>Nossos Serviços</S.ServicosSecaoTitle>
                </Col>
            </Row>
            <Row>
            {servicos.map(servico => (
                <Col xs={12} sm={6} md={4} lg  key={servico.id}>
                    <S.ServicoCaixa>
                        <Image src={servico.fimg_url} fluid />
                        <S.ServicosTitle>{servico.title.rendered}</S.ServicosTitle>
                        <S.servicoLink to={'/servico/' + servico.slug}>Conheça</S.servicoLink>
                    </S.ServicoCaixa>
                </Col>
            ))}
            </Row>
        </Container>
    </S.ServicosWrapper>
  );
}
