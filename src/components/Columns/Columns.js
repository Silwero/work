import React from 'react';
import Icons from './../Icons/Icons';
import { Row, Col } from 'reactstrap';
import Column from './Column/Column';


const Columns = (props) => {
  let columns = props.data.map((el) => {
    return <Column header={el.header} icon={el.icon} description={el.description} />;

  });

  return (
    <div className="columns">
      <Row className="justify-content-center">
        {columns}
      </Row>
    </div>
  );
};

export default Columns;
