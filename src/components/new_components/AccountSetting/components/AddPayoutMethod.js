import { Checkbox, Grid } from '@material-ui/core';
import React from 'react';
import './addpayoutmethod.css';
export default function AddPayoutMethod({
  setPaypalConnect,
  index,
  setIndex,
  setAddPayoutMethod,
  setSelectedCountryCode,
  bankTransfer,
  paypal,
  countryList,
  handleCheckChange,
}) {
  return (
    <>
      <div className='add-payout-method-container'>
        <div className='input-container'>
          <label>Billing Country / Region</label>
          <select
            onChange={(event) => {
              setSelectedCountryCode(event.target.value);
            }}
          >
            {countryList.map((country) => (
              <option name={country.name} value={country.isoCode}>
                {country.name}
              </option>
            ))}
          </select>

          <label>Payout Methods in United States</label>

          <div>
            <Checkbox
              size='small'
              value={bankTransfer}
              checked={bankTransfer}
              onChange={() => {
                handleCheckChange(!bankTransfer, bankTransfer);
              }}
            />{' '}
            <label className='check-label'>Bank Transfer in USD</label>
            <ul>
              <li className='payout-li'>Get paid in 5-7 business days</li>
              <li className='payout-li'>
                Weekends and holidays may extend processing time
              </li>
              <li className='payout-li'>No fees</li>
            </ul>
          </div>
          <div>
            <Checkbox
              size='small'
              value={paypal}
              checked={paypal}
              onChange={() => {
                handleCheckChange(!paypal, paypal);
              }}
            />{' '}
            <label className='check-label'>Paypal in USD</label>
            <div>
              <ul>
                <li className='payout-li'>Get paid in 3-4 hours</li>
                <li className='payout-li'>
                  Connect your existing PayPal account
                </li>
                <li className='payout-li'>May include fees</li>
              </ul>
            </div>
          </div>

          <Grid container style={{ marginTop: '30px' }}>
            <Grid item xs={12}>
              <div className='btn-container-edit'>
                <div>
                  <button
                    className='left-btn grey'
                    onClick={() => {
                      setAddPayoutMethod(false);
                    }}
                  >
                    Back
                  </button>
                  <button
                    className='right-btn blue'
                    onClick={() => {
                      if ({ bankTransfer }) {
                        setIndex(index + 1);
                      } else {
                        setPaypalConnect(true);
                      }
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
