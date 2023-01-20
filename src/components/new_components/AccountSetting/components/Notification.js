import {Grid} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import IOSSwitch from './Switch';
import './notification.css';
import {getAllNotification, updateNotification} from "../Api/acc_apis";

const Notifications = () => {
    const getSessionToken = sessionStorage.getItem("loginToken");
    const [notifications, setNotifications] = useState({
        booking_expire_notifications: 0,
        cancelations_notifications: 0,
        discount_special_credit_notifications: 0,
        get_review_notifications: 0,
        important_messages_news_announcement_notifications: 0,
        leave_review_notifications: 0,
        messages_notifications: 0,
        reminders_tips_notifications: 0,
        unsubsscribe_marketing_emails: 0,
        upcoming_trips_notifications: 0
    });

    useEffect(async () => {
        await getAllNotification(getSessionToken).then(result => {
            if (result.response){
                setNotifications(result.response[0]);
            }
        });
    }, []);

    async function updateNotify(update) {
        await updateNotification(getSessionToken, update).then(data => {
            console.log(data);
        }).catch(e => {
            console.log(e);
        });
    }


    return (

        <div className='notification-container'>
            <h5>View and update your notification preferences:</h5>

            <div className='info-option'>
                <Grid container direction='row' justify='space-between' alignItems='center'>
                    <Grid item xs={10} sm={10} md={10}>
                        <div className='label-left'>Notify me of my upcoming trips</div>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2}>
                        <div className='label-right'>
                            <IOSSwitch value={notifications.upcoming_trips_notifications == 1 ? true : false}
                                       onChange={(e) => {
                                           let update = {upcoming_trips_notifications: e};
                                           updateNotify(update);
                                           setNotifications({...notifications, upcoming_trips_notifications: e});
                                       }}/>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className='info-option'>
                <Grid container direction='row' justify='space-between' alignItems='center'>
                    <Grid item xs={10} sm={10} md={10}>
                        <div className='label-left'>Notify me when someone sends a message</div>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2}>
                        <div className='label-right'>
                            <IOSSwitch value={notifications.messages_notifications == 1 ? true : false}
                                       onChange={(e) => {
                                           let update = {messages_notifications: e};
                                           updateNotify(update);
                                           setNotifications({...notifications, messages_notifications: e})
                                       }}/>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className='info-option'>
                <Grid container direction='row' justify='space-between' alignItems='center'>
                    <Grid item xs={10} sm={10} md={10}>
                        <div className='label-left'>Discount coupons, special offers and credits</div>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2}>
                        <div className='label-right'>
                            <IOSSwitch value={notifications.discount_special_credit_notifications == 1 ? true : false}
                                       onChange={(e) => {
                                           let update = {discount_special_credit_notifications: e};
                                           updateNotify(update);
                                           setNotifications({
                                               ...notifications,
                                               discount_special_credit_notifications: e
                                           })
                                       }}/>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div className='info-option'>
                <Grid container direction='row' justify='space-between' alignItems='center'>
                    <Grid item xs={10} sm={10} md={10}>
                        <div className='label-left'>Important messages, news and announcements</div>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2}>
                        <div className='label-right'>
                            <IOSSwitch
                                value={notifications.important_messages_news_announcement_notifications == 1 ? true : false}
                                onChange={(e) => {
                                  let update = {important_messages_news_announcement_notifications: e};
                                  updateNotify(update);
                                  setNotifications({
                                      ...notifications,
                                      important_messages_news_announcement_notifications: e
                                  })
                              }}/>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div className='info-option'>
                <Grid container direction='row' justify='space-between' alignItems='center'>
                    <Grid item xs={10} sm={10} md={10}>
                        <div className='label-left'>Reminders and tips to get the most out of Waterpin</div>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2}>
                        <div className='label-right'>
                            <IOSSwitch value={notifications.reminders_tips_notifications == 1 ? true : false}
                                onChange={(e) => {
                                    let update = {reminders_tips_notifications: e};
                                    updateNotify(update);
                                    setNotifications({...notifications, reminders_tips_notifications: e})
                                }}/>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div className='info-option'>
                <Grid container direction='row' justify='space-between' alignItems='center'>
                    <Grid item xs={10} sm={10} md={10}>
                        <div className='label-left'>Notify me of cancellations</div>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2}>
                        <div className='label-right'>
                            <IOSSwitch value={notifications.cancelations_notifications == 1 ? true : false}
                                onChange={(e) => {
                                    let update = {cancelations_notifications: e};
                                    updateNotify(update);
                                    setNotifications({...notifications, cancelations_notifications: e})
                                }}/>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div className='info-option'>
                <Grid container direction='row' justify='space-between' alignItems='center'>
                    <Grid item xs={10} sm={10} md={10}>
                        <div className='label-left'>Notify me when I get a review</div>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2}>
                        <div className='label-right'>
                            <IOSSwitch value={notifications.get_review_notifications == 1 ? true : false}
                              onChange={(e) => {
                                  let update = {get_review_notifications: e};
                                  updateNotify(update);
                                  setNotifications({...notifications, get_review_notifications: e})
                              }}/>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div className='info-option'>
                <Grid container direction='row' justify='space-between' alignItems='center'>
                    <Grid item xs={10} sm={10} md={10}>
                        <div className='label-left'>Reminder to leave a review</div>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2}>
                        <div className='label-right'>
                            <IOSSwitch value={notifications.leave_review_notifications == 1 ? true : false}
                              onChange={(e) => {
                                  let update = {leave_review_notifications: e};
                                  updateNotify(update);
                                  setNotifications({...notifications, leave_review_notifications: e})
                              }}/>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div className='info-option'>
                <Grid container direction='row' justify='space-between' alignItems='center'>
                    <Grid item xs={10} sm={10} md={10}>
                        <div className='label-left'>Notification when a booking expires</div>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2}>
                        <div className='label-right'>
                            <IOSSwitch value={notifications.booking_expire_notifications == 1 ? true : false}
                              onChange={(e) => {
                                  let update = {booking_expire_notifications: e};
                                  updateNotify(update);
                                  setNotifications({...notifications, booking_expire_notifications: e})
                              }}/>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div className='info-option'>
                <Grid container direction='row' justify='space-between' alignItems='center'>
                    <Grid item xs={10} sm={10} md={10}>
                        <div className='label-left'>Unsubscribe from all marketing emails</div>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2}>
                        <div className='label-right'>
                            <IOSSwitch value={notifications.unsubsscribe_marketing_emails == 1 ? true : false}
                                onChange={(e) => {
                                  let update = {unsubsscribe_marketing_emails: e};
                                  updateNotify(update);
                                  setNotifications({...notifications, unsubsscribe_marketing_emails: e})
                             }}/>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>

    );
};

export default Notifications;