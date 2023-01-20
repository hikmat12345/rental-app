import { Grid } from '@material-ui/core';
import React from 'react';
import './paymentmethods.css';
export default function AddNewCard({
  handleSubmit,
  handleChange,
  monthSelect,
  yearSelect,
  cardName,
  cardNumber,
  cardCVV,
  cardZip,
  setCardName,
  setCardNumber,
  setCardCVV,
  setCardZip,
  month,
  year,
  setMonth,
  setYear,
  progressLoader,
}) {
  return (
    <>
      <div className='lib-payment-method-container'>
        <div className='header'>
          <h5 className='head'>Add New Card</h5>
          <p className='body'>Your information is securely stored.</p>
        </div>
        <Grid container spacing={3} className='input-container-card'>
          <Grid item xs={8}>
            <div className='field'>
              <input
                value={cardName}
                type='text'
                onChange={(event) => setCardName(event.target.value)}
                placeholder='Name on Card'
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className='field'>
              <input
                value={cardZip}
                type='text'
                onChange={(event) => setCardZip(event.target.value)}
                placeholder='Billing zip code'
              />
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className='field'>
              <input
                value={cardNumber}
                type='tel'
                onChange={(event) => setCardNumber(event.target.value)}
                placeholder='Card number'
              />
            </div>
          </Grid>
          
          <Grid item xs={4}>
            <div className='field'>
            {progressLoader}
              <input
                value={cardCVV}
                type='text'
                onChange={(event) => setCardCVV(event.target.value)}
                placeholder='3-digit code (CVV)'
              />
            </div>
          </Grid>
          <Grid item xs={6}>
          
            <div className='field'>
              <select
                onChange={(event) => {
                  setMonth(event.target.value);
                }}
                placeholder='hello'
                value={month}
              >
                {monthSelect.map((m) => (
                  <option name={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className='field'>
              <select
                onChange={(event) => {
                  setYear(event.target.value);
                }}
                placeholder='hello'
                value={year}
              >
                {yearSelect.map((y) => (
                  <option name={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className='btn-container-edit'>
              <div>
                <button
                  className='left-btn grey'
                  onClick={() => {
                    handleChange(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className='right-btn blue'
                  onClick={handleSubmit}
                >
                  Add Card
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
