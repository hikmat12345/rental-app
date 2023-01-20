import { Grid } from '@material-ui/core';
import React from 'react';
import './payoutmethodaddress.css';
export default function PayoutMethodAddress({
  index,
  setIndex,
  setAddNewAddress,
  addressIndex,
  setAddressIndex,
}) {
  return (
    <>
      <div className='address-method-container'>
        <div className='header'>
          <h5 className='head'>What’s the address for this payout method?</h5>
          <p className='body'>
            Add the address the bank or financial institution has for this
            account-it might be different than your home or listing address. Add
            new address
          </p>
        </div>
        <div className='input-container'>
          <div className='address-list'>
            <div
              className={addressIndex === 0 ? 'address-active' : 'address'}
              onClick={() => {
                setAddressIndex(0);
              }}
            >
              <span>765 Musa Drive</span>
              <p>765 Musa Drive Key Largo 33037</p>
            </div>
            <div
              className={addressIndex === 1 ? 'address-active' : 'address'}
              onClick={() => {
                setAddressIndex(1);
              }}
            >
              <span>765 Musa Drive</span>
              <p>765 Musa Drive Key Largo 33037</p>
            </div>

            <div
              className='address'
              onClick={() => {
                setAddNewAddress(true);
              }}
            >
              <span>Add New Address</span>
            </div>
          </div>
          <Grid container style={{ marginTop: '30px' }}>
            <Grid item xs={12}>
              <div className='btn-container-edit'>
                <div>
                  <button
                    className='left-btn grey'
                    onClick={() => {
                      setIndex(index - 1);
                    }}
                  >
                    Back
                  </button>
                  <button
                    className='right-btn blue'
                    onClick={() => {
                      setIndex(index + 1);
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
