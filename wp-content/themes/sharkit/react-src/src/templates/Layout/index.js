// CORE REACT
import React from 'react';
import { Link } from 'react-router-dom';

// Boostrap Components
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


// Icones
import { FacebookSquare } from 'styled-icons/boxicons-logos';
import { LinkedinSquare } from 'styled-icons/boxicons-logos';
import { Instagram } from 'styled-icons/boxicons-logos';
import { Whatsapp } from 'styled-icons/boxicons-logos';
import { Email } from 'styled-icons/entypo';


// Estilos
import GlobalStyles from '../../assets/css/global'; 
import * as S from './styled';

// Imagens
import logo from '../../assets/img/logo.png';
import logoBranca from '../../assets/img/logo-branco.png';

export default function Layout(props) {
    
  return (
    <>
    <GlobalStyles />
    <S.avisoWrapper>
      <Container>
        <Row>
          <Col className="text-center">
          (19) 996195752 | <a href="mailto:relacionamento@sharkit.com.br">relacionamento@sharkit.com.br</a> | Rua peru, 259 Amparo SP
          </Col>
        </Row>
      </Container>
    </S.avisoWrapper>
    <S.MenuWrapper>
      <Navbar expand="lg" >      
        <Container>
          <Navbar.Brand href="/"><Image src={logo} alt="SharkIT" fluid /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/#quem-somos">Quem Somos</Nav.Link>
              <Nav.Link href="/#servicos">Nossos Serviços</Nav.Link>
              <Nav.Link href="/#vagas">Vagas</Nav.Link>
              <Nav.Link href="/#contato">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </S.MenuWrapper>
    
    {props.children}

    <S.FooterWrapper>
      <Container>
        <Row>
          <Col xs={12} sm={4}>
            <p>
              <img src={logoBranca} alt="SharkIT" />
            </p>
            <div className="redes">
              <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/Shark.IT.Solucoes/"><FacebookSquare /></a> 
              <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/company/shark-it-r-s/"><LinkedinSquare /></a> 
              <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/sharkitconsultoria/"><Instagram /></a> 
              <a rel="noopener noreferrer" target="_blank" href="mailto:relacionamento@sharkit.com.br"><Email /></a> 
              <a rel="noopener noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=5519996195752&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20SharkIT"><Whatsapp /></a> 
            </div>
          </Col>
          <Col xs={12} sm={4}></Col>
          <Col xs={12} sm={4}>
            <h4><strong>MENU</strong></h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/#quem-somos">Quem Somos</Link></li>
              <li><Link to="/#servicos">Nossos Serviços</Link></li>
              <li><Link to="/#vagas">Vagas</Link></li>
              <li><Link to="/#contato">Contato</Link></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
          <hr/>
          <small>Criado por <a rel="follow noopener noreferrer" href="https://www.linkedin.com/in/rudolfkrokerjr/" target="_blank" >rudolf.dev</a></small>
          </Col>
        </Row>
      </Container>
    </S.FooterWrapper>
    </>
  );
}
