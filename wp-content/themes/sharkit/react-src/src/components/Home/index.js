// CORE REACT
import React, { useEffect, useState } from 'react';
import api from '../../utils/Api';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import Layout from "../../templates/Layout/index";

// Componentes
import Slider from '../../components/Slider';
import Servicos from '../../components/Servicos';
import Vagas from '../../components/Vagas';

import quemSomos from '../../assets/img/vetor-quem-somos.jpg';
import * as S from './styled';

export default function Home() {

    const [conteudos, setConteudos] = useState([]);

    useEffect(() => {
        async function getConteudos(){
            const response = await  api.get(`wp-json/wp/v2/pages?slug=quem-somos`);
            setConteudos(response.data);   
        }
        getConteudos();
    }, []);

  return (
    <Layout>
        <Slider />
        <Container>
        {conteudos.map(conteudo => (
        <>
        <Row className="espacar-top">
            <Col sm={5} xs={12}>
            <S.Layouth2>Quem somos?</S.Layouth2>
            <S.Layouth3>A sua escolha certa!</S.Layouth3>
            <div dangerouslySetInnerHTML={{ __html: conteudo.texto_quem_somos }} />
            <Button variant="primary">Entre em contato conosco!</Button>
            
            <S.Layouth2 className="espacar-titulos">Vagas?</S.Layouth2>
            <S.Layouth3>A todo momento algo novo!</S.Layouth3>
            <div dangerouslySetInnerHTML={{ __html: conteudo.texto_vagas }} />
            <Button variant="primary">Confira nossas vagas!</Button>
            </Col>
            <Col className="alinhar text-right">
            <Image src={quemSomos} alt="Recrutamento SHARKIT" fluid />
            </Col>
        </Row>
        <Row>
            <Col>
            <h3><strong>Missão</strong></h3>
            <div dangerouslySetInnerHTML={{ __html: conteudo.missao }} />
            </Col>

            <Col>
            <h3><strong>Visão</strong></h3>
            <div dangerouslySetInnerHTML={{ __html: conteudo.visao }} />
            </Col>

            <Col>
            <h3><strong>Valores</strong></h3>
            <div dangerouslySetInnerHTML={{ __html: conteudo.valores }} />
            </Col>
        </Row>
        </>
        ))}
        </Container>
        <Servicos />
        <Vagas />
    </Layout>
  );
}
