import React from 'react';
import { connect } from 'react-redux';
import SubmitButton from '../../reusableComponents/buttons/submitButton';
import SocialLoginButtons from '../../reusableComponents/buttons/socialLoginButtons';
import PhoneSignup from '../../reusableComponents/phoneSignup';
import EmailSignup from '../../reusableComponents/emailSignup';
import ContactVerification from '../../reusableComponents/popups/contactVerification';
import phoneGetSignUp, { googleSignupApiFunc } from "./signupApi"
import AppleLogin from 'react-apple-login';
import facebook from '../../images/social/facebook.png';
import google from '../../images/social/google.png';
import email from '../../images/social/email.png';
import apple from '../../images/social/apple.png';
import { Link, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  googleSignup,
  facebookSignup,
  phoneSignup,
  verifyPhoneNumber,
} from '../../redux/actions/auth';
import PopupHeader from '../../reusableComponents/popups/popupHeader';
import Spinner from '../../reusableComponents/spinner';
import swal from 'sweetalert';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
class Signup extends React.Component {
  state = {
    loading: false,

    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    countryCode: '',

    signupWithEmail: false,
    signupWithPhoneNumber: true,

    phoneStep2: false,
    emailStep2: false,

    firstNameError: '',
    lastNameError: '',
    emailError: '',
    passwordError: '',
    phoneNumberError: '',
    countryCodeError: '',

    contactVerfication: false,
    inputArray: new Array(4).fill(''),
  };
  validate = () => {
    const {
      email,
      phoneNumber,
      password,
      signupWithEmail,
      emailStep2,
      phoneStep2,
      firstName,
      lastName,
      countryCode,
    } = this.state;
    let emailError = '';
    let phoneNumberError = '';
    let passwordError = '';
    let firstNameError = '';
    let lastNameError = '';
    let countryCodeError = '';
    if (signupWithEmail) {
      if (!emailStep2) {
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
        if (!firstName) {
          firstNameError = 'First name cannot be empty';
        }
        if (!lastName) {
          lastNameError = 'Last name cannot be empty';
        }
        if (firstNameError || lastNameError || emailError || passwordError) {
          this.setState({
            firstNameError,
            lastNameError,
            emailError,
            passwordError,
          });
          return false;
        }
        this.setState({
          emailStep2: true,
          firstNameError: '',
          lastNameError: '',
          emailError: '',
          passwordError: '',
        });
        return true;
      } else if (emailStep2) {
        if (!phoneNumber) {
          phoneNumberError = 'Phone number cannot be empty';
        }
        if (!countryCode) {
          countryCodeError = 'Country code cannot be empty';
        }
        if (phoneNumberError || countryCodeError) {
          this.setState({ phoneNumberError, countryCodeError });
          return false;
        }
        this.setState({ phoneNumberError: '', countryCodeError: '' });
        return true;
      }
    } else {
      if (!phoneStep2) {
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
          phoneStep2: true,
          phoneNumberError: '',
          countryCodeError: '',
          passwordError: '',
        });
        return true;
      } else if (phoneStep2) {
        if (!email) {
          emailError = 'Email cannot be empty';
        }
        if (!email.includes('@')) {
          emailError = 'Invalid email';
        }
        if (!firstName) {
          firstNameError = 'First name cannot be empty';
        }
        if (!lastName) {
          lastNameError = 'Last name cannot be empty';
        }
        if (firstNameError || lastNameError || emailError) {
          this.setState({ firstNameError, lastNameError, emailError });
          return false;
        }
        this.setState({
          firstNameError: '',
          lastNameError: '',
          emailError: '',
        });
        return true;
      }
    }
  };
  onContinueStep2 = () => {
    this.validate()
    this.setState({
      contactVerfication:true,
      phoneStep2: false,
      signupWithEmail: false,
      signupWithPhoneNumber: false,
    });
  }
  customSignupWithClickHandler = () => {
    this.setState({
      signupWithEmail: true,
      signupWithPhoneNumber: false,
    });

  }
  onContinueStep1 = (event) => {

     this.validate();

    phoneGetSignUp(this.state.phoneNumber, this.state.countryCode, this.state.firstName, this.state.lastName, this.state.email, this.state.password).then((res) => {
      if (res.token) {
        swal({
          title: "Successfuly",
          text: "Your account has been created",
          icon: "success",
          buttons: "Ok",
        })
      } else if (res.message == "User already exists") {
        // swal({
        //   title: "Sorry",
        //   text: "This account is already exist",
        //   icon: "warning",
        //   dangerMode: true,
        // })
        toast.error('This account is already exist', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
      else if (res.message == "Phone number verification error") {
        // swal({
        //   title: "Sorry",
        //   text: "Phone number verification error",
        //   icon: "warning",
        //   dangerMode: true,
        // })
        toast.error('Phone number verification error', {
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
  componentClicked = () => {
    console.log('Facebook btn clicked');
  }
  responseFacebookSdk = (response) => {
    console.log('Facebook callbacker', response);
  }
  responseGoogle = (getStuff) => {
    this.setState({
      signupWithEmail: true,
      signupWithPhoneNumber: false,
    });
    console.log("google auth return", getStuff)
    const getFirstName = document.querySelector(".dInput1").value = getStuff.profileObj.givenName;
    const getLastName = document.querySelector(".dInput2").value = getStuff.profileObj.familyName
    const getEmail = document.querySelector(".iF").value = getStuff.profileObj.email
    this.setState({ phoneNumber: '', countryCode: '', firstName: getFirstName, lastName: getLastName, email: getEmail, password: this.state.password });

  }
  onInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });

  };
  onSubmit = (e) => {
    e.preventDefault();
    const {
      signupWithEmail,
      email,
      password,
      phoneNumber,
      firstName,
      lastName,
      countryCode,
    } = this.state;
    const { phoneSignup } = this.props;
    this.validate();
    const phoneNumberModified = countryCode + phoneNumber;
    const data = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber: phoneNumberModified,
      countryCode,
    };
    if (signupWithEmail) {
      this.setState({ loading: true });
    } else {
      this.setState({ loading: true }, async () => {
        data.phoneSignup = true;
        await phoneSignup(data);
      });
    }

  };
  componentDidMount = async () => { };
  googleSignup = () => {
    window.gapi.client
      .init({
        apiKey: 'AIzaSyAqUDhQExisoyr6JBkeNLBDSnS57gDkVR0',
        clientId:
          '984646776674-2845flf4uvghikn89i5sl34f5i0p86dk.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/userinfo.profile',
      })
      .then(() => {
        window.gapi.auth2
          .getAuthInstance()
          .signIn()
          .then(({ xc }) => {
            const data = { idToken: xc.id_token };
            this.props.googleSignup(data);
            console.log("testing ", data)
          });
      })
      .catch((e) => {
        //error handling on user closing the google popup
      });

  };
  // facebookSignup = async () => {
  //   await window.FB.login(
  //     (response) => {
  //       if (response.authResponse) {
  //         const { accessToken, userID } = response.authResponse;
  //         this.props.facebookSignup(accessToken, userID);
  //       } else {
  //         //error handling on user closing the facebook popup
  //       }
  //     },
  //     { scope: 'email' }
  //   );
  // };
  googleSignup = () => {
    console.log("ypuo click on google signup")
  }

  signupWithClickHandler = (params) => {
    if (params === 'email') {
      this.setState({
        signupWithEmail: true,
        signupWithPhoneNumber: false,
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
      this.googleSignup();
    } else if (params === 'facebook') {
      this.facebookSignup();
    } else if (params === 'apple') {
    }

  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.phoneSignedupUser !== this.props.phoneSignedupUser) {
      this.setState({ loading: false, contactVerfication: true });
    }
  };
  componentWillUnmount = () => {
    this.setState({
      phoneNumber: null,
      password: null,
      email: null,
      signupWithEmail: false,
      signupWithPhoneNumber: true,
      firstName: null,
      lastName: null,
      phoneStep2: false,
      emailStep2: false,
      loading: false,
    });
  };
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
    this.setState({ contactVerfication: false });
    this.props.onCloseClick('signup');
  };
  onVerifyClick = (e) => {
    e.preventDefault();
    // const code = this.state.inputArray.join('');
    // const { id, requestId } = this.props.phoneSignedupUser;
    // const data = { id, requestId, code };
    // this.props.verifyPhoneNumber(data);
    console.log("data", this.state.inputArray)
    this.setState({ loading: true });
  };
  render() {
    const { onCloseClick, onClickHandler } = this.props;
    const {
      signupWithEmail,
      signupWithPhoneNumber,
      emailStep2,
      phoneStep2,
      contactVerfication,
      inputArray,
      loading,
    } = this.state;
    if (signupWithEmail) {
      return (
        <div className='lC'>
          <div className='lW'>
            <PopupHeader
              params='signup'
              onCloseClick={onCloseClick}
              headTitle='Create an account'
            />

            <div className='lContent'>
            <form className='lForm' onSubmit={this.onSubmit}>

                {!emailStep2 && signupWithEmail ? (
                  <><EmailSignup
                    onInputChange={this.onInputChange}
                    type='emailSignup'
                  />
                  <h5 style={{marginTop: 10, color: "red"}}>{this.state.firstNameError}</h5>
                  <h5 style={{marginTop: 10, color: "red"}}>{this.state.lastNameError}</h5>
                  <h5 style={{marginTop: 10, color: "red"}}>{this.state.emailError}</h5>
                  <h5 style={{marginTop: 10, color: "red"}}>{this.state.passwordError}</h5>
                </>
                ) : null}

                {emailStep2 && signupWithEmail ? (
                  <React.Fragment>
                    <PhoneSignup
                      type='emailSignupStep2'
                      onInputChange={this.onInputChange}
                    />
                    <h5 style={{marginTop: 10, color: "red"}}>{this.state.countryCodeError}</h5>
                    <h5 style={{marginTop: 10, color: "red"}}>{this.state.phoneNumberError}</h5>
                    <SubmitButton buttonText='Submit' />
                  </React.Fragment>
                ) : null}
              </form>

              {!emailStep2 ? (
                <div className='sBContainer'>
                  <button onClick={this.onContinueStep1}>Continue</button>
                </div>
              ) : null}

              <SocialLoginButtons
                buttonText='Sign up'
                loginSignupClickHandler={this.signupWithClickHandler}
              />

              <div className='prompt'>
                <p>
                  Already have an account?{' '}
                  <span
                    onClick={() => {
                      onCloseClick('signup');
                      onClickHandler('login');
                    }}
                  >
                    Login
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* {loading ? <Spinner /> : null} */}
        </div>
      );
    } else if (contactVerfication) {
      return (
        <div className='lC'>
          <ContactVerification
            handleChange={this.onVerificationNumberChange}
            inputArray={inputArray}
            onCloseClick={this.onContactVerficationClose}
            onSubmit={this.onVerifyClick}
          />
        </div>
      );
    }

    return (
      <div className='lC'>
        <div className='lW'>
          <PopupHeader
            params='signup'
            onCloseClick={onCloseClick}
            headTitle='Create an account'
          />
          <div className='lContent'>
            <form className='lForm' onSubmit={this.onSubmit}>
              {!phoneStep2 && signupWithPhoneNumber ? (
                
                <PhoneSignup
                  onInputChange={this.onInputChange}
                  type='phoneSignup'
                />
              ) : null}
              {phoneStep2 && signupWithPhoneNumber ? (
                <React.Fragment>
                
                  <EmailSignup onInputChange={this.onInputChange} />
                  <SubmitButton buttonText='Submit' />
                </React.Fragment>
              ) : null}
            </form>
            {!phoneStep2 ? (
              <div className='sBContainer'>
                <button onClick={this.onContinueStep2}>Continue</button>
              </div>
            ) : null}
            { /* <SocialLoginButtons
              buttonText='Sign up'
              loginSignupClickHandler={this.signupWithClickHandler}
            /> */ }
            {/*login with apple*/}
            <div class="sLBCC" onClick={this.customSignupWithClickHandler}>
              <div class="sLBC" >
                <img class="email-icon" src={email} alt="" />
                <button>Sign up with Email</button>
              </div>
              <GoogleLogin
                clientId="984646776674-2845flf4uvghikn89i5sl34f5i0p86dk.apps.googleusercontent.com"
                buttonText="Sign up with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
            </div>

            <div class="sLBCC">
              <FacebookLogin
                appId="965220040991077"
                autoLoad={true}
                fields="name,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebookSdk} />
              <AppleLogin
                clientId={"com.react.apple.login"}
                redirectURI={"https://redirectUrl.com"}
                responseType={"code"}
                responseMode={"query"}
                usePopup={false}
                designProp={
                  {
                    height: 64,
                    width: 371,
                    color: "white",
                    border: true,
                    type: "sign-in",
                    border_radius: 15,
                    scale: 1,
                    locale: "en_US",
                  }
                }
              />

            </div>
            { /*end code of login with apple */}
            <div className='prompt'>
              <p>
                Already have an account?{' '}
                <span
                  onClick={() => {
                    onCloseClick('signup');
                    onClickHandler('login');
                  }}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
        <ToastContainer/>
      </div>
    );
  }
}
const mapStateToProps = ({ authReducer, phoneEmailVerifyReducer }) => {
  return {
    phoneSignedupUser: phoneEmailVerifyReducer.phoneSignedupUser,
    userDetails: authReducer.userDetails,
  };
};
export default connect(mapStateToProps, {
  googleSignup,
  facebookSignup,
  phoneSignup,
  verifyPhoneNumber,
})(Signup);
