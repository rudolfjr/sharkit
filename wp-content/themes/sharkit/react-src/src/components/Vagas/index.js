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

    useEffect(() => {
        async function getVagas(){
            const response = await  api.get(`wp-json/wp/v2/vaga?per_page=8`);
            setVagas(response.data);    
        }
        getVagas();
    }, []);


  return (
    <>
    <Container>
        <Row>
            <Col>
                <S.VagasTitle>Nossas Vagas</S.VagasTitle>
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
                        <S.vagasLink to={'/vaga/' + vaga.slug}>Mais Informações</S.vagasLink>
                    </Card.Body>
                </Card>
            </Col>
        ))}
        </Row>
    </Container>
    </>
  );
}
