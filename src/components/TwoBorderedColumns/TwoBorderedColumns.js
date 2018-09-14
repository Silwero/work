import React from 'react';
import Column from './Column/Column';
import DetailsTable from './../DetailsTable/DetailsTable';
import DetailsParagraph from './../DetailsParagraph/DetailsParagraph';

const TwoBorderedColumns = (props) => {
  return (
    <div className="two-bordered-columns">
      <Column header="Materials">
        <DetailsParagraph />
      </Column>
      <Column header="Size & Weight">
        <DetailsTable />
      </Column>
    </div>
  );
};

export default TwoBorderedColumns;
