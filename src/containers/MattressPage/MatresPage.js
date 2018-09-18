import React, { Component } from 'react';
import Section from './../../baseComponents/Section/Section';
import ImageSection2 from '../../assets/images/matress-img-1.png';
import ImageSection3 from '../../assets/images/matress-img-2.png';
import ImageSection4 from '../../assets/images/matress-img-3.png';
import ImageReview1 from '../../assets/images/review-1.jpg';
import ImageReview2 from '../../assets/images/review-2.jpg';
import ImageReview3 from '../../assets/images/review-3.jpg';
import Avatar1 from '../../assets/avatars/avatar-1.jpg';
import Avatar2 from '../../assets/avatars/avatar-2.jpg';
import Avatar3 from '../../assets/avatars/avatar-3.jpg';
import ColWithAsideImg from './../../components/ColWithAsideImg/ColWithAsideImg';
import SliderImage from '../../assets/images/slider-img.jpg';
import Review from './../../components/Review/Review';
import Pillow from '../../assets/images/pillow.png';
import CheckProduct from './../../components/CheckProduct/CheckProduct';
import Button from './../../baseComponents/Button/Button';
import Rewards from './../../components/Rewards/Rewards';
import SectionWithBackground from './../../components/SectionWithBackground/SectionWithBackground';
import SectionBg from '../../assets/images/section-bg.jpg';

class MatresPage extends Component {
  state = {
    section1: {
      icon: 'medical',
      topIcon: 'lifetime',
      header: 'Backed by Science, Recommended by Doctors',
      columnsData: [
        {
          type: 'text',
          header: 'Proven Relief for Back and Joint Pain',
          icon: 'smile',
          description: 'Clinically-proven to provide therapeutic support using three differentiated levels of firmness that contour to your body while providing spinal alignment and pain reducing while you sleep.'
        },
        {
          type: 'text',
          header: 'Improves Sleep for Any Position',
          icon: 'improve',
          description: 'The Level mattress provides ideal support for the body throughout the night. Regardless of your sleeping position, you will find ultimate comfort and pressure point relief with the patented TriSupport design. '
        },
        {
          type: 'text',
          header: 'Diminish Fatigue and Improve Recovery ',
          icon: 'energy',
          description: 'Level\'s patented technology allows the body to maintain proper spinal alignment for deeper, undisturbed sleep, reducing tossing and turning by up to 35% and next day fatigue by up to 43%.'
        }
      ]
    },
    section2: {
      icon: 'certified',
      header: 'Proven Relief for Back and Joint Pain',
      description: 'Clinically-proven to provide therapeutic support using three unique levels of firmness that contour to your body while providing spinal alignment and pain reduction while you sleep. ',
      img: ImageSection2,
      columnsData: [
        {
          type: 'text',
          header: 'Clinically Tested and Shown to Alleviate Pain',
          description: 'Working with the country’s top sleep researchers, Level’s design was proven effective. Our patented technology is guaranteed to alleviate pain and improve your sleep. Or get your money back.'
        },
        {
          type: 'text',
          header: 'Patented Technology to Provide Back Support',
          description: 'Level’s three-zone design features lumbar support and two softer zones that allow your shoulder and hips to sink into the mattress, providing improved alignment and reduced pain regardless of your sleeping position.'
        },
        {
          type: 'text',
          header: 'Reduce Tossing and Turning',
          description: 'Level’s patented design reduces compression of the soft tissues which improves blood flow. Experience relief from hip and shoulder pressure to help you stay asleep longer and sleep deeper throughout the night.'
        }
      ]
    },
    section3: {
      icon: 'heart',
      header: 'Clinically Tested and Shown to Alleviate Pain',
      description: 'The three zones of premium foams work together to keep your body in a neutral position throughout the night. That is why participants in our clinical trial reported a 54% reduction in morning stiffness.',
      img: ImageSection3,
      columnsData: [
        {
          type: 'text',
          header: 'LEVELsoft',
          description: 'Absorbs your shoulders, reducing pressure and pain.'
        },
        {
          type: 'text',
          header: 'LEVELfirm',
          description: 'Firmer foam comfortably supports your lower back and side, reducing back pain.'
        },
        {
          type: 'text',
          header: 'LEVELmedium',
          description: 'Absorbs and support your hips, aligning them with your spine and fighting hip pain.'
        }
      ]
    },
    section4: {
      icon: 'flag',
      header: 'Containing 100% USA-made Premium Materials',
      description: 'Engineered to be the most comfortable mattress for science-backed sleep, Level is engineered, tested and built in the USA. Using only the best materials, our foam is CertiPUR-US® certified to be free of harmful chemicals and safe for your sleep.',
      img: ImageSection4,
      columnsData: [
        {
          type: 'text',
          header: 'Top Grade, Breathable Foam',
          description: 'Open-cell, non-toxic, and highly durable foams work together to support and cushion.'
        },
        {
          type: 'text',
          header: 'High-Resilience Foam Base',
          description: 'Sturdy, breathable, and long-lasting foam base supports the Performance Layer and provides the foundation on any flat surface.'
        },
        {
          type: 'text',
          header: 'Rich, Premium Fabric Cover',
          description: 'Thick, durable cover offers a four way stretch technology that maximizes comfort and breathability.'
        }
      ]
    },
    section5: {
      topIcon: 'clinical',
      header: 'Over 10 Years of Development',
      columnsData: [
        {
          type: 'text',
          icon: 'health',
          header: 'Fight Back Pain with Patented Sleep Technology',
          description: 'Level’s three-zone design features a supportive lumbar strip and two softer zones that allow your shoulder and hips to sink into the mattress while providing support to your lower back regardless of your sleeping position.'
        },
        {
          type: 'text',
          icon: 'sun',
          header: 'Reduce Morning Stiffness by Up to 54%',
          description: 'Each of the three layers of premium foams contours to your body while keeping your spine in a neutral position throughout the night. That is why participants in our clinical trial reported a 54% reduction in morning stiffness.'
        },
        {
          type: 'text',
          icon: 'minus',
          header: 'Alleviate Neck and Shoulder Discomfort ',
          description: 'Level’s soft shoulder zone absorbs your shoulder’s weight. While ideal for side sleepers, all participants in our clinical trial reported a 56% reduction in morning pain.'
        }
      ]
    },
    sectionReviews: {
      icon: 'comments',
      header: 'Doctors Recommend Us, Customers Love Us',
      rating: 5,
      reviews: [
        {
          type: 'review',
          img: ImageReview1,
          avatar: Avatar1,
          name: 'Jana',
          userType: 'Customer'
        },
        {
          type: 'review',
          img: ImageReview2,
          avatar: Avatar2,
          name: 'Dr. Robert Adams',
          userType: 'Chiropractor'
        },
        {
          type: 'review',
          img: ImageReview3,
          avatar: Avatar3,
          name: 'Mick',
          userType: 'Customer'
        },

      ]
    },
    checkProduct: {
      header: 'TriSupport™ Mattress',
      description: 'With patented TriSupport design guaranteed to relieve pain and improve sleep.',
      rating: 5,
      images: [SliderImage, SliderImage, SliderImage, SliderImage, SliderImage]
    },
    sectionWarranty: {
      icon: 'certify',
      header: '365 Night Trial and Forever Warranty',
      description: '“The Level mattress is a wonderful experience. Delivery was fast and set up was easy. I’m already sleeping better and noticing the varied support in the mattress provides pain free, relaxed sleep.”',
      reviewer: {
        name: 'Alex R.',
        from: 'Austin, TX'
      }
    },
    reviewSection: {
      review: 'I noticed less tossing & turning the first night I slept on my Level mattress. After a few more nights, I realized I wasn\'t snoring as much if at all! I like its firmness. I\'m quite comfortable sleeping on my back or side. I\'m very happy with my new mattress!',
      reviewer: {
        avatar: Avatar1,
        name: 'Catherine S.',
        userType: 'Denver CO'
      }
    },
    sectionDetails: {
      icon: 'detail',
      header: 'Product Details',
      description: 'All our products are made in the USA of non-toxic materials. If you\'d like to learn more about the order and shipment process, please visit our FAQs.'
    },
    pillowSection: {
      header: 'Restore Pillow',
      description: '<ul><li>Patented design to align neck and reduce pain</li><li>Natural spinal support to open airways and reduce snoring</li></ul>',
      rating: 5,
      images: [Pillow]
    },
    sectionWithBackground: {
      header: '365 Night Trial and Forever Warranty',
      icon: 'certify',
      description: '“The Level mattress is a wonderful experience. Delivery was fast and set up was easy. I’m already sleeping better and noticing the varied support in the mattress provides pain free, relaxed sleep.”',
      reviewer: {
        name: 'Alex R.',
        info: 'Austin, TX',
        avatar: Avatar1
      }
    }
  }

  render() {
    return (
      <div className="matres-page">
        <ColWithAsideImg
          description={this.state.checkProduct.description}
          rating={this.state.checkProduct.rating}
          images={this.state.checkProduct.images}
          header={this.state.checkProduct.header}
          headerClass="desctop-h1">

          <CheckProduct />
        </ColWithAsideImg>
        <Section
          header={this.state.section1.header}
          icon={this.state.section1.icon}
          columns={this.state.section1.columnsData}
          topIcon={this.state.section1.topIcon}
          bordered />
        <Section
          header={this.state.sectionReviews.header}
          rating={this.state.sectionReviews.rating}
          icon={this.state.sectionReviews.icon}
          columns={this.state.sectionReviews.reviews} />
        <Section
          colored
          header={this.state.section2.header}
          icon={this.state.section2.icon}
          img={this.state.section2.img}
          description={this.state.section2.description}
          columns={this.state.section2.columnsData} />
        <Section
          colored
          header={this.state.section3.header}
          icon={this.state.section3.icon}
          img={this.state.section3.img}
          description={this.state.section3.description}
          columns={this.state.section3.columnsData} />
        <Section
          colored
          header={this.state.section4.header}
          icon={this.state.section4.icon}
          img={this.state.section4.img}
          description={this.state.section4.description}
          columns={this.state.section4.columnsData} />
        <Review
          review={this.state.reviewSection.review}
          reviewer={this.state.reviewSection.reviewer} />
        <Section
          dark
          wrappedColumns
          topIcon={this.state.section5.topIcon}
          header={this.state.section5.header}
          columns={this.state.section5.columnsData} />
        <SectionWithBackground
          header={this.state.sectionWithBackground.header}
          bg={SectionBg}
          description={this.state.sectionWithBackground.description}
          reviewer={this.state.sectionWithBackground.reviewer} />
        <Section
          dark
          icon={this.state.sectionDetails.icon}
          description={this.state.sectionDetails.description}
          header={this.state.sectionDetails.header}
          borderedColumns />
        <ColWithAsideImg
          rating={this.state.pillowSection.rating}
          header={this.state.pillowSection.header}
          images={this.state.pillowSection.images}
          headerClass="mobile-h2"
          isReverse
          description={this.state.pillowSection.description}>
          <Button className="btn-base btn-inline btn-sm">Shop Pillow</Button>
        </ColWithAsideImg>
        <Rewards />
      </div>
    );
  }
}

export default MatresPage;
