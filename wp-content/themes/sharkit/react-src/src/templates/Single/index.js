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

    const [title, setTitle] = useState("CANDIDATAR A VAGA");
    const [aviso, setAviso] = useState("");
    const [isSending, setIsSending] = useState(false)

    useEffect(() => {
        async function getConteudos(){
            const response = await  api.get(`wp-json/wp/v2/vaga?slug=${slug}`);
            setConteudos(response.data);   
        }
        getConteudos();
        window.scrollTo(0, 0);
    }, [slug]);


    async function handleSubmit(e){
        e.preventDefault();
  
        if (isSending) return
        // update state
        setIsSending(true);
  
        var myForm = document.querySelector('form');
        var formData = new FormData(myForm);
        const response = await api.post('/wp-admin/admin-ajax.php?action=enviarformulario', formData);
        //console.log(response);
  
        if(response.data.erro === 'arquivopdf'){
          setAviso('Só são aceitos arquivos PDF e Word!');
          setTitle("Enviar Formulário Novamente");
          setIsSending(false);
        }
  
        if(response.data.resposta === true){
          setIsSending(false);
          setTitle("Seu CV foi enviado com sucesso! Obrigado.");
          alert('CV enviado com sucesso!');
        }
      }

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
                    <form onSubmit={handleSubmit}>
                        <input type="hidden" name="idvaga" value={conteudo.id} />
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
                            <label>Anexe seu CV (PDF)</label>
                            <input required type="file" name="arquivo" className="form-control" placeholder="Anexe seu CV"/>
                        </p>
                        <p>
                        <button type="submit" className="btn btn-primary">{title}</button>
                        </p>
                        <p><strong>{aviso}</strong></p>
                    </form>
                </Col>
            </Row>
            </>
        ))}
        </Container>
    </Layout>
  );
}
