import React from 'react';
import TestData from './../../components/TestData/TestData';
import { Container } from 'reactstrap';

const Layout = (props) => {
  return (
    <div className="Layout">
      {/* {props.children} */}
      <Container>
        <TestData />
      </Container>
    </div>
  );
};

export default Layout;
