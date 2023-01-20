import { Grid, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import Modal from 'react-modal';
import './invitefriends.css';
import CommonQuestions from './components/CommonQuestions';
import close_icon from '../assets/close_icon.png';
import ModalAuth from './components/ModalAuth';
import ShareCard from './components/ShareCard';
import discount from '../assets/discount.png';
import invite from '../assets/invite.png';
import book from '../assets/book.png';
import { inviteFriends } from "../../../redux/actions/personalInfo";
import { useDispatch } from "react-redux";
import { inviteFriendsApiFun } from "./Api/acc_apis"
import LinearProgress from '@material-ui/core/LinearProgress';
import { JellyBounceLoader } from 'react-loaders-kit';
export default function InviteFriends() {
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteModal, setInviteModal] = useState(false);
  const [copy, setCopy] = useState(false);
  const [inviteLink, setInviteLink] = useState('https://www.beeyondboats.com');

  const [invitationCheck, setInvitationCheck] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [loading, setLoading] = useState(false);
  const loaderProps = {
    loading,
    size: 20,
    duration: 1
  }

  const [auth, setAuth] = useState({
    header: 'Congratulations',
    body: 'You have succesfully invited',
    left_btn: {
      text: 'Ok',
      style: 'left-btn blue',
    },
  });

  const handleCopy = () => {
    setTimeout(function () {
      setCopy(false);
    }, 5000);
  };

  function handleModalClose() {
    setInviteModal(false);
  }
  const dispatch = useDispatch();

  const inviteFriend = () => {

    setInvitationCheck(false);
    let invitation;
    let invitationCheck = false;
    var phone = /^\d{10}$/;
    if (/\S+@\S+\.\S+/.test(inviteEmail)) {
      invitation = {
        "email": inviteEmail
      }
      invitationCheck = true;
      setLoading(true)
    } else if (inviteEmail.match(phone)) {
      invitation = {
        "phoneNumber": inviteEmail
      }
      invitationCheck = true;

    } else {

      invitationCheck = false;
      setInvitationCheck(true);
    }
    if (invitationCheck == true) {
      dispatch(inviteFriends(invitation))
        .then(data => {
          // setUserDetails(data);
          const getSessionToken = sessionStorage.getItem("loginToken");
          inviteFriendsApiFun(getSessionToken, data.email).then(resList1 => {
            if (resList1.status = "Sent") {
              setLoading(false)
              console.log(resList1, "succs")
              setInviteModal(true);

            } else {
              setLoading(false)
              console.log(resList1, "popup of message")
            }
          })
        })
        .catch(e => {
          console.log(e);
          setInvitationCheck(true);
        });
    }

  };



  return (
    <>
      <div className='invite-friend-container option-details invite-friend'>
        <div className='header'>
          <div className='head'>join the waterpin community</div>
          <div className='body'>How it works?</div>
        </div>
        <Grid container spacing={1} className='container-grid'>
          <Grid item sm={12} md={4} className='each-grid'>
            <Paper>
              <div className='grid-img'>
                <img src={invite} style={{ width: '40px', height: '50px' }} />
              </div>
              <div className='head'>Invite friends who are new.</div>
              <div className='body'>
                Invite people who don't have an account yet to sign up through
                your link.
              </div>
            </Paper>
          </Grid>
          <Grid item sm={12} md={4} className='each-grid'>
            <Paper>
              <div className='grid-img'>
                <img src={discount} style={{ width: '50px', height: '50px' }} />
              </div>
              <div className='head'>You both get a discount!</div>
              <div className='body'>
                Once a friend signs up with your link you both can get up to
                $200 off your next trip.
              </div>
            </Paper>
          </Grid>
          <Grid item sm={12} md={4} className='each-grid'>
            <Paper>
              <div className='grid-img'>
                <img src={book} style={{ width: '55px', height: '50px' }} />
              </div>
              <div className='head'>Don't forget to book!</div>
              <div className='body'>
                Once you both get your discount. You can use this towards any
                qualifying booking.
              </div>
            </Paper>
          </Grid>
        </Grid>
        <ShareCard
          inviteEmail={inviteEmail}
          setInviteEmail={setInviteEmail}
          inviteFriend={inviteFriend}
          copy={copy}
          setCopy={setCopy}
          inviteLink={inviteLink}
          handleCopy={handleCopy}
          errorMsg={invitationCheck}
          loaderArea={!loading ? "send" : <JellyBounceLoader {...loaderProps} />}
        />

      </div>

      <CommonQuestions />
      {inviteModal ? (
        <ModalAuth
          auth={auth}
          handleChangeClose={handleModalClose}
          handleChangeLeft={handleModalClose}
          icon={close_icon}
          email={inviteEmail}
        />
      ) : null}
    </>
  );
}
