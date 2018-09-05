import React, { Component } from 'react';
import SizeItem from './SizeItem/SizeItem';

class SelectSize extends Component {
  state = {
    sizes: [
      {
        name: 'Cal King',
        price: '1,999',
        checked: true
      },
      {
        name: 'King',
        price: '1,499',
        checked: false
      },
      {
        name: 'Queen',
        price: '1,699',
        checked: false
      },
      {
        name: 'Full',
        price: '1,499',
        checked: false
      },
      {
        name: 'Twin XL',
        price: '1,199',
        checked: false
      },
      {
        name: 'Twin',
        price: '1,099',
        checked: false
      },
    ],
  }

  render() {
    let sizes = null;
    if (this.state.sizes.length) {
      sizes = this.state.sizes.map((size, i) => {
        return <SizeItem size={size} key={i}  />;
      });
    }
    return (
      <div className="select-size">
        Select size
        <div className="select-size-items">
          {sizes}
        </div>
      </div>
    );
  }
}

export default SelectSize;
