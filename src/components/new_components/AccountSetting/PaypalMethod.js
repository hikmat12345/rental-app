import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import Modal from 'react-modal';
import modal_blue_check from '../assets/modal_blue_check.png';
import paypal from '../assets/paypal.png';

import './paymentpayout.css';
export default function PaypalMethod({ paypalConnect, setPaypalConnect }) {
  const [paypalModal, setPaypalModal] = useState(false);
  const [payoutsubmit, setPayoutSubmit] = useState(false);
  return (
    <>
      <div className='option-details'>
        <div className='paypal-container'>
          <div className='header'>
            <h5 className='head'>PayPal in USD</h5>
            <p className='body'>Connect your existing PayPal account</p>
          </div>
          <div className='points-list'>
            <div className='point'>
              <span>May include fees</span>
            </div>

            <div className='point'>
              <span>Get paid in 3-4 Days</span>
            </div>
          </div>
          <div className='header'>
            <p className='body'>
              When you click next, you will be redirected to PayPal where you
              may securely enter your banking details. After completing the
              requested information you will be redirected back to Waterpin.
            </p>
          </div>
          <Grid container spacing={3} className='btn-container'>
            <Grid item xs={12}>
              <button
                className='float-left left-btn'
                onClick={() => {
                  setPaypalConnect(false);
                }}
              >
                Back
              </button>
              <button
                className='float-right right-btn'
                onClick={() => {
                  setPaypalModal(true);
                }}
              >
                Connect your PayPal
              </button>
            </Grid>
          </Grid>
        </div>
      </div>

      <Modal isOpen={paypalModal}>
        <div className='col-md-6  mx-auto mt-5'>
          <div className='modal-paypal-container'>
            <img src={paypal} />
            <h5 className='head'>Log in with PayPal</h5>
            <input placeholder='Email or Phone Number' />
            <button
              className='btn-next'
              onClick={() => {
                setPayoutSubmit(true);
              }}
            >
              Next
            </button>
            <div style={{ display: 'flex', textAlign: 'center' }}>
              <div style={{ width: '45%' }}>
                <hr />
              </div>
              <span className='span-or'>or</span>{' '}
              <div style={{ width: '45%' }}>
                <hr />
              </div>
            </div>
            <button className='btn-signup' onClick={() => {}}>
              Sign Up
            </button>
            <span>Cancel and return to </span>
            <span
              className='span-click'
              onClick={() => {
                setPaypalConnect(false);
                setPaypalModal(false);
              }}
            >
              Waterpin
            </span>
          </div>
        </div>
      </Modal>

      <Modal isOpen={payoutsubmit}>
        <div className='col-md-7  mx-auto mt-5'>
          <div
            className='modal-payout-container'
            style={{ textAlign: 'center' }}
          >
            <img src={modal_blue_check} />
            <h5 className='head'>Thanks for adding your payout method</h5>
            <p className='head'>
              Now we’re making sure your payout method info is correct. You’ll
              get an email with a status update in the next 2 days.
            </p>
            <button className='btn-done' onClick={() => setPayoutSubmit(true)}>
              done
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
