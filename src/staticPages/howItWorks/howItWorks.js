import React from 'react';

import Header from '../../reusableComponents/layout/header/header';
import Signup from '../../components/auth/signup';
import Login from '../../components/auth/login';
import IconCard from '../../reusableComponents/iconCards/iconCards';
import scoringSystem from "../../images/howitworks/scoringSystem.svg"
import Skeleton from '../../reusableComponents/skeletons/skeleton';
import ImageCard from '../../reusableComponents/imageCards/imageCards';
import LifeLine from '../../reusableComponents/lifeLine/lifeLine';
import FAQ from '../../reusableComponents/faqs/faqs';
import Footer from '../../reusableComponents/layout/footer/footer'
import Footer1 from '../../reusableComponents/layout/footer/footer1'

import searchIcon from '../../images/howitworks/search.png';
import connectIcon from '../../images/howitworks/connect.png';
import travelIcon from '../../images/howitworks/travel.png';
import dummy from '../../images/howitworks/dummy.jpg'
import image1 from '../../images/homepage/1.png'
import image2 from '../../images/homepage/2.png'
import image3 from '../../images/homepage/3.png'
import image4 from '../../images/homepage/4.png'

import jsonData from '../../data.json'

import './howItWorks.css';

class HowItWorks extends React.Component {
    state = {
        loginWindow: false,
        signupWindow: false,
    };
    onClickHandler = (params) => {
        if (params === "login") {
            this.setState({ loginWindow: true, signupWindow: false });
        } else if (params === "signup") {
            this.setState({ loginWindow: false, signupWindow: true });
        }
    };

    onCloseClick = (params) => {
        if (params === "login") {
            this.setState({ loginWindow: false });
        } else if (params === "signup") {
            this.setState({ signupWindow: false });
        }
    };

    render() {
        const { loginWindow, signupWindow } = this.state;

        return (
            <React.Fragment>
                <Header
                    onClick={this.onClickHandler}
                    onCloseClick={this.onCloseClick}
                />
                <div className="hiwContainer">
                    <div className="coverImageWrapper f-jCenter-aCenter-fColumn">
                        {loginWindow ? (
                            <Login
                                onCloseClick={this.onCloseClick}
                                onClickHandler={this.onClickHandler}
                            />
                        ) : null}
                        {signupWindow ? (
                            <Signup
                                onCloseClick={this.onCloseClick}
                                onClickHandler={this.onClickHandler}
                            />
                        ) : null}
                    </div>
                    <div className="grid3 deskPadding">
                        <IconCard icon={searchIcon} title={`Search`} desc={`Browse through our vast and constant growing fleet of boats, yachts, and water activities.`} />
                        <IconCard icon={connectIcon} title={`Connect`} desc={`Connect with owners to reserve a boat, yacht, or water activity for your date and time.`} />
                        <IconCard icon={travelIcon} title={`Travel`} desc={`Whether you’re celebrating or just looking to get away, experience the excitement and tranquility of a trip on water.`} />
                    </div>
                    <div className="secMargin deskPadding scoringSVG rdsShadow">
                        <img src={scoringSystem} alt="" />
                    </div>
                    <section className='sections f-jCenter-aCenter-fRow secMargin deskPadding'>
                        <div className='section1W sectionsW f-jCenter-aCenter-fColumn' style={{ alignItems: 'center' }}>
                            <h2 className="hMargin fz-36 darkGrey">What Makes Us Different?</h2>
                            <span className="fz-18">We go beyond your expectations</span>
                            <div className='grid1Container'>
                                <div className='f-jSpaceBetween-aCenter-fRow' style={{ marginTop: '5%' }}>
                                    <Skeleton source={image1} heading='We Go The Extra Mile' content={jsonData.mainPage["1p"]} />
                                    <Skeleton source={image2} heading='Secure & Worry Free' content={jsonData.mainPage["2p"]} />
                                </div>
                                <div className='f-jSpaceBetween-aCenter-fRow' style={{ marginTop: '5%' }}>
                                    <Skeleton source={image3} heading='Experienced Team' content={jsonData.mainPage["3p"]} />
                                    <Skeleton source={image4} heading='Focused on Safety' content={jsonData.mainPage["4p"]} />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="secMargin deskPadding">
                        <h3 className="hMargin centered fz-36">Benefits</h3>
                        <div className="grid3">
                            <ImageCard image={dummy} title={`Get Exclusive Access`} desc={`Your ranking shows how you are as a guest. Certain boats, yachts, or water activities may offer exclusive access to renters with higher rankings.`}/>
                            <ImageCard image={dummy} title={`Attract More Attention`} desc={`The higher your ranking the more owners will want you to book with them.`}/>
                            <ImageCard image={dummy} title={`Spend Less & Get More`} desc={`Owners may offer lower rates, discounts or premium amenities based on their level of your ranking.`}/>
                        </div>
                    </section>
                    <section className="secMargin">
                        <LifeLine />
                    </section>
                    <section className="secMargin"  style={{marginBottom: '5%'}}>
                    <h3 className="hMargin centered fz-36">Most Common FAQs</h3>
                        <FAQ faqs={jsonData.faqs}/>
                    </section>
                    <Footer1/>
                    <Footer/>
                </div>
            </React.Fragment>
        );
    }
}

export default HowItWorks;
