import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import IOSSwitch from './Switch';
import './securityverificationcard.css';

import CircularProgress from '@material-ui/core/CircularProgress';
export default function SecurityVerificationCard({
  twoStepValue,
  setTwoStepValue,
  authMethod,
  setAuthMethod,
  setUploadId,
  check,
  phoneVerText,
  phoneVerClick,
  emailVerText,
  emailVerClick,
  setGoalLoader,
}) {
  return (
    <>
      <div className='info-option-verification-card'>
        <label>verification</label>
        <span>
          Verifying your account helps keep the Waterpin community secure
        </span>
        <div className='info-option'>
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='center'
          >
            <div className='label-left'>
              <img src={check} />
              <span>Identity</span>
            </div>
            <div
              className='label-right pointer'
              onClick={() => {
                setUploadId(true);
              }}
            >
              Upload
            </div>
          </Grid>
        </div>
        <div className='info-option'>
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='center'
          >
            <div className='label-left'>
              {' '}
              <img src={check} />
              <span>Phone Number</span>
            </div>
            <div className='label-right pointer' onClick={phoneVerClick}>{phoneVerText}</div>
          </Grid>
        </div>
        <div className='info-option'>
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='center'
          >
            <div className='label-left'>
              {' '}
              <img src={check} />
              <span>Email Address</span>
            </div>
            <div className='label-right pointer' onClick={emailVerClick}>{emailVerText}</div>
          </Grid>
        </div>

        <div className='two-step'>
          <div> 
            {setGoalLoader}
            <span>2-Step Authentication</span>
            <div
              style={{ float: 'right', marginTop: '0px', paddingTop: '0px' }}
            >
              <IOSSwitch
                value={twoStepValue}
                onChange={async () => {
                  setTwoStepValue(!twoStepValue);
                  setAuthMethod(!authMethod);
                }}
              />
            </div>
          </div>

          <p>
            2 Step Authentication adds a layer of security to your account. When
            turned on, you will need to enter your password plus a verification
            code every time you log-in
          </p>
        </div>
      </div>
    </>
  );
}
