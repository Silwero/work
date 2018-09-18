import React from 'react';
import { Row } from 'reactstrap';
import Column from './Column/Column';

const Rewards = (props) => {
  const rewards = [
    {
      icon: 'thumb',
      text: 'Thousands of Happy Customers',
      rating: 5
    },
    {
      icon: 'affirm',
      text: 'Recommended by Hundreds of Chiropractors',
      rating: 5
    },
    {
      icon: 'recco',
      text: 'Secure Credit Cards and Easy Monthly Payments with Affirm',
      rating: 5
    }
  ];

  let columns = rewards.map((col, i) => {
    return <Column text={col.text} key={'reward' + i} icon={col.icon} rating={col.rating} />;
  });

  return (
    <div className="rewards">
      <Row>
        {columns}
      </Row>
    </div>
  );
};

export default Rewards;
