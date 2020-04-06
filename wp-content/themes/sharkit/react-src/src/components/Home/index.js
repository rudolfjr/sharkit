// CORE REACT
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
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
    const quemSomosDiv = useRef();
    const nossosServicosDiv = useRef();
    const vagasDiv = useRef();
    let hash = window.location.hash;

    const rolar = () => {
        if(hash) {  
            if( hash === "#quem-somos"){
                window.scrollTo({
                    behavior: "smooth",
                    top: quemSomosDiv.current.offsetTop
                });
                console.log('troca 1');
            }else if( hash === "#servicos"){
                window.scrollTo({
                    behavior: "smooth",
                    top: nossosServicosDiv.current.offsetTop
                });
                console.log('troca 2');
            }else if( hash === "#vagas"){
                window.scrollTo({
                    behavior: "smooth",
                    top: vagasDiv.current.offsetTop
                });
                console.log('troca 3');
            }else if( hash === "#contato"){
                window.scrollTo(0,document.body.scrollHeight);
                console.log('troca 4');
            }
            
        }
    };

    useEffect(() => {
        async function getConteudos(){
            const response = await  api.get(`wp-json/wp/v2/pages?slug=quem-somos`);
            setConteudos(response.data);   
        }
        getConteudos();
        
        setTimeout(() => {                                             // third, we create a setTimeout function to wrap
            rolar();
        }, 500); 

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hash]);

  return (
    <Layout>
        <Slider />
        <Container>
        {conteudos.map(conteudo => (
        <>
        <Row className="espacar-top" ref={quemSomosDiv}>
            <Col>
                <S.Layouth2>Quem somos?</S.Layouth2>
            </Col>
        </Row>        
        <Row >
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
        <Row >
            <Col sm={5} xs={12}>
            
            <S.Layouth3>A sua escolha certa!</S.Layouth3>
            <div dangerouslySetInnerHTML={{ __html: conteudo.texto_quem_somos }} />
            <a href="mailto:relacionamento@sharkit.com.br" className="btn btn-primary">Entre em contato conosco!</a>
            
            <S.Layouth2 className="espacar-titulos">Vagas?</S.Layouth2>
            <S.Layouth3>#NósBuscamosVocê!</S.Layouth3>
            <div dangerouslySetInnerHTML={{ __html: conteudo.texto_vagas }} />
            <Link to="/#vagas" className="btn btn-primary">Confira nossas vagas!</Link>
            </Col>
            <Col className="alinhar text-right">
            <Image src={quemSomos} alt="Recrutamento SHARKIT" fluid />
            </Col>
        </Row>
        </>
        ))}

        <Row>
            <Col>
                <div className="video-responsivo">
                    <iframe title="Video" width="560" height="315" src="https://www.youtube.com/embed/lzdCsS1Bv8w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </Col>
        </Row>
        </Container>
        <div ref={nossosServicosDiv} />
        <Servicos />
        <div ref={vagasDiv} />
        <Vagas />
    </Layout>
  );
}
