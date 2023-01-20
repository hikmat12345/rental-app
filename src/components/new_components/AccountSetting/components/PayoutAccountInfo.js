import { Checkbox, Grid } from '@material-ui/core';
import React from 'react';
import './payoutaccountinfo.css';
export default function PayoutAccountInfo({ index, setIndex }) {
  return (
    <>
      <div className='add-payout-method-container'>
        <div className='input-container'>
          <label className='header'>ADD BANK ACCOUNT INFO</label>
          <br />
          <label className='header'>Bank Account Type</label>
          <div>
            <Checkbox
              size='small'
              value={''}
              checked={''}
              onChange={() => {
                // handleCheckChange(!bankTransfer, bankTransfer);
              }}
            />{' '}
            <label className='check-label'>Checking</label>
          </div>
          <div>
            <Checkbox
              size='small'
              value={''}
              checked={''}
              onChange={() => {
                // handleCheckChange(!bankTransfer, bankTransfer);
              }}
            />{' '}
            <label className='check-label'>Saving</label>
          </div>

          <label className='header'>Account holder name</label>
          <input placeholder='Account Holder Name' />
          <label className='header'>Routing number</label>
          <input placeholder='Routing number' />
          <label className='header'>Account number</label>
          <input placeholder='Account number' />
          <label className='header'>Confirm account number</label>
          <input placeholder='Confirm account number' />
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
