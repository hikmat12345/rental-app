import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import CustomizedProgressBars from './components/progressbar';
import { Grid } from '@material-ui/core';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import editicon from '../assets/edit.png';
import PersonalInfoCard from './components/PersonalInfoCard';
import './personalInfo.css';
import {connect} from "react-redux";
import {base_Url} from "../overnighStay/API/api";
import axios from "axios";

import {personalInfoGet,updatePersonalInfo} from "../../../redux/actions/personalInfo";
import { useDispatch, useSelector } from "react-redux";

function Personalinfo_backup(props) {
    const [edit, setEdit] = useState(false);
    const [uploadId, setUploadId] = useState(false);
    const [uploadConfirm, setUploadConfirm] = useState(false);

    const dispatch = useDispatch();
    const getUserInfo = useSelector(state => state.personalInfoReducer);
    const initialUserInfoState = {};

    const [userDetails, setuserDetails] = useState(initialUserInfoState);

    useEffect(() => {
        setuserDetails(getUserInfo);
        dispatch(personalInfoGet());
    }, []);


    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setuserDetails({ ...userDetails, [name]: value });
    };
    const updateUserInfo = () => {
        const body = {
            "userDetails": {userDetails}
        };
        console.log("bodybodybodybodybodybodybodybodybodybodybody",body);

        dispatch(updatePersonalInfo(body))
            .then(data => {
                setuserDetails(data);
                setSubmitted(true);
                console.log(data);
            })
            .catch(e => {
                console.log(e);
            });
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
            {console.log("userDetails-------------------------->",userDetails)}
            {userDetails ? <PersonalInfoCard data={userDetails} /> : null}
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
                                    onChange={handleInputChange}
                                >
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
                                    // onChange={(event) => setDob(event.target.value)}
                                    placeholder='05/10/1996'
                                    onChange={handleInputChange}
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
                                    name = "phone"
                                    value={userDetails.phone}
                                    type='text'
                                    placeholder='Enter Phone Number'
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='field'>
                                <div className='label'>Government Id</div>
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
                                    value={userDetails.address}
                                    type='text'
                                    placeholder='1293 Southwest 113th Way, Pembroke Pines, FL 33025, United States'
                                />
                            </div>
                            <div className='field'>
                                <div className='label'>Emergency Contact</div>
                                <div>
                                    <input
                                        value={userDetails.emergencyName}
                                        type='text'
                                        placeholder='Name'
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
export default Personalinfo_backup


