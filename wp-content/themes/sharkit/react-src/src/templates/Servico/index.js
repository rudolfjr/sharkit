// CORE REACT
import React, { useEffect, useState } from 'react';
import api from '../../utils/Api';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Layout from "../../templates/Layout/index";

// Componentes
import Vagas from '../../components/Vagas';


export default function Servico({match}) {

    const {slug} = match.params;
    const [conteudos, setConteudos] = useState([]);

    useEffect(() => {
        async function getConteudos(){
            const response = await  api.get(`wp-json/wp/v2/servico?slug=${slug}`);
            setConteudos(response.data);   
        }
        getConteudos();
    }, [slug]);

  return (
    <Layout>
        <Container>
        {conteudos.map(conteudo => (
            <Row key={conteudo.id}>
                <Col>
                    <p>&nbsp;</p>
                    <h2><strong dangerouslySetInnerHTML={{ __html: conteudo.title.rendered }} /></h2>
                    <div dangerouslySetInnerHTML={{ __html: conteudo.content.rendered }} />
                </Col>
            </Row>
        ))}
        </Container>
        <Vagas />
    </Layout>
  );
}
