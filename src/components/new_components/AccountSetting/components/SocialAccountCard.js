import React, { useState } from 'react';
import './socialaccountcard.css';
import { Grid } from '@material-ui/core';
export default function SocialAccountCard({
  edit,
  head,
  body,
  onChange,
  link,
}) {
  return (
    <div className='socail-card'>
      <Grid container direction='row' justify='space-between'>
        <div className='left login'>
          <label>{head}</label>
          <p>{body}</p>
        </div>
        <div
          className='edit-info pointer'
          onClick={() => {
            onChange(true);
          }}
        >
          {edit ? <img src={edit} /> : null}
          <span style={{ marginLeft: '5px' }}>{link}</span>
        </div>
      </Grid>
    </div>
  );
}
