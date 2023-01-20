import React from 'react';
import facebook from '../../images/social/facebook.png';
import google from '../../images/social/google.png';
import email from '../../images/social/email.png';
import apple from '../../images/social/apple.png';

class SocialLoginButtons extends React.Component {
  render() {
    const { loginSignupClickHandler, login, buttonText } = this.props;
    console.log("asdfasf", buttonText);
    return (
      <>
        <div>
          <div style={{ display: 'flex', textAlign: 'center' }}>
            <div style={{ width: '48%' }}>
              <hr />
            </div>
            <span className='span-or'>Or</span>{' '}
            <div style={{ width: '48%' }}>
              <hr />
            </div>
          </div>
        </div>
        <div className='sLB'>
          <div className='sLBCC'>
            <div
              className='sLBC'
              onClick={() => {
                loginSignupClickHandler('email');
              }}
            >
              <img className='email-icon' src={email} alt='' />
              <button>{buttonText + ' with Email'}</button>
            </div>
            <div
              className='sLBC'
              onClick={() => {
                loginSignupClickHandler('google');
              }}
            >
              <img src={google} alt='' />
              <button>{buttonText + ' with Google'}</button>
            </div>
          </div>
          <div
            className='sLBCC'
            style={{ padding: '10px 0px' }}
            onClick={() => {
              loginSignupClickHandler('facebook');
            }}
          >
            <div className='sLBC'>
              <img src={facebook} alt='' />
              <button>{buttonText + ' with Facebook'}</button>
            </div>
            <div className='sLBC'>
              <img src={apple} alt='' />
              <button>{buttonText + ' with Apple'}</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SocialLoginButtons;
