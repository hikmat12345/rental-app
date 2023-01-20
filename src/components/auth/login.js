import React from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import SubmitButton from '../../reusableComponents/buttons/submitButton';
import SocialLoginButtons from '../../reusableComponents/buttons/socialLoginButtons';
import DynamicInputGroup from '../../reusableComponents/inputs/dynamicInputGroup';
import InputField from '../../reusableComponents/inputs/inputField';
import PopupHeader from '../../reusableComponents/popups/popupHeader';
import { facebookLogin, googleLogin } from '../../redux/actions/auth';
import { Link, Redirect } from 'react-router-dom';
import ContactVerification from '../../reusableComponents/popups/contactVerification';
import { verifyCodeApiFun, sendVerification } from "./signupApi"
import CircularProgress from '@material-ui/core/CircularProgress';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Login extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    countryCode: '',

    loginWithEmail: false,
    loginWithPhoneNumber: false,

    phoneStep2: false,
    emailStep2: false,

    firstNameError: '',
    lastNameError: '',
    emailError: '',
    passwordError: '',
    phoneNumberError: '',
    countryCodeError: '',

    twoStepAuth: false,
    login: false,
    verificationShow: false,
    inputArray: new Array(6).fill(''),

    loader:false
  };

  onInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };
  googleLogin = () => {
    console.log('google login');
    window.gapi.client
      .init({
        apiKey: 'AIzaSyAqUDhQExisoyr6JBkeNLBDSnS57gDkVR0',
        clientId:
          '865110435110-drsou9k8hqcq7v6n2jl7593ovbu9bbr2.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/userinfo.profile',
      })
      .then(() => {
        window.gapi.auth2
          .getAuthInstance()
          .signIn()
          .then(({ xc }) => {
            const data = { idToken: xc.id_token };
            this.props.googleLogin(data);
          });
      })
      .catch((e) => {
        //error handling on user closing the google popup
      });
  };
  facebookLogin = async () => {
    await window.FB.login(
      (response) => {
        if (response.authResponse) {
          const { accessToken, userID } = response.authResponse;
          this.props.facebookLogin(accessToken, userID);
        } else {
          //error handling on user closing the facebook popup
        }
      },
      { scope: 'email' }
    );
  };
  validate = () => {
    const { email, phoneNumber, password, countryCode, loginWithEmail } =
      this.state;
    let emailError = '';
    let phoneNumberError = '';
    let passwordError = '';
    let firstNameError = '';
    let lastNameError = '';
    let countryCodeError = '';
    if (loginWithEmail) {
      if (!email) {
        emailError = 'Email cannot be empty';
      }
      if (!email.includes('@')) {
        emailError = 'Invalid email';
      }
      if (!password) {
        passwordError = 'Password cannot be empty';
      }
      if (password.length <= 4) {
        passwordError = 'Password should be greater than 4 characters';
      }
      if (emailError || passwordError) {
        this.setState({
          firstNameError,
          lastNameError,
          emailError,
          passwordError,
        });
        return false;
      }
      this.setState({ emailError: '', passwordError: '' });
    } else {
      if (!phoneNumber) {
        phoneNumberError = 'Phone number cannot be empty';
      }
      if (!countryCode) {
        countryCodeError = 'Country code cannot be empty';
      }
      if (!password) {
        passwordError = 'Password cannot be empty';
      }
      if (password.length <= 4) {
        passwordError = 'Password should be greater than 4 characters';
      }
      if (phoneNumberError || countryCodeError || passwordError) {
        this.setState({ phoneNumberError, countryCodeError, passwordError });
        return false;
      }
      this.setState({
        phoneNumberError: '',
        countryCodeError: '',
        passwordError: '',
      });
      return true;
    }
  };
  loginWithClickHandler = (params) => {
    if (params === 'email') {
      this.setState({
        loginWithEmail: true,
        loginWithPhoneNumber: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        countryCode: '',
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        passwordError: '',
        phoneNumberError: '',
        countryCodeError: '',
      });
    } else if (params === 'google') {
      this.googleLogin();
    } else if (params === 'facebook') {
      this.facebookLogin();
    } else if (params === 'apple') {
    } else {
    }
  };
 
  // login verfication code 
  onVerificationNumberChange = (target, index, e) => {
    
    if (isNaN(target.value)) return false;
    const inputArray = this.state.inputArray;
    inputArray[index] = target.value;
    this.setState({ inputArray }, () => {
      if (target.nextSibling) {
        target.nextSibling.focus();
      }
    });
  };
  onContactVerficationClose = () => {
    this.setState({ verificationShow: false });
    this.props.onCloseClick('signup');
  };
  onResend =()=>{
    let  getUid= sessionStorage.getItem('logindetail');
    let parseUid= JSON.parse(getUid)
    sendVerification(parseUid.id)
  }
    //   sendVerification(storeDetail.id)
  onVerifyClick = (e) => {
    e.preventDefault();
    this.setState({loader:true})
    const getNumbers = this.state.inputArray
    const gePayload= getNumbers.join("")
    verifyCodeApiFun(gePayload).then((res) => {
      this.setState({loader:false})
      if (res.message=="Code is verified.") { 
          swal({
              title: `Successfuly`,
              text: "Your account has been verified",
              icon: "success",
              buttons: "Ok",
          }).then((willDelete) => {
            this.setState({ verificationShow: false });
            this.setState({ login: true });
        });
      } else if (res.message=="Code is not verified.") {
        toast.error('Please Try again your account not verifed.', {
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
  };
  // The following code of fubmit login form
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({loader:true})
    const uPassword = this.state.password;
    const pNumber = this.state.phoneNumber;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phoneNumber: pNumber, password: uPassword }),
    };
    fetch('http://18.117.223.241:6003/api/login/phone', requestOptions)
      .then((response) => response.json()
      )
      .then((data) => {
        this.setState({loader:false})
        // let storeDetail = {
        //       email: data.userDetails.email !==null ? data.userDetails.email : "",
        //       emailTwoStepAuth: data.userDetails.emailTwoStepAuth,
        //       firstName: data.userDetails.firstName,
        //       id: data.userDetails.id,
        //       lastName: data.userDetails.lastName,
        //       phoneNumber: data.userDetails.phoneNumber,
        //       phoneSignup: data.userDetails.phoneSignup,
        //       twoStepAuth: data.userDetails.twoStepAuth,
        //     }
        //     // result: "Successfully created the record"
        //     sessionStorage.setItem('logindetail', JSON.stringify(storeDetail));
        //     sessionStorage.setItem('loginToken', data.token);
       if(data.message=="Invalid password") {
          toast.error('Invalid password', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        } else if (data.message== "No user found"){
          toast.error('No user found', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
        
        if (data.token && data.userDetails.twoStepAuth == 1 || data.token && data.userDetails.emailTwoStepAuth == 1) {
              let storeDetail = {
                email: data.userDetails.email !==null ? data.userDetails.email : "",
                emailTwoStepAuth: data.userDetails.emailTwoStepAuth,
                firstName: data.userDetails.firstName,
                id: data.userDetails.id,
                lastName: data.userDetails.lastName,
                phoneNumber: data.userDetails.phoneNumber,
                phoneSignup: data.userDetails.phoneSignup,
                twoStepAuth: data.userDetails.twoStepAuth,
              }
              sessionStorage.setItem('loginToken', data.token);
              sessionStorage.setItem('logindetail', JSON.stringify(storeDetail));
          //    sendVerification(storeDetail.id).then((getVer)=>{
          //    if(getVer.message==="Email has been sent." ||  getVer.status==="Sent" ){
          //         sessionStorage.setItem('loginToken', data.token);
          //         sessionStorage.setItem('logindetail', JSON.stringify(storeDetail));
          //        } else if(getVer.message==="Token verification error") {
          //          toast.error('Not verfied try again.', {
          //           position: "bottom-right",
          //           autoClose: 5000,
          //           hideProgressBar: false,
          //           closeOnClick: true,
          //           pauseOnHover: true,
          //           draggable: true,
          //           progress: undefined,
          //           });
          //    }
          // })
                 this.setState({ verificationShow: true });
        } else if (data.token && data.userDetails.twoStepAuth == 0 && data.userDetails.emailTwoStepAuth == 0) {
               let storeDetail = {
                    email: data.userDetails.email !==null ? data.userDetails.email : "",
                    emailTwoStepAuth: data.userDetails.emailTwoStepAuth,
                    firstName: data.userDetails.firstName,
                    id: data.userDetails.id,
                    lastName: data.userDetails.lastName,
                    phoneNumber: data.userDetails.phoneNumber,
                    phoneSignup: data.userDetails.phoneSignup,
                    twoStepAuth: data.userDetails.twoStepAuth,
                  }
                  sessionStorage.setItem('loginToken', data.token);
                  sessionStorage.setItem('logindetail', JSON.stringify(storeDetail));
                  this.setState({ login: true });
          } 
      });
  };
  // the following code is markup render code  
  render() {
    const { onCloseClick, onClickHandler } = this.props;
    const { loginWithEmail } = this.state;
    const {
      signupWithEmail,
      signupWithPhoneNumber,
      emailStep2,
      phoneStep2,
      contactVerfication,
      inputArray,
      loading,
    } = this.state;
    if (this.state.verificationShow) {
      return ( 
        <div className='lC'>
             <div className='lContent'> 
              <ContactVerification
                handleChange={this.onVerificationNumberChange}
                inputArray={inputArray}
                onCloseClick={this.onContactVerficationClose}
                onSubmit={this.onVerifyClick}
                reSend={this.onResend}
              /> 
          </div> 
          <ToastContainer/>
        </div>
      )
    } else {
      return (
       <div className='lC'>
        
         <div className='lW'>
           <PopupHeader
              params='login'
              onCloseClick={onCloseClick}
              headTitle='Log in' />
              {this.state.loader ? <CircularProgress/>: ""}
            <div className='lContent'>
              <form className='lForm' onSubmit={this.onSubmit}>
                <DynamicInputGroup
                  onInputChange={this.onInputChange}
                  type={loginWithEmail ? 'loginEmail' : 'phoneCountry'}  />
                <SubmitButton buttonText='Continue' />
              </form>
              <SocialLoginButtons
                buttonText='Log in'
                loginSignupClickHandler={this.loginWithClickHandler} />
              {this.state.login && <Redirect from='/' to='/dashboard' />}
              <div className='prompt'>
                <p>
                  Don't have an account?{' '}
                  <span
                    onClick={() => {
                      onCloseClick('login');
                      onClickHandler('signup');
                    }}
                  >
                    {' '}
                    Create an Account
                  </span>
                </p>
              </div>
            </div>
          </div>
          {this.state.login && <Redirect from='/' to='/dashboard' />}
          <ToastContainer/>
        </div>
         
      );
    }
  }
}
const mapStateToProps = (state) => {
  return { state };
};
export default connect(mapStateToProps, { facebookLogin, googleLogin })(Login);
