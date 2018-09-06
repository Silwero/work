import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="5" className="footer-col footer-left">
          </Col>
          <Col lg="7"className="footer-col footer-right">
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
