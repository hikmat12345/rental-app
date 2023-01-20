import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import './paymenttabnavbar.css';
export default function PaymentTabNavBar({
  paymentTab,
  payoutTab,
  handleChange,
}) {
  return (
    <AppBar position='static' color='white' className='app-bar'>
      <div className='row'>
        <li
          className={paymentTab ? 'payment-tabs active-tab' : 'payment-tabs'}
          onClick={() => handleChange(true, false)}
        >
          Payments
        </li>
       <li
          className={payoutTab ? 'payment-tabs active-tab' : 'payment-tabs'}
          onClick={() => handleChange(false, true)}
        >
          Payouts
        </li>
      </div>
    </AppBar>
  );
}
