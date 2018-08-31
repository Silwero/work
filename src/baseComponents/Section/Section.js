import React from 'react';
import Icons from './../../components/Icons/Icons';
import './Section.css';
import Columns from './../../components/Columns/Columns';


const Section = (props) => {
  const Icon = Icons[props.icon];
  let columns = null;
  if (props.columns) {
    columns = <Columns data={props.columns} />;
  }

  return (
    <section className="section">
      <div className="section-icon">
        <Icon />
        <h2 className="section-header">
          {props.header}
        </h2>
      </div>
      {columns}
    </section>
  );
};

export default Section;
