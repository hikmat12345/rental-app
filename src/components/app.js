import dasbhoardMain from "./new_components/dashboard/dasbhoardMain";
import setting from "./new_components/dashboard/setting";
import Header from "./new_components/dashboard/Header";
import Sidebar from "./new_components/dashboard/sidebar";
import DashboardNotification from "./new_components/dashboard/notificationPage";
import EmptyNotification from "./new_components/dashboard/notificationEmpty";
import MainNotifiction from "./new_components/dashboard/notificationMain";
import ConfirmReservation from "./new_components/dashboard/comfirmReservation";
import reuseableDropdown from "./new_components/dashboard/reuseableDropdown";
import PaginationExample from "./new_components/overnighStay/overNightStay";
import SinglePost from "./new_components/overnighStay/postONStay";
import OverNightStay from "./new_components/overnighStay/overNightStay";
import bookingDropdown from "./new_components/dropdowns/bookingDropdown";
import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Dashboard from "./dashboard";
import { connect } from "react-redux";
import Home from "./home";
import { tokenVerifier } from "../redux/actions/auth";
import Test from "./dashboard/test";
import { compose } from "redux";
import DayTripOverNightStay from "./new_components/overnighStay/DayTripoverNightStay";
import Dashboards from "./dashboard";
import eachYacht from "./new_components/overnighStay/eachYacht";
import HowItWorks from "../staticPages/howItWorks/howItWorks";
import Single_activities from "./new_components/overnighStay/single-activities";
import My_Favorites from "./new_components/overnighStay/My-Favorites";
import PrivateProfile from "./new_components/renterPrivateProfile/PrivateProfile";
import PublicProfile from "./new_components/renterPrivateProfile/PublicProfile";
import Destinations from "./new_components/Destinations/Destinations";
import MyTrips from "./new_components/mytrips/mytrips";
import AccountSetting from "./new_components/AccountSetting/AccountSetting";
import HelpCenter from "./new_components/HelpCenter/HelpCenter";
import Water_ativity from "./new_components/water-activties/water-ativity";
import Water_ativity_expand from "./new_components/water-activties-expand/water-ativity-expand";
import Carear_main from "../staticPages/carear/carear-main";
import Footer1 from "../reusableComponents/layout/footer/footer1";
import Footer from "../reusableComponents/layout/footer/footer";
import Blog_main from "./new_components/blog/blog-main";
import EachYacht from "./new_components/overnighStay/eachYacht";
import Calendar from "./new_components/overnighStay/calender";
import Booking from "./new_components/Booking/booking";
import Booking_confirm from "./new_components/Booking/booking-confirm";
import EachYacthWActivity from "./new_components/overnighStay/EachYacthWActivity";
import MessageDashboard from "./new_components/dashboard/Messages/messageApp";
import Search from "./new_components/overnighStay/search";
import Reviews from "./new_components/dashboard/reviews";
class App extends React.Component {
  state = {
    loading: false,
  };
  componentDidMount = async () => {
    await window.gapi.load("client:auth2");
    await (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: `${process.env.REACT_APP_fbAppId}`,
        cookie: true,
        xfbml: true,
        version: "v9.0",
      });
    };
    const data = { token: localStorage.getItem("waterpin") };
    this.props.tokenVerifier(data).then(() => {
      this.setState({ loading: false });
    });
    if (!this.props.userDetails) {
      this.props.history.push("/");
    }
  };
  componentDidUpdate = (prevProps, prevState) => {
    const { userDetails, history } = this.props;
    const { loading } = this.state;
    if (prevState.loading !== loading) {
      if (userDetails) {
        history.push("/dashboard");
      } else {
        history.push("/");
      }
    } else if (prevProps.userDetails !== userDetails && !loading) {
      history.push("/dashboard");
    }
  };
  render() {
    const { userDetails, loading } = this.props;
    if (loading) {
      return <div>Loading</div>;
    }
    return (
      <div className="height100vhWidth100">
        <Switch>
          {userDetails && (
            <React.Fragment>
              {/* <Route component={Dashboard} exact path="/dashboard" /> */}
              <Route component={Test} exact path="/dashboard" />
            </React.Fragment>
          )}
          {!userDetails && (
            <React.Fragment>
              <Route component={Home} exact path="/" />
              <Route component={Test} exact path="/dashboard" /> 
              <Route exact path="/dashboard" component={dasbhoardMain} />
              <Route exact path="/dashboard/Message" component={setting} />
              <Route exact path="/accountSetting" component={AccountSetting} />
              <Route exact path="/helpcenter" component={HelpCenter} />
              <Route
                exact
                path="/Notification"
                component={DashboardNotification}
              />
              <Route
                exact
                path="/EmptyNotification"
                component={EmptyNotification}
              />
              <Route
                exact
                path="/MainNotifiction"
                component={MainNotifiction}
              />
              <Route exact path="/popup" component={ConfirmReservation} />
              <Route exact path="/dropdown" component={reuseableDropdown} />
              <Route exact path="/overnighstay" component={OverNightStay} />
              <Route
                exact
                path="/bookingDropdown"
                component={bookingDropdown}
              />
              <Route
                exact
                path="/DayTripOverNightStay"
                component={DayTripOverNightStay}
              />
              <Route exact path="/eachYacht/:type/:id" component={EachYacht} />
              <Route
                exact
                path="/waterActivity/:id"
                component={EachYacthWActivity}
              />
              <Route
                exact
                path="/singl_activities/:id"
                component={Single_activities}
              />
              <Route exact path="/howItWork" component={HowItWorks} />
              <Route exact path="/myfavorites" component={My_Favorites} />
              <Route exact path="/private-profile" component={PrivateProfile} />
              <Route exact path="/public-profile" component={PublicProfile} />
              <Route exact path="/destinations" component={Destinations} />
              <Route exact path="/mytrips" component={MyTrips} />
              <Route exact path="/waterAtivity" component={Water_ativity} />
              <Route exact path="/calendar" component={Calendar} />
              <Route exact path="/messages" component={MessageDashboard} />
              <Route
                exact
                path="/waterAtivityExpand"
                component={Water_ativity_expand}
              />
              <Route exact path="/career" component={Carear_main} />
              <Route exact path="/blog" component={Blog_main} />
              <Route exact path="/booking" component={Booking} />
              <Route exact path="/confirm" component={Booking_confirm} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/reviews" component={Reviews} />
            </React.Fragment>
          )}
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  // console.log(state)
  return {
    userDetails: state.authReducer.userDetails,
    tokenVerificationError: state.errorReducer.tokenVerificationError,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { tokenVerifier })
)(App);
