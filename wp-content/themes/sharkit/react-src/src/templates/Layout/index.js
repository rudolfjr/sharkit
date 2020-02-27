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
import Button from 'react-bootstrap/Button';

// Icones
import { FacebookSquare } from 'styled-icons/boxicons-logos';
import { LinkedinSquare } from 'styled-icons/boxicons-logos';
import { Instagram } from 'styled-icons/boxicons-logos';
import { Whatsapp } from 'styled-icons/boxicons-logos';
import { Email } from 'styled-icons/entypo';


// Componentes
import Slider from '../../components/Slider';
import Servicos from '../../components/Servicos';
import Vagas from '../../components/Vagas';

// Estilos
import GlobalStyles from '../../assets/css/global'; 
import * as S from './styled';

// Imagens
import logo from '../../assets/img/logo.png';
import logoBranca from '../../assets/img/logo-branco.png';
import quemSomos from '../../assets/img/vetor-quem-somos.jpg';



export default function Layout() {
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
    <Slider />
    <Container>
      <Row className="espacar-top">
        <Col sm={5} xs={12}>
          <S.Layouth2>Quem somos?</S.Layouth2>
          <S.Layouth3>A sua escolha certa!</S.Layouth3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, illum. Provident alias illo aliquid similique, ratione, voluptatibus porro tempore excepturi beatae odit exercitationem error eos. Libero at tenetur dolore sint?
          </p>
          <Button variant="primary">Entre em contato conosco!</Button>
          
          <S.Layouth2 className="espacar-titulos">Vagas?</S.Layouth2>
          <S.Layouth3>A todo momento algo novo!</S.Layouth3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, illum. Provident alias illo aliquid similique, ratione, voluptatibus porro tempore excepturi beatae odit exercitationem error eos. Libero at tenetur dolore sint?
          </p>
          <Button variant="primary">Confira nossas vagas!</Button>
        </Col>
        <Col className="alinhar text-right">
          <Image src={quemSomos} alt="Recrutamento SHARKIT" fluid />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3><strong>Missão</strong></h3>
          <p>
            Oferecemos as melhores soluções tecnológicas contribuindo de forma sustentável, para o crescimento de todos os nossos clientes, com valores justos e independentemente da plataforma ou do seu tipo de negocio.
          </p>
        </Col>

        <Col>
          <h3><strong>Visão</strong></h3>
          <p>
            Ser a consultoria líder no ramo de tecnologia e desenvolvimento, destacando-se sempre por criar soluções inovadoras.
          </p>
        </Col>

        <Col>
          <h3><strong>Valores</strong></h3>
          <ul>
            <li>Ética</li>
            <li>Dedicação</li>
            <li>Comprometimento</li>
            <li>Confiabilidade</li>
            <li>Inovação</li>
            <li>Qualidade</li>
            <li>Desenvolvimento</li>
            <li>Organização</li>
            <li>Agilidade</li>
          </ul>
        </Col>
      </Row>
    </Container>
    <Servicos />
    <Vagas />

    <S.FooterWrapper>
      <Container>
        <Row>
          <Col xs={12} sm={4}>
            <p>
              <img src={logoBranca} alt="SharkIT" />
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio at, veritatis officiis repudiandae laudantium eos mollitia est, quaerat laborum, alias aliquid aperiam id architecto expedita doloremque vel. Esse, laborum molestias.
            </p>
            <div className="redes">
              <Link to="/"><FacebookSquare /></Link> 
              <Link to="/"><LinkedinSquare /></Link> 
              <Link to="/"><Instagram /></Link> 
              <Link to="/"><Email /></Link> 
              <Link to="/"><Whatsapp /></Link> 
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
