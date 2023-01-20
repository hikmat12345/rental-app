import React from 'react';
import logo1 from '../../../images/header/logo.svg';
import logo2 from '../../../images/header/logo2.png';
import utilsLogo1 from '../../../images/header/utilsLogo1.png';
import headerOptions from '../../../images/header/headerOptions.png';
import utilsLogo3 from '../../../images/header/utilsLogo3.png';
import { connect } from 'react-redux';
import OutsideClickHandler from 'react-outside-click-handler';
import Dropdown from '../../dropdowns/dropdown';

//dropdown logos when the user is not authenticated
import signupLogo from '../../../images/dropdown/signup.png';

//dropdown common logos
import loginout from '../../../images/dropdown/loginout.png';
import listYacht from '../../../images/dropdown/listYacht.png';
import help from '../../../images/dropdown/help.png';

//dropdown logos when the user is authenticated
import dashboard from '../../../images/dropdown/dashboard.png';
import messages from '../../../images/dropdown/messages.png';
import notifications from '../../../images/dropdown/notifications.png';
import accountSettings from '../../../images/dropdown/accountSettings.png';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  state = {
    loggedIn: null,
    showDropDown: false,
    active: false,
  };
  componentDidMount = () => {
    window.addEventListener('scroll', this.onScroll);
    let token = sessionStorage.getItem('loginToken');
    if (token != null) {
      this.state.loggedIn = true;
      this.setState({ loggedIn: true });
    }
  };
  onScroll = () => {
    if (window.scrollY >= 50) {
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  };
  onDropDownClick = () => {
    this.setState({ showDropDown: true });
  };
  handler=(e)=>{
    e.preventDefault()
    window.location.reload(true);
    sessionStorage.clear();
  }
  render() {
    const { loggedIn, showDropDown, active } = this.state;
    const { onClick, userDetails } = this.props;
    const dropdownData1 = [
      {
        logo: loginout,
        label: 'Log in',
        onClick: () => {
          onClick('login');
          this.setState({ showDropDown: false });
        },
      },
      {
        logo: signupLogo,
        label: 'Create an Account',
        onClick: () => {
          onClick('signup');
          this.setState({ showDropDown: false });
        },
      },
      { logo: listYacht, label: 'New Listing' },
      { logo: help, label: 'Help', link: '/helpcenter' },
    ];
    
    const dropdownData2 = [
      {
        logo: dashboard,
        label: 'Dashboard',
        link: '/dashboard',
      },
      { logo: messages, label: 'Messages', link: '/messages' },
      { logo: notifications, label: 'Notifications', link: '/' },
      {
        logo: accountSettings,
        label: 'Account Settings',
        link: '/accountSetting',
      },
      { logo: listYacht, label: 'New Listing', link: '/' },
      { logo: help, label: 'Help', link: '/helpcenter' },
      { logo: loginout, label: 'Log out', link: '/', handlerClick:this.handler },
    ];
    // document.getElementById("logout-btn").addEventListener("click",function(event){
    //   event.preventDefault()
    //   console.log("you have clicked me")
    //   })
    return (
      <div
        className='headerContainer f-jCenter-aCenter-fRow'
        style={active ? { background: '#ffff', transition: '0.3s' } : null}
      >
        <div className='headerWrapper'>
          <div className='logoContainer f-jFlexStart-aCenter-fRow'>
              <img
                src={logo1} alt='' style={{ width: '30px', height: '100%' }}
              />
            <span style={{ color: "#00C2CB" , }}>Waterpin</span>
          </div>
          <div className='navContainer f-jSpaceAround-aCenter-fRow'>
            <li className='headerNavItem'>
              <div>
                <Link to='/overnighstay'>
                  <p className={active ? 'activeLi' : 'nonActiveLi'}>
                    <strong>Overnight Stays</strong>
                  </p>
                </Link>
              </div>
            </li>
            <li className='headerNavItem'>
              <Link to='/DayTripOverNightStay'>
                {' '}
                <p className={active ? 'activeLi' : 'nonActiveLi'}>
                  <strong>Day Trips</strong>
                </p>
              </Link>
            </li>
            <li className='headerNavItem'>
              <Link to='/waterAtivityExpand'>
                <p className={active ? 'activeLi' : 'nonActiveLi'}>
                  <strong>Water Activities</strong>
                </p>
              </Link>
            </li>
          </div>
          <div className='utilsContainer f-jFlexEnd-aCenter-fRow'>
            <div
              onClick={this.onDropDownClick}
              style={{
                cursor: 'pointer',
              }}
            >
                <img src={headerOptions} alt='' />
            </div>
            {showDropDown ? (
              <OutsideClickHandler
                onOutsideClick={() => {
                  this.setState({ showDropDown: false });
                }}
              >
                <Dropdown
                  dropdownData={loggedIn ? dropdownData2 : dropdownData1}
                />
                
              </OutsideClickHandler>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ authReducer }) => {
  return {
    userDetails: authReducer.userDetails,
  };
};
export default connect(mapStateToProps)(Header);
