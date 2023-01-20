import { Grid } from '@material-ui/core';
import React from 'react';
import './payoutmethod.css';
export default function PayoutMethod({
  setAddPayoutMethod,
  bank_check,
  bank_saving,
  opt_icon, 
}) { 
  return (
    <div className='lib-payment-method-container'>
      <div className='header'> 
        <h5 className='head'>Payout Methods</h5>
        <p className='body'>
          When you receive payment for a reservation, we call that a “Payout”.
          Our secure payment system supports several payout methods.
        </p>
      </div>
      <div className='card-list'>
        <div className='card-info'>
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='center'
          >
            <div className='row'>
              <div
                style={{
                  padding: '5px 10px',
                  background: '#FFFFFF',
                  boxShadow: '0px 0px 20px rgba(179, 179, 179, 0.25)',
                  borderRadius: '5px',
                }}
              >
                <img src={bank_check} />
              </div>
              <div className='left-container'>
                <span>Bank Account</span>
                <p>Individual</p>
              </div>
              <div className='left-container'>
                <br />
                <p>Checking * * * * * 6275 (USD)</p>
              </div>
            </div>
            <div className='right-container row'>
              <button className='default-btn'>default</button>
              <div className='edit'>
                <img src={opt_icon} />
              </div>
            </div>
          </Grid>
        </div>
        <div className='card-info'>
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='center'
          >
            <div className='row'>
              <div
                style={{
                  padding: '5px 10px',
                  background: '#FFFFFF',
                  boxShadow: '0px 0px 20px rgba(179, 179, 179, 0.25)',
                  borderRadius: '5px',
                }}
              >
                <img src={bank_saving} />
              </div>
              <div className='left-container'>
                <span>Bank Account</span>
                <p>Company</p>
              </div>
              <div className='left-container'>
                <br />
                <p>Checking * * * * * 6275 (USD)</p>
              </div>
            </div>
            <div className='right-container row'>
              <div className='edit'>
                <img src={opt_icon} />
              </div>
            </div>
          </Grid>
        </div>
        <div className='float-right'>
          <button
            className='payout-method-btn'
            onClick={() => {
              setAddPayoutMethod(true);
            }}
          >
            Add Payout Method
          </button>
        </div>
      </div>
    </div>
  );
}
