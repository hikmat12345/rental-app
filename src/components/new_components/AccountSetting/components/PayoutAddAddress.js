import { Grid } from '@material-ui/core';
import Modal from 'react-modal';
import React, { useState } from 'react';
import './payoutaddaddress.css';
export default function PayoutAddAddress({
  index,
  setIndex,
  setSelectedCity,
  cityList,
  stateList,
  setSelectedStateCode,
  setAddNewAddress,
}) {
  const [state, setState] = useState();
  const [city, setCity] = useState();
  return (
    <>
      <div className='add-address-container'>
        <div className='header'>
          <h5 className='head'>What’s the address for this payout method?</h5>
          <p className='body'>
            Add the address that the bank or financial institution has for this
            account.
          </p>
        </div>
        <Grid container spacing={3} className='input-container'>
          <Grid item xs={12}>
            <div className='field'>
              <label>Street address</label>
              <input
                value=''
                type='text'
                //   onChange={(event) => setName(event.target.value)}
                placeholder='Street address'
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className='field'>
              <label>Apt, suite, bldg. </label>
              <span>( optional )</span>
              <input
                value=''
                type='text'
                //   onChange={(event) => setName(event.target.value)}
                placeholder='Ex Apt #3'
              />
            </div>
          </Grid>

          <Grid item xs={6}>
            <div className='field'>
              <label>City</label>
              <select
                onChange={(event) => {
                  setSelectedCity(event.target.value);
                }}
              >
                {cityList
                  ? cityList.map((city) => (
                      <option name={city.name} value={city.name}>
                        {city.name}
                      </option>
                    ))
                  : null }
              </select>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className='field'>
              <label>State / Province</label>
              <select
                onChange={(event) => {
                  setSelectedStateCode(event.target.value);
                }}
              >
                {stateList
                  ? stateList.map((state) => (
                      <option name={state.name} value={state.isoCode}>
                        {state.name}
                      </option>
                    ))
                  : null}
              </select>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className='field'>
              <label>Zip Code / Postal Code</label>
              <input
                value=''
                type='text'
                //   onChange={(event) => setName(event.target.value)}
                placeholder='Zip Code / Postal Code'
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className='field'>
              <label>Country / Region </label>
              <input
                value=''
                type='text'
                //   onChange={(event) => setName(event.target.value)}
                placeholder='Country / Region'
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className='btn-container-edit'>
              <div>
                <button
                  className='left-btn grey'
                  onClick={() => {
                    setAddNewAddress(false);
                  }}
                >
                  Back
                </button>
                <button
                  className='right-btn blue'
                  onClick={() => {
                    setAddNewAddress(false);
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
