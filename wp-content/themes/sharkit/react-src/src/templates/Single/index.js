// CORE REACT
import React, { useEffect, useState } from 'react';
import api from '../../utils/Api';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Layout from "../../templates/Layout/index";

export default function Single({match}) {

    const {slug} = match.params;
    const [conteudos, setConteudos] = useState([]);

    useEffect(() => {
        async function getConteudos(){
            const response = await  api.get(`wp-json/wp/v2/vaga?slug=${slug}`);
            setConteudos(response.data);   
        }
        getConteudos();
        window.scrollTo(0, 0);
    }, [slug]);

  return (
    <Layout>
        <Container>
        {conteudos.map(conteudo => (
            <>
            <Row key={conteudo.id}>
                <Col>
                    <p>&nbsp;</p>
                    <h2><strong dangerouslySetInnerHTML={{ __html: conteudo.title.rendered }} /></h2>
                    <div dangerouslySetInnerHTML={{ __html: conteudo.content.rendered }} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <form>
                        <p>
                            <input required type="text" name="nome" className="form-control" placeholder="Digite seu nome"/>
                        </p>
                        <p>
                            <input required type="email" name="email" className="form-control" placeholder="Digite seu e-mail"/>
                        </p>
                        <p>
                            <input required type="text" name="telefone" className="form-control" placeholder="Digite seu telefone"/>
                        </p>
                        <p>
                            <label>Anexe seu CV (PDF ou WORD)</label>
                            <input required type="file" name="cv" className="form-control" placeholder="Anexe seu CV"/>
                        </p>
                        <p>
                            <button type="submit" className="btn btn-primary">CANDIDATAR A VAGA</button>
                        </p>
                    </form>
                </Col>
            </Row>
            </>
        ))}
        </Container>
    </Layout>
  );
}
