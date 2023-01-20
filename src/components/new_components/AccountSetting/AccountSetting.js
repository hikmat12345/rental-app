import React, { useState, useEffect } from 'react';
import './accountSetting.css';
import Header from '../../../reusableComponents/layout/header/header';
import Footer1 from '../../../reusableComponents/layout/footer/footer1';
import Footer from '../../../reusableComponents/layout/footer/footer';
import AccountSettingSideBar from './components/AccountSettingSideBar';
import PersonalInfo from './PersonalInfo';
import PaymentPayout from './PaymentPayout';
import LoginSecurity from './LoginSecurity';
import SecurityVerification from './SecurityVerification';
import Notification from './components/Notification';
import InviteFriends from './InviteFriends';
import PointsReward from './PointsReward';
import rightArrow from '../assets/RightIcon.png';
import {useDispatch, useSelector} from "react-redux";

import {allNotifications, updateNotification} from "../../../redux/actions/personalInfo";
const AccountSetting = () => {
  const [personalInfo, setPersonalInfo] = useState(true);
  const [paymentPayout, setPaymentPayout] = useState(false);
  const [loginSecurity, setLoginSecurity] = useState(false);
  const [notification, setNotification] = useState(false);
  const [inviteFriend, setInviteFriend] = useState(false);
  const [pointsReward, setPointsReward] = useState(false);

  const getAllNotifications = useSelector(state => state.personalInfoReducer);
  let initialTutorialState = [];
  const dispatch = useDispatch();
  useEffect(() => {
    notifications[0].status = getAllNotifications.upcoming_trips_notifications;
    notifications[1].status = getAllNotifications.messages_notifications;
    notifications[2].status = getAllNotifications.discount_special_credit_notifications;
    notifications[3].status = getAllNotifications.important_messages_news_announcement_notifications;
    notifications[4].status = getAllNotifications.reminders_tips_notifications;
    notifications[5].status = getAllNotifications.cancelations_notifications;
    notifications[6].status = getAllNotifications.get_review_notifications;
    notifications[7].status = getAllNotifications.leave_review_notifications;
    notifications[8].status = getAllNotifications.booking_expire_notifications;
    notifications[9].status = getAllNotifications.unsubsscribe_marketing_emails;

    setNotifications([...notifications])
    dispatch(allNotifications());
  }, []);

  const [notifications, setNotifications] = useState([
    { column_name: 'upcoming_trips_notifications', title: 'Notify me of my upcoming trips', status: '' },
    { column_name: 'messages_notifications', title: 'Notify me when someone sends a message', status: '' },
    { column_name: 'discount_special_credit_notifications',  title: 'Discount coupons, special offers and credits', status: ''},
    { column_name: 'important_messages_news_announcement_notifications', title: 'Important messages, news and announcements', status: ''},
    { column_name: 'reminders_tips_notifications', title: 'Reminders and tips to get the most out of Waterpin', status: ''},
    { column_name: 'cancelations_notifications', title: 'Notify me of cancellations', status: '' },
    { column_name: 'get_review_notifications', title: 'Notify me when I get a review', status: '' },
    { column_name: 'leave_review_notifications', title: 'Reminder to leave a review', status: '' },
    { column_name: 'booking_expire_notifications', title: 'Notification when a booking expires', status: '' },
    { column_name: 'unsubsscribe_marketing_emails', title: 'Unsubscribe from all marketing emails', status: '' },
  ]);


  const handleChange = (one, two, three, four, five, six) => {
    setPersonalInfo(one);
    setPaymentPayout(two);
    setLoginSecurity(three);
    setNotification(four);
    setInviteFriend(five);
    setPointsReward(six);
  };

  const notificationStatus = (index) => {
    var arrNotification = [...notifications];
    arrNotification[index].status = arrNotification[index].status==0?1:0;
    setNotifications(arrNotification);


    let updateNotifications = {
      [notifications[index].column_name]: arrNotification[index].status==0?0:1
    };
    dispatch(updateNotification(updateNotifications))
        .then(data => {
          console.log(data);
        })
        .catch(e => {
          console.log(e);
        });
  };

  return (
    <div className='whiteHeader'>
      <Header />
      <div className='main-section'>
        <AccountSettingSideBar
          personalInfo={personalInfo}
          paymentPayout={paymentPayout}
          loginSecurity={loginSecurity}
          notification={notification}
          inviteFriend={inviteFriend}
          pointsReward={pointsReward}
          handleChange={handleChange}
          rightArrow={rightArrow}
        />
        {personalInfo ? (
          <div className='option-details'>
            <PersonalInfo />
          </div>
        ) : paymentPayout ? (
          <div className='option-details-container'>
            <PaymentPayout />
          </div>
        ) : loginSecurity ? (
          <div className='option-details-container'>
            <div className='option-details'>
              <LoginSecurity />
            </div>
            <br />
            <div className='option-details'>
              <SecurityVerification />
            </div>
          </div>
        ) : notification ? (
          <div className='option-details'>
            <Notification
              notifi={notifications}
              notificationStatus={notificationStatus}
            />
          </div>
        ) : inviteFriend ? (
          <div className='option-details-container'>
            <InviteFriends />
          </div>
        ) : pointsReward ? (
          <div className='option-details-container'>
            <PointsReward />
          </div>
        ) : null}
      </div>
      <Footer1 />
      <Footer />
    </div>
  );
};
export default AccountSetting;
