import { Grid } from '@material-ui/core';
import React from 'react';
import './paymentmethods.css';
export default function PaymentMethod({ master, opt_icon, cardList }) {
  return (
    <div className='lib-payment-method-container'>
      <div className='header'>
        <h5 className='head'>Payment Methods</h5>
        <p className='body'>
          Add and manage your payment methods using our secure payment system.
        </p>
      </div>
      <div className='card-list'>
        {cardList.map((item) => (
          <div className='card-info'>
            <Grid
              container
              direction='row'
              justify='space-between'
              alignItems='center'
            >
              <div className='row'>
                <div style={{ padding: '12px 10px' }}>
                  <img src={master} />
                </div>
                <div className='left-container'>
                  <span>
                    {item.cardType} * * * * * <span>{item.cardNumber}</span>
                  </span>
                  <p>Expiration: {item.exp_year}</p>
                </div>
              </div>
              <div className='right-container row'>
                {item.default ? (
                  <button className='default-btn'>default</button>
                ) : null}
                <div className='edit'>
                  <img src={opt_icon} />
                </div>
              </div>
            </Grid>
          </div>
        ))}
      </div>
    </div>
  );
}
