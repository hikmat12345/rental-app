import React from 'react';
import Footer1Item from './footer1Item';
import image4 from '../../../images/footer/4.png';
import image5 from '../../../images/footer/5.png';
import image6 from '../../../images/footer/6.png';
import image7 from '../../../images/footer/7.png';
import image8 from '../../../images/footer/8.png';
class Footer1 extends React.Component {
  render() {
    const array1 = [
      { title: 'How It Works', link: '/howItWork' },
      { title: 'Policies' },
      { title: 'Blog', link: '/blog' },
      { title: 'Reviews' },
    ];
    const array2 = [
      { title: 'Overnight Stays', link: '/overnighstay' },
      { title: 'Day Trips', link: '/DayTripOverNightStay' },
      { title: 'Water Activities', link: '/waterAtivityExpand' },
      { title: 'Destinations', link: '/destinations' },
    ];
    const array3 = [
      { title: 'Cancellation Policy'  },
      { title: 'Trust & Safety', link: '/' },
      { title: 'Help Center', link: '/helpcenter' },
      { title: 'Careers', link: '/career' },
    ];
    return (
      <div className='footer1Container f-jCenter-aCenter-fRow'>
        <div className='footer1W'>
          <div className='f1Content f-jSpaceBetween-aStart-fRow'>
            <Footer1Item heading='About' items={array1} />
            <Footer1Item heading='Explore' items={array2} />
            <Footer1Item heading='Support' items={array3} />
            <div>
              <h3>Connect With Us</h3>
              <div className='iC f-jSpaceBetween-aCenter-fRow cMargin'>
                <img src={image4} className='icons' />
                <img src={image5} className='icons' />
                <img src={image6} className='icons' />
                <img src={image7} className='icons' />
              </div>
              <h4 className='cMargin'>Customer Reviews</h4>
              <div className='iC1 f-jSpaceBetween-aCenter-fRow cMargin'>
                <img src={image8} />
                <div className='figureC'>5.00 / 5.00</div>
              </div>
              <div className='figureC'>Based on 8 Reviews</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer1;
