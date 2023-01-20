import React from 'react';
import './accountsettingsideBar.css';

const AccountSettingSideBar = ({
  personalInfo,
  paymentPayout,
  loginSecurity,
  notification,
  inviteFriend,
  pointsReward,
  handleChange,
  rightArrow,
}) => {
  return (
    <div className='sidebar-options'>
      <div
        className={
          personalInfo
            ? 'sidebar-option-active sidebar-option-top'
            : 'sidebar-option sidebar-option-top'
        }
        onClick={() => {
          handleChange(true, false, false, false, false, false);
        }}
      >
        <span>Personal Information</span>
        {personalInfo ? <img src={rightArrow} /> : null}
      </div>
      <div
        className={paymentPayout ? 'sidebar-option-active' : 'sidebar-option'}
        onClick={() => {
          handleChange(false, true, false, false, false, false);
        }}
      >
        <span>Payments & Payouts</span>
        {paymentPayout ? <img src={rightArrow} /> : null}
      </div>
      <div
        className={loginSecurity ? 'sidebar-option-active' : 'sidebar-option'}
        onClick={() => {
          handleChange(false, false, true, false, false, false);
        }}
      >
        <span>Login & Security</span>
        {loginSecurity ? <img src={rightArrow} /> : null}
      </div>
      <div
        className={notification ? 'sidebar-option-active' : 'sidebar-option'}
        onClick={() => {
          handleChange(false, false, false, true, false, false);
        }}
      >
        <span>Notifications</span>
        {notification ? <img src={rightArrow} /> : null}
      </div>
      <div
        className={inviteFriend ? 'sidebar-option-active' : 'sidebar-option'}
        onClick={() => {
          handleChange(false, false, false, false, true, false);
        }}
      >
        <span>Invite Friends</span>
        {inviteFriend ? <img src={rightArrow} /> : null}
      </div>
      <div
        className={
          pointsReward
            ? 'sidebar-option-active'
            : 'sidebar-option sidebar-option-bottom'
        }
        onClick={() => {
          handleChange(false, false, false, false, false, true);
        }}
      >
        <span>Points & Rewards</span>
        {pointsReward ? <img src={rightArrow} /> : null}
      </div>
    </div>
  );
};
export default AccountSettingSideBar;
