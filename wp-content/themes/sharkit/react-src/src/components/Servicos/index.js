import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import * as S from './styled';

import iconeRh from '../../assets/img/icone-rh.png';
import iconeInfra from '../../assets/img/icone-infra.png';
import iconeHunting from '../../assets/img/icone-hunting.png';
import iconeAlocacao from '../../assets/img/icone-alocacao.png';
import iconeTreinamento from '../../assets/img/icone-treinamento.png';

export default function Servicos() {
  return (
    <S.ServicosWrapper>
        <Container>
            <Row>
                <Col>
                    <S.ServicosSecaoTitle>Nossos Serviços</S.ServicosSecaoTitle>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src={iconeRh} fluid />
                    <S.ServicosTitle>Extensão de RH</S.ServicosTitle>
                    <Button variant="primary">Conheça</Button>
                </Col>
                <Col>
                    <Image src={iconeInfra} fluid />
                    <S.ServicosTitle>Infraestrutura</S.ServicosTitle>
                    <Button variant="primary">Conheça</Button>
                </Col>
                <Col>
                    <Image src={iconeHunting} fluid />
                    <S.ServicosTitle>Hunting</S.ServicosTitle>
                    <Button variant="primary">Conheça</Button>
                </Col>
                <Col>
                    <Image src={iconeAlocacao} fluid />
                    <S.ServicosTitle>Alocação de Profissionais</S.ServicosTitle>
                    <Button variant="primary">Conheça</Button>
                </Col>
                <Col>
                    <Image src={iconeTreinamento} fluid />
                    <S.ServicosTitle>Treinamento</S.ServicosTitle>
                    <Button variant="primary">Conheça</Button>
                </Col>
            </Row>
        </Container>
    </S.ServicosWrapper>
  );
}
