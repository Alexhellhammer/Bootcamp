import React from 'react';
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>AP PRODUCTS - Inicio</title>
      </Head>
      <Container>
        <Row>
          <Col>
            <h1>Bienvenido a AP PRODUCTS</h1>
            <p>Tienda en Internet a precios de remate Colombia encuentra las mejores Ofertas a un clic de tu puerta. Seguridad y Respaldo en todas tus compras.</p>
            <p>Nuestra misión es: <strong>"Proporcionar autoestima y calidad de vida a nuestros clientes".</strong></p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IndexPage;
