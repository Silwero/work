import React, { Component } from 'react';
import Section from './../../baseComponents/Section/Section';

class MatresPage extends Component {
  state = {
    section1: {
      columnsData: [
        {
          header: 'Proven Relief for Back and Joint Pain',
          icon: 'cart',
          description: 'Clinically-proven to provide therapeutic support using three differentiated levels of firmness that contour to your body while providing spinal alignment and pain reducing while you sleep.'
        },
        {
          header: 'Improves Sleep for Any Position',
          icon: 'cart',
          description: 'The Level mattress provides ideal support for the body throughout the night. Regardless of your sleeping position, you will find ultimate comfort and pressure point relief with the patented TriSupport design. '
        },
        {
          header: 'Diminish Fatigue and Improve Recovery ',
          icon: 'cart',
          description: 'Level\'s patented technology allows the body to maintain proper spinal alignment for deeper, undisturbed sleep, reducing tossing and turning by up to 35% and next day fatigue by up to 43%.'
        }
      ]
    }
  }

  render() {
    return (
      <div className="matres-page">
        <Section
          header="Backed by Science, Recommended by Doctors"
          icon="medical"
          columns={this.state.section1.columnsData}>
        </Section>
      </div>
    );
  }
}

export default MatresPage;
