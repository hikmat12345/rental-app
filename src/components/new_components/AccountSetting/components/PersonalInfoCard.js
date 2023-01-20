import React, {useEffect, useState} from 'react';
import './personalinfocard.css';

 const PersonalInfoCard = (props) => {
  return (
    <>
      <div className='info-options'>
        <div className='info-option-info-card'>
          <label>Legal name</label>
          <input value={props.data.firstName} type='text' disabled='disabled' />
        </div>
        <div className='info-option-info-card'>
          <label>Gender</label>
          <input value={props.data.gender} type='text' disabled='disabled' />
        </div>
        <div className='info-option-info-card'>
          <label>Date of birth</label>
          <input value={props.data.dob} type='text' disabled='disabled' />
        </div>
        <div className='info-option-info-card'>
          <label>Email address</label>
          <input value={props.data.email} type='text' disabled='disabled' />
        </div>
        <div className='info-option-info-card'>
          <label>Phone number</label>
          <input value={props.data.phoneNumber} type='text' disabled='disabled' />
        </div>
        <div className='info-option-info-card'>
          <label>Government ID</label>
          <input value={props.data.id} type='text' disabled='disabled' />
        </div>
        <div className='info-option-info-card'>
          <label>Address</label>
          <input value={props.data.address} type='text' disabled='disabled' />
        </div>
        <div className='info-option-info-card'>
          <label>Emergency contact</label>
          <input value={props.data.emergencyContactNo} type='text' disabled='disabled' />
        </div>
      </div>
    </>
);
}
export default PersonalInfoCard;
