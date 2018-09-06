import React, { Component } from 'react';
import SizeItem from './SizeItem/SizeItem';
import Checkbox from './../../baseComponents/Checkbox/Checkbox';
import Button from './../../baseComponents/Button/Button';

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
      }
    ],
    selectedItem: {
      name: 'Cal King',
      price: '1,999',
      checked: true
    },
    pillowAdded: false,
    pillowPrice: '149$'
  }

  checkItem = (event, num) => {
    if (this.state.sizes[num].checked) {
      return;
    };

    let newSizes = [...this.state.sizes];
    let selectedItem = null;

    newSizes.forEach((el, i) => {
      if (i !== num) {
        el.checked = false;
      } else {
        el.checked = true;
        selectedItem = el;
      }
    });

    this.setState({
      sizes: newSizes,
      selectedItem: selectedItem
    });

  }

  checkPillow = () => {
    this.setState((state) => ({
      pillowAdded: !state.pillowAdded
    }));

  }

  render() {
    let sizes = null;
    if (this.state.sizes.length) {
      sizes = this.state.sizes.map((size, i) => {
        let number = i;
        return <SizeItem checkItem={(event, i) => this.checkItem(event, number)} selected={size.checked} size={size} key={i}  />;
      });
    }

    return (
      <div className="select-size">
        <div className="select-size-header">
          <div className="select-size-title">
            Select size
          </div>
          <div className="select-size-details-link">
            <a href="#1">Product Details</a>
          </div>
        </div>
        <div className="select-size-items">
          {sizes}
        </div>
        <div className="add-pillow">
          <Checkbox text="Add Restore Pillow" checked={this.state.pillowAdded} checkHandler={this.checkPillow} />
          <div className="price">
            {this.state.pillowPrice}
          </div>
        </div>
        <Button className="btn-base">Buy {this.state.selectedItem.name} Now</Button>
      </div>
    );
  }
}

export default SelectSize;
