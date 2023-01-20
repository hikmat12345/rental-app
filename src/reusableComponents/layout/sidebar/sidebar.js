import React from 'react';
import logo from '../../../images/sidebar/1.png';
import NavigationBlock from './navigationBlock';
import messages from '../../../images/sidebar/messages.png';
import settings from '../../../images/sidebar/settings.png';
import profile from '../../../images/sidebar/profile.png';
import trips from '../../../images/sidebar/trips.png';
import favorites from '../../../images/sidebar/favorites.png';
import contact from '../../../images/sidebar/contact.png';
import support from '../../../images/sidebar/support.png';
import logout from '../../../images/sidebar/logout.png';
class Sidebar extends React.Component {
  render() {
    const { type } = this.props;
    const itemsArray1 =
      type === 'renter'
        ? [
            { title: 'Messages', icon: messages },
            { title: 'Settings', icon: settings },
            { title: 'Profile', icon: profile },
          ]
        : [];
    const itemsArray2 =
      type === 'renter'
        ? [
            { title: 'Trips', icon: trips },
            { title: 'My Favorites', icon: favorites },
          ]
        : [];
    const itemsArray3 =
      type === 'renter'
        ? [
            { title: 'Contact Us', icon: contact },
            { title: 'Help', icon: support },
          ]
        : [];
    return (
      <div className='sidebarContainer'>
        <div className='logoContainer f-jCenter-aCenter-fRow'>
          <img src={logo} />
        </div>
        <div className='contentContainer'>
          <NavigationBlock itemsArray={itemsArray1} header='General' />
          <NavigationBlock
            itemsArray={itemsArray2}
            header={type === 'renter' ? 'Renter' : 'Owner'}
          />
          <NavigationBlock itemsArray={itemsArray3} header='Support' />
        </div>
        <div className='logoutContainer f-jFlexStart-aCenter-fRow'>
          <div className='logoutW boldFont'>
            <img src={logout} className='cImageStyle' />
            Logout
          </div>
        </div>
      </div>
    );
  }
}
export default Sidebar;
