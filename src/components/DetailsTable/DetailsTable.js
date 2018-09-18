import React from 'react';

const DetailsTable = (props) => {
  const tableData = [
    {
      name: 'Twin',
      size: '39" x 75" x 10"  &  46 lbs'
    },
    {
      name: 'Twin XL',
      size: '39" x 80" x 10"  &  49 lbs'
    },
    {
      name: 'Full',
      size: '54" x 75" x 10"  &  61 lbs'
    },
    {
      name: 'Queen',
      size: '60" x 80" x 10"  &  71 lbs'
    },
    {
      name: 'King',
      size: '76" x 80" x 10"  &  86 lbs'
    },
    {
      name: 'Cal King',
      size: '72" x 84" x 10"  &  89 lbs'
    },

  ];

  let table = tableData.map((row, i) => {
    return <tr key={'table-row' + i}>
      <td>{row.name}</td>
      <td>{row.size}</td>
    </tr>;
  });

  return (
    <div className="details-table">
      <table>
        <tbody>
          {table}
        </tbody>
      </table>
    </div>
  );
};

export default DetailsTable;
