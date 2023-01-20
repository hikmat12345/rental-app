import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import './sharecard.css';

export default function ShareCard({
  inviteEmail,
  setInviteEmail,
  inviteFriend,
  copy,
  setCopy,
  inviteLink,
  handleCopy, 
  errorMsg,
  loaderArea
}) {
  return (
    <div className='share-container'>
      <div className='share-left'>
        <div className='head'>Share WaterPin with Friends</div>
        <div className='body'>Invite friends who've never tried WaterPin</div>
        <div className='field-container'>
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='center'
          >
            <input
              className='field-input'
              placeholder='Email Address or Phone Number'
              value={inviteEmail}
              onChange={(event) => setInviteEmail(event.target.value)}
            />
            <button className='field-btn' onClick={() => inviteFriend()}>
              {loaderArea}
            </button>
          </Grid>
          {errorMsg ? <span className="message-error">Please Enter Valid Email or Number</span> : ""}

        </div>
        <div className='link-container'>
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='center'
          >
            <div className='link-wrap'>
              <input
                className='link-input'
                value={inviteLink}
                disabled='true'
              />
              <span
                onClick={() => {
                  navigator.clipboard.writeText(inviteLink);
                  setCopy(true);
                  handleCopy();
                }}
              >
                {copy ? 'Copied' : 'Copy Link'}
              </span>
            </div>
            <button className='link-btn'>Invite Friends</button>
          </Grid>
        </div>
      </div>
      <div className='share-right'>
        <div className='header'>Invite 3 friends and get a bonus reward!</div>
        <div className='track-wrapper'>
          <div className='heading'>Track your referrals</div>
          <div className='record'>
            <span className='float-left'> Completed referrals</span>
            <span className='float-right'>0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
