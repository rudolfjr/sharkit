// CORE REACT
import React, { useEffect, useState } from 'react';
import api from '../../utils/Api';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import * as S from './styled';

export default function Vagas() {

    const [vagas, setVagas] = useState([]);
    const [porOffset, setOffset] = useState(0);

    useEffect(() => {
        async function getVagas(){
            const response = await  api.get(`wp-json/wp/v2/vaga?per_page=8`);
            setVagas(response.data); 
            setOffset(8);   
        }
        getVagas();
    }, []);


    async function getMaisVagas(event){

        setOffset(parseInt(event.target.dataset.numeracao) + 4);
        const response = await  api.get(`/wp-json/wp/v2/vaga?per_page=4&offset=${porOffset}`);
        setVagas(vagas.concat(response.data));
    }


  return (
    <>
    <Container>
        <Row>
            <Col>
                <S.VagasTitle>Nossas Vagas</S.VagasTitle>
            </Col>
        </Row>
        <Row>
            <Col className="text-center">
                <form class="form-inline">
                    <div class="form-group mb-2">
                        <label for="staticEmail2" class="sr-only">PALAVRAS CHAVES</label>
                        <input type="text" class="form-control" placeholder="Digite as palavras desejadas*" required /> 
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">BUSCAR</button> 
                    <button class="btn btn-primary mb-2">LIMPAR</button>
                </form>
            </Col>
        </Row>
        <Row>
        {vagas.map(vaga => (
            <Col xs={12} sm={6} md={4} lg={3} key={vaga.id}>
                <Card>
                    <Card.Img variant="top" src={vaga.fimg_url} />
                    <Card.Body>
                        <Card.Title dangerouslySetInnerHTML={{ __html: vaga.title.rendered }} />
                        <Card.Text dangerouslySetInnerHTML={{ __html: vaga.excerpt.rendered }} />
                        <p>
                            VAGA ID: <strong>#{vaga.id}</strong>
                        </p>
                        <S.vagasLink to={'/vaga/' + vaga.slug}>Mais Informações</S.vagasLink>
                    </Card.Body>
                </Card>
            </Col>
        ))}
        </Row>
        <Row>
            <Col className="text-center">
                <button className="btn btn-primary" onClick={getMaisVagas} data-numeracao={porOffset}>Carregar Mais Vagas</button>
                <p>&nbsp;</p>
            </Col>
        </Row>
    </Container>
    </>
  );
}
