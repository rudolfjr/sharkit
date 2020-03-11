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
    <S.MenuWrapper>
      <Navbar expand="lg" >      
        <Container>
          <Navbar.Brand href="#home"><Image src={logo} alt="SharkIT" fluid /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Quem Somos</Nav.Link>
              <Nav.Link href="#link">Nossos Serviços</Nav.Link>
              <Nav.Link href="#link">Vagas</Nav.Link>
              <Nav.Link href="#link">Contato</Nav.Link>
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
              <a href="/"><FacebookSquare /></a> 
              <a href="/"><LinkedinSquare /></a> 
              <a href="/"><Instagram /></a> 
              <a href="/"><Email /></a> 
              <a href="/"><Whatsapp /></a> 
            </div>
          </Col>
          <Col xs={12} sm={4}></Col>
          <Col xs={12} sm={4}>
            <h4><strong>MENU</strong></h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Quem Somos</Link></li>
              <li><Link to="/">Nossos Serviços</Link></li>
              <li><Link to="/">Vagas</Link></li>
              <li><Link to="/">Contato</Link></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
          <hr/>
          <small>Criado por <Link to="https://rudolf.dev">rudolf.dev</Link></small>
          </Col>
        </Row>
      </Container>
    </S.FooterWrapper>
    </>
  );
}
