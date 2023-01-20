import { Grid } from '@material-ui/core';
import Modal from 'react-modal';
import React, {useState} from 'react';
import successIcon from "../../assets/confirm-succ.png"
import './confirmpayoutinfo.css';
import {payoutApiFunct} from '../Api/acc_apis'
export default function ConfirmPayoutInfo({
  payoutInfo,
  setPayoutInfo,
  payoutsubmit,
  setPayoutSubmit,
  addPayoutMethod,
  setAddPayoutMethod,
  modal_blue_check,
}) {
  const [showPopup, setShowPopup] = useState(false)
  return (
    <>
      <>
        <div className='option-details'>
          <div className='top-label-center'>
            <label>Confirm account info</label>
          </div>
          <div className='info-options'>
            <div className='info-option-info-card'>
              <label>Payout method</label>
              <input
                value='Bank Transfer in USD'
                type='text'
                disabled='disabled'
              />
            </div>
            <div className='info-option-info-card'>
              <label>Bank account type</label>
              <input value='Checking' type='text' disabled='disabled' />
            </div>
            <div className='info-option-info-card'>
              <label>Account holder name</label>
              <input value='Angie Henao' type='text' disabled='disabled' />
            </div>
            <div className='info-option-info-card'>
              <label>Routing number</label>
              <input value='-------' type='text' disabled='disabled' />
            </div>
            <div className='info-option-info-card'>
              <label>Account number</label>
              <input value='-------' type='text' disabled='disabled' />
            </div>
            <div className='info-option-info-card'>
              <label>Account Address</label>
              <input
                value='Miami Beach, Fl 33139'
                type='text'
                disabled='disabled'
              />
            </div>
          </div>
          <Grid container spacing={3} className='input-container'>
            <Grid item xs={12}>
              <div className='btn-container-edit'>
                <div>
                  <button
                    className='left-btn grey'
                    onClick={() => {
                      setPayoutInfo(false);
                    }}
                  >
                    Back
                  </button>
                  <button
                    className='right-btn blue'
                    onClick={() => {
                      setPayoutSubmit(true);
                      setShowPopup(true)
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </>

      <Modal isOpen={showPopup}>
        <div className='col-md-7  mx-auto mt-5'>
          <div
            className='modal-payout-container'
            style={{ textAlign: 'center' }}
          >
            <img src={successIcon} />
            <h5 className='head'>Thanks for adding your payout method</h5>
            <p className='head'>
              Now we’re making sure your payout method info is correct. You’ll
              get an email with a status update in the next 2 days.
            </p>
            <button
              className='btn-done'
              onClick={() => {
                setPayoutSubmit(false);
                setPayoutInfo(false);
              }}
            >
              done
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
