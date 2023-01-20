import React, {useEffect, useState, useMemo} from 'react';
import Modal from 'react-modal';
import CustomizedProgressBars from './components/progressbar';
import { CircularProgress, Grid } from '@material-ui/core';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import editicon from '../assets/edit.png';
import PersonalInfoCard from './components/PersonalInfoCard';
import './personalInfo.css';
import swal from 'sweetalert';
// import CircularProgress from '@material-ui/core/CircularProgress';

import {personalInfoGet,updatePersonalInfo} from "../../../redux/actions/personalInfo";
import {getUserInformation, updateUserInformation, userGet } from "./Api/acc_apis";
import { useDispatch, useSelector } from "react-redux";
import store from "../../../redux/store/store";

function PersonalInfo() {
  const [edit, setEdit] = useState(false);
  const [uploadId, setUploadId] = useState(false);
  const [uploadConfirm, setUploadConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [updateInfo, setUpdateInfo] = useState(false);

  const dispatch = useDispatch();

  const initialUserInfoState = {};
  const [userDetails, setUserDetails] = useState(initialUserInfoState);
  

  // const getUserInfo = useSelector(state => state.personalInfoReducer);
  //   useEffect(() => {
  //     dispatch(personalInfoGet());
  //     setUserDetails(getUserInfo);
  //     setLoading(false);
  //   }, []);

  useEffect(() => {
    setLoading(true);
    const getSessionToken = sessionStorage.getItem("loginToken");
    userGet(getSessionToken).then(res => {
      console.log("UserDetails", res.response)
      setUserDetails(res.response[0]);
      setUpdateInfo(false);
      setLoading(false);
      console.log("UserDetails FN", userDetails.gender)
    })
    .catch(e => {
      console.log(e);
      // setInvitationCheck(true);
    });
  }, [])

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
    setUpdateInfo(true);
  };
  const updateUserInfo = async () => {
    if(updateInfo){
    setLoading(true);
    const getSessionToken = sessionStorage.getItem("loginToken");
    await updateUserInformation(getSessionToken,userDetails).then(userInfo => {
      setUserDetails(userInfo);
      swal({
        title: "Success",
        text: "Personal Information updated successfully",
        icon: "success",
        buttons: "Ok",
      })
      setLoading(false);
      setUpdateInfo(false);
    }) .catch(e => {
      console.log(e);
    });
    } 
    setEdit(false);
  };

  return (
    <>
      <div className='top-label-person-info'>
        <label>Personal information</label>
        <div className='edit-info pointer' onClick={() => setEdit(true)}>
          <img src={editicon} />
          <span>Edit</span>
        </div>
      </div>
      {userDetails ? <PersonalInfoCard data={userDetails} /> : null}
      {loading && <CircularProgress />}
      <Modal isOpen={edit}>
        <div className='col-md-7  mx-auto mt-5'>
          <div className='modal-edit-info-container'>
            <div className='header'>
              <div className='head'>Edit Personal Information</div>
            </div>
            <div className='container'>
              <div className='field'>
                <div className='label'>Legal Name</div>
                <input
                    name = "firstName"
                    value={userDetails.firstName}
                    type='text'
                    placeholder='Name'
                    onChange={handleInputChange}
                />
              </div>
              <div className='field'>
                <div className='label'>Gender</div>

                <select
                    name = "gender"
                    value={userDetails.gender}
                    onChange={(e)=>{setUserDetails({ ...userDetails, gender: e.target.value });}}
                >
                  <option></option>
                  <option name='male'> Male</option>
                  <option name='female'>Female</option>
                </select>
              </div>
              <div className='field'>
                <div className='label'>Date Of Birth</div>
                <input
                    name = "dob"
                    value={userDetails.dob}
                    type='date'
                    placeholder='05/10/1996'
                    onChange={(e)=>{setUserDetails({ ...userDetails, dob: e.target.value });}}
                />
              </div>
              <div className='field'>
                <div className='label'>Email Address</div>
                <input
                    name = "email"
                  value={userDetails.email}
                  type='email'
                  placeholder='avanesa09@gmail.com'
                    onChange={handleInputChange}
                />
              </div>
              <div className='field'>
                <div className='label'>Phone Number</div>
                <input
                    name = "phoneNumber"
                  value={userDetails.phoneNumber}
                  type='text'
                  placeholder='Enter Phone Number'
                    onChange={handleInputChange}
                />
              </div>
              <div className='field'>
                <div className='label'>Government Id</div>
                {/* <input
                    name = "governmentID"
                  value={userDetails.governmentID}
                  type='text'
                  placeholder='Not Provided'
                    onChange={handleInputChange}
                /> */}
                <div style={{ flexDirection: 'row' }}>
                  <div className='gov'>
                    Not Provided
                    <span
                      onClick={() => {
                        setUploadId(true);
                      }}
                    >
                      Upload
                    </span>
                  </div>
                </div>
              </div>
              <div className='field'>
                <div className='label'>Address</div>
                <input
                  name="address"
                  value={userDetails.address}
                  type='text'
                  placeholder='1293 Southwest 113th Way, Pembroke Pines, FL 33025, United States'
                  onChange={handleInputChange}
                />
              </div>
              <div className='field'>
                <div className='label'>Emergency Contact</div>
                <div>
                  <input
                    name="emergencyContactNo"
                    value={userDetails.emergencyContactNo}
                    type='text'
                    placeholder='Emergency Contact No'
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <Grid container>
              <Grid item xs={12}>
                <div className='btn-container-edit'>
                  <div>
                    <button
                      className='left-btn grey'
                      onClick={() => {
                        setEdit(false);
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      className='right-btn blue'
                      onClick={updateUserInfo}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Modal>

      <Modal isOpen={uploadId}>
        <div className='col-md-8 mx-auto mt-5'>
          <div className='modal-password-container'>
            <div className='header'>
              <div className='head'>Upload Id</div>
              <div className='body'>
                {' '}
                Upload the front and back of your official license or upload a
                picture of your passport{' '}
              </div>
            </div>
            <div className='upload-container'>
              <Grid
                container
                direction='row'
                justify='space-evenly'
                alignItems='center'
              >
                <div className='upload'>
                  <div>
                    <ImageOutlinedIcon className='icon' />

                    <div>Drag or Upload</div>
                  </div>
                </div>

                <div className='upload'>
                  <div>
                    <ImageOutlinedIcon className='icon' />

                    <div>Drag or Upload</div>
                  </div>
                </div>
              </Grid>
            </div>

            <div className='progress-container'>
              <Grid
                container
                direction='row'
                justify='space-evenly'
                alignItems='center'
              >
                <div className='per'>
                  <span>Uploading 30%</span>
                  <CustomizedProgressBars value={30} />
                </div>

                <div className='per'>
                  <span>Uploading 30%</span>
                  <CustomizedProgressBars value={30} />
                </div>
              </Grid>
            </div>

            <div className='btn-container'>
              <div>
                <button
                  className='left-btn grey'
                  onClick={() => {
                    setUploadId(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className='right-btn blue'
                  onClick={() => {
                    setUploadId(false);
                    setUploadConfirm(true);
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal isOpen={uploadConfirm}>
        <div className='col-md-9 mx-auto mt-5'>
          <div className='modal-Auth-container'>
            <div className='header'>
              <div
                className='float-left close-btn'
                onClick={() => setUploadConfirm(false)}
              >
                x
              </div>
              <div className='head'>Received!</div>
            </div>
            <div className='body'>
              Your identity is being verified, please check back in 24-48 hours.
            </div>
            <div className='btn-container'>
              <div>
                <button
                  className='left-btn blue'
                  onClick={() => setUploadConfirm(false)}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
export default PersonalInfo


