import React from 'react';
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';

const ProductsPage = () => {
  return (
    <>
      <Head>
        <title>AP PRODUCTS - Productos</title>
      </Head>
      <Container>
        <Row>
          <Col>
            <h1>Nuestros Productos</h1>
            <ul>
              <li>Plancha de cabello - Plancha Remington aguacate - $220.000</li>
              <li>Plancha de cabello - Plancha Remington Keratina - $250.000</li>
              <li>Plancha de cabello - Plancha Remington purple - $150.000</li>
              {/* Agrega más productos según sea necesario */}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductsPage;
