import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import check from '../assets/Check.png';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import CustomizedProgressBars from './components/progressbar';
import SecurityVerificationCard from './components/SecurityVerificationCard';
import close_icon from '../assets/close_icon.png';
import ModalAuth from './components/ModalAuth';
import Modal from 'react-modal';
import swal from 'sweetalert'
import './loginsecurity.css';
import ContactVerification from '../../../reusableComponents/popups/contactVerification';
import { setTwoAuthTurnOnAPI, updateAfterVerCOde, getUserDetail, uploadImageApi } from './Api/acc_apis'
import { verifyCodeApiFun, sendVerification, } from '../../../components/auth/signupApi'
import CircularProgress from '@material-ui/core/CircularProgress';
import testimage from '../assets/discount.png';
export default function SecurityVerification() {
  // the following code of swich on if enable
  let userAuth = sessionStorage.getItem("logindetail");
  let getTwoStepAuth = JSON.parse(userAuth);
  let getUuEmail = getTwoStepAuth.twoStepAuth;
  console.log(getUuEmail);
  const [twoStepValue, setTwoStepValue] = useState(false);
  const [authMethod, setAuthMethod] = useState(false);
  const [authConfirm, setAuthConfirm] = useState(false);
  let udetail = sessionStorage.getItem("logindetail");
  let uudetail = JSON.parse(udetail);
 
  const [authComp, setAuthComp] = useState(false);
  const [uploadId, setUploadId] = useState(false);
  const [phoneVerText, setPhoneVerText] = useState("Verify");
  const [emailVerText, setEmailVerText] = useState("Verify");
  const [verModel, setVerModel] = useState(false);
  const [verifcationShow, setVerificationShow] = useState("")
  const [uploadConfirm, setUploadConfirm] = useState(false);
  const [inputArray, setInputArray] = useState(Array(6).fill(''))
  const [goalLoader, setGoalLoader] = useState(false)
  const [getDetail, setDetail] = useState([])
  const [imageState, setImageState]= useState(testimage)
  const [modalList, setModalList] = useState([
    {
      header: 'Select Authentication Method',
      body:
        'Choose how you’d like to receive your verification code every time you log-in.',
      left_btn: {
        text: 'SMS',
        style: 'left-btn',
      },
      right_btn: {
        text: 'Email',
        style: 'right-btn',
      },
    },
    {
      header: 'Confirmation',
      body: 'Are you sure you want to turn on 2 - Step Authentication?',
      left_btn: {
        text: 'No',
        style: 'left-btn grey',
      },
      right_btn: {
        text: 'Yes',
        style: 'right-btn blue',
      },
    },
    {
      header: 'Congratulations!',
      body: '2 - Step Verification is now turned on!',
      left_btn: {
        text: 'Ok',
        style: 'left-btn blue',
      },
    },
    {
      header: 'Received!',
      body:
        'Your identity is being verified, please check back in 24-48 hours.',
      left_btn: {
        text: 'Ok',
        style: 'left-btn blue',
      },
    },
  ]);
  //  upload image 
  const uploadImage =()=>{
    document.getElementById('uploadImage').click( (e)=>(
        console.log("triggered",e)
    ))
  }
  const onchangeImage =(e)=>{
    const formData = new FormData()
      formData.append(
        e.target.files[0],
        e.target.files[0].name
      ) 
   console.log("uploaded", formData)
    uploadImageApi( e.target.files[0].name,  e.target.files[0].name).then(res=>{
      if(res){
       
      } else{
        console.log("none uploaded" )
      }
    })
  }
  // get res of status api hit 
  
  useEffect( async () =>{
    const getSes = sessionStorage.getItem("loginToken");
    await getUserDetail(getSes).then(resList1 => {
      const checkVerStatu=resList1.response[0].verified
      const parseStatus= JSON.parse(checkVerStatu)
      if(parseStatus.phone==true)  setPhoneVerText("Verified")
      if(parseStatus.email==true)  setEmailVerText("Verified")
      if(resList1.response[0].emailTwoStepAuth==1 || resList1.response[0].twoStepAuth==1) setTwoStepValue(true)
    })
  })


  function handleChangeClose() {
    setTwoStepValue(false);
    setAuthMethod(false);
    setAuthConfirm(false);
    setAuthComp(false);
  }
  function authMethodLeft() {
    setAuthConfirm(true);
    setAuthMethod(false);
    setTwoStepValue(false);
  }
  function authMethodRight() {
    setAuthConfirm(true);
    setAuthMethod(false);
  }

  function authConfirmLeft() {
    setAuthConfirm(false);
    setTwoStepValue(false);
  }
  function authConfirmRight() {
    setAuthConfirm(false);
    const getSessionToken = sessionStorage.getItem("loginToken");
    setTwoAuthTurnOnAPI(getSessionToken, 1, 0).then(res => {
      if (res) {
      console.log(res, "succs")
        setAuthComp(true);
        setTwoStepValue(true)
      } else {
        console.log(res, "error popup of message")
      }
    })
  }
  function authCompLeft() {
    setAuthComp(false);
  }

  function handleUploadConfirm() {
    setUploadConfirm(false);
  }
  // the following code is verfication of  code 
  const onVerificationNumberChange = (target, index, e) => {
    if (isNaN(target.value)) return false;
    const inputArrayStore = inputArray;
    inputArrayStore[index] = target.value;
    // setInputArray({ inputArray }, () => {
    //   if (target.nextSibling) {
    //     target.nextSibling.focus();
    //   }
    // });
    if (target.nextSibling) {
      target.nextSibling.focus();
    }
  };
  const onContactVerficationClose = () => {
    setVerModel(false)
  };
  const onVerifyClick = (e) => {
    e.preventDefault();
    //the following code is about storing 6 digit code 
    const getNumbers = inputArray
    const gePayload = getNumbers.join("")
    console.log("check onchange value", gePayload)
    verifyCodeApiFun(gePayload).then((res) => {
      if (res.status === "Approved") {
        swal({
          title: `${res.message}`,
          text: "Your account has been verified",
          icon: "success",
          buttons: "Ok",
        }).then((willDelete) => {

          const getSessionToken = sessionStorage.getItem("loginToken");
          let dataVer = {
            email: false,
            phone: true
          }
          setVerModel(false)
          let verFTrueSend = JSON.stringify(dataVer);
          updateAfterVerCOde(getSessionToken, verFTrueSend).then(res => {
            if (res) {
              console.log(res, "Verified ying statins")
              setPhoneVerText("Verified")
              } else {
                console.log(res, "error popup of message")
              }
          })
        });
      } else {
        setVerModel(false)
        swal({
          title: "Sorry",
          text: "Please Try again your account not verifed.",
          icon: "warning",
          dangerMode: true,
        })
      }
    })
  };

  let userDetrail = sessionStorage.getItem("logindetail");
  let getUuId = JSON.parse(userDetrail);
  // the following code of swich on if enable
  let defUuId = getUuId.id
  const setPhoneVer = () => {
    setGoalLoader(true)
    sendVerification(defUuId).then((res) => {
      if (res.status) {
        setGoalLoader(true)
        setVerModel(true)
      } else {
        swal({
          title: "Sorry",
          text: "Please Try again your.",
          icon: "warning",
          dangerMode: true,
        }).then(() => {
          setGoalLoader(false)
        });
      }
    })
  }
  const setEmailVer = () => {
    setGoalLoader(true)
    sendVerification(defUuId).then((res) => {
      if (res.status) {
        setGoalLoader(false)
        setVerModel(true)
      } else {
        swal({
          title: "Sorry",
          text: "Please Try again your.",
          icon: "warning",
          dangerMode: true,
        }).then(() => {
          setGoalLoader(false)
        });
      }
    })
  }
  return (
    <>
      {verModel ? (
        <div className='lC'>
          <div className='lContent'>
            <ContactVerification
              handleChange={onVerificationNumberChange}
              inputArray={inputArray}
              onCloseClick={onContactVerficationClose}
              onSubmit={onVerifyClick}
            />
          </div>
        </div>) : null
      }
      <SecurityVerificationCard
        twoStepValue={twoStepValue}
        setTwoStepValue={setTwoStepValue}
        setAuthMethod={setAuthMethod}
        setUploadId={setUploadId}
        check={check}
        phoneVerText={phoneVerText}
        phoneVerClick={setPhoneVer}
        emailVerText={emailVerText}
        emailVerClick={setEmailVer}
        setGoalLoader={goalLoader ? <CircularProgress /> : ""}
      />

      {authMethod ? (
        <ModalAuth
          auth={modalList[0]}
          handleChangeClose={handleChangeClose}
          handleChangeLeft={authMethodLeft}
          handleChangeRight={authMethodRight}
          icon={close_icon}
        />
      ) : null}

      {authConfirm ? (
        <ModalAuth
          auth={modalList[1]}
          handleChangeClose={handleChangeClose}
          handleChangeLeft={authConfirmLeft}
          handleChangeRight={authConfirmRight}
          icon={close_icon}
        />
      ) : null}
      {authComp ? (
        <ModalAuth
          auth={modalList[2]}
          handleChangeClose={handleChangeClose}
          handleChangeLeft={authCompLeft}
          icon={close_icon}
        />
      ) : null}
      {uploadConfirm ? (
        <ModalAuth
          auth={modalList[3]}
          handleChangeClose={handleUploadConfirm}
          handleChangeLeft={handleUploadConfirm}
          icon={close_icon}
        />
      ) : null}
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
               <input type="file" id="uploadImage" onChange={onchangeImage} style={{display:"none"}} /> 
                <div className='upload' onClick={uploadImage}>
                 {imageState ? <img src={imageState} className="left-upload-img"/>
                   : <div>
                      <ImageOutlinedIcon className='icon' />
                      <div>Drag or Upload</div>
                    </div>
                   }
                 </div>
                <input type="file" id="uploadImage" onChange={onchangeImage} style={{display:"none"}} /> 
                <div className='upload' onClick={uploadImage}>
                 {imageState ? <img src={imageState} className="left-upload-img"/>
                   : <div>
                      <ImageOutlinedIcon className='icon' />
                      <div>Drag or Upload</div>
                    </div>
                   }
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
                  className='right-btn sdfsd blue'
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
    </>
  );
}
