import React, { useState } from 'react';
import './loginsecurity.css';
import edit from '../assets/edit.png';
import Modal from 'react-modal';
import SocialAccountCard from './components/SocialAccountCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import { updatePass } from './Api/acc_apis'
import { updatePassword, updatePersonalInfo } from "../../../redux/actions/personalInfo";
import { useDispatch } from "react-redux";
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginSecurity() {
  const [changePassword, setChangePassword] = useState(false);
  const [connectFacebook, setConnectFacebook] = useState(false);
  const [uploadId, setUploadId] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [facebookProfile, setFacebookProfile] = useState('');
  const [facebookPassword, setFacebookPasssword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch();
  const updateUserPassword = () => {
    
    setShowLoader(true);
 if (newPassword != repeatPassword) {
      setPasswordMessage("New password and Repeat password are not same.");
      setShowLoader(false);
    } 
    else if(newPassword=="" || newPassword.length==0 && repeatPassword=="" || repeatPassword.length==0 && oldPassword=="" || oldPassword.length==0  ){
      setPasswordMessage("All fields are required.");
      setShowLoader(false);
    } 
    else {

      { /* oldPassword newPassword 
         if(data.message == "successfully updated the password."){
               setShowLoader(false);
               setChangePassword(false);
             }
             else {
               setPasswordMessage(data.message);
               setPasswordError(true);
               setShowLoader(false);
             } */}
      setPasswordMessage("");
      const token = sessionStorage.getItem("loginToken")
      updatePass(token, oldPassword, newPassword).then((res) => {
        console.log("resp", res)
        if (res.message == "successfully updated the password.") {
          setShowLoader(false);
          toast.success('Successfully updated the password.', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
            setOldPassword("")
            setNewPassword("")
            setRepeatPassword("")
            setChangePassword(false);
        } else
          if (res.message == "Old password does not match.") {
            setShowLoader(false);
            toast.error('Old password does not match.', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          } else if (res.message == "Authentication Failed") {
            setShowLoader(false);
              toast.error('Password is not updated try again.', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            }
         })
      // setChangePassword(false);
    }
  };
  return (
    <>
      <div className='top-label-login'>
        <label>LOGIN</label>
      </div>
      <div className='info-options'>
        <SocialAccountCard
          edit={edit}
          head={'Password'}
          body={'Password changed 2 months ago'}
          onChange={setChangePassword}
          link={'Change'}
        />
       <div className='top-label-social'>
          <label>Social Account</label>
        </div>
        <SocialAccountCard
          head={'Facebook'}
          body={'Not Connected'}
          onChange={setConnectFacebook}
          link={'Connect'}
        />
        <SocialAccountCard
          head={'Google'}
          body={'Not Connected'}
          onChange={setConnectFacebook}
          link={'Connect'}
        />
        <SocialAccountCard
          head={'Instagram'}
          body={'Not Connected'}
          onChange={setConnectFacebook}
          link={'Connect'}
        />
      </div>
      <Modal isOpen={changePassword}>
        <div className='col-md-5  mx-auto mt-5'>
          <div className='modal-password-container'>
            <div className='header'>
              <div className='head'>Change Password</div>
            </div>
            <div className='container'>
              <div className='field'>
                <div className='label'>Old Password</div>
                <input
                  value={oldPassword}
                  type='password'
                  onChange={(event) => setOldPassword(event.target.value)}
                />
              </div>
              <div className='field'>
                <div className='label'>New Passsword</div>
                <input
                  value={newPassword}
                  type='password'
                  placeholder='Type here'
                  onChange={(event) => setNewPassword(event.target.value)}
                />
              </div>
              <div className='field'>
                <div className='label'>Repeat Password</div>
                <input
                  value={repeatPassword}
                  type='password'
                  placeholder='Type here'
                  onChange={(event) => {
                    setRepeatPassword(event.target.value);
                    setPasswordError(true);
                  }}
                />
              </div>
              {!passwordError ? null : <div className="incorrect-error">
                {passwordMessage}
              </div>}
            </div>
            {!showLoader ? null : <CircularProgress />}
            <div className='btn-container'>
              <div>
                <button
                  className='left-btn grey'
                  onClick={() => {
                    setChangePassword(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className='right-btn blue'
                  onClick={updateUserPassword}
                // onClick={() => {
                //   setChangePassword(false);
                // }}
                >
                  Save
                </button>
               
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <ToastContainer/>
      <Modal isOpen={connectFacebook}>
        <div className='col-md-5 mx-auto mt-5'>
          <div className='modal-password-container'>
            <div className='header'>
              <div className='head'>Connect facebook</div>
            </div>
            <div className='container'>
              <div className='field'>
                <div className='label'>Facebook Profile</div>
                <input
                  value={facebookProfile}
                  type='text'
                  onChange={(event) => setFacebookProfile(event.target.value)} />
              </div>
              <div className='field'>
                <div className='label'>Passsword</div>
                <input
                  value={facebookPassword}
                  type='password'
                  placeholder='Type here'
                  onChange={(event) => setFacebookPasssword(event.target.value)}
                />
              </div>
            </div>
            <div className='btn-container'>
              <div>
                <button
                  className='left-btn grey'
                  onClick={() => {
                    setConnectFacebook(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className='right-btn blue'
                  onClick={() => {
                    setConnectFacebook(false);
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
