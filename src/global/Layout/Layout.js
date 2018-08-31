import React from 'react';
import TestData from './../../components/TestData/TestData';
import { Container } from 'reactstrap';

const Layout = (props) => {
  return (
    <div className="Layout">
      <Container>
        {props.children}
      </Container>
    </div>
  );
};

export default Layout;
