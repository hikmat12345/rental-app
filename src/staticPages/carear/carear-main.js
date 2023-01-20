import React from 'react'
import Footer from '../../reusableComponents/layout/footer/footer'
import Footer1 from '../../reusableComponents/layout/footer/footer1'
import Header from '../../reusableComponents/layout/header/header';
import {Carear_temp, Carear_Form} from './carear-temp'
import CarearSideImg from "./career-path.png"
function Carear_main() {
    return (
        <div>
          <Header/>
             <div className="header-bottom">
                <Carear_temp yellowText="Communication" greenText="Innovation" purpleText="Growth"
                  paragraphText="At Waterpin, we’re building a world on water. From the unforgettable yacht proposal, to the surprise jetski birthday, our mission is to connect people."
                    carearImg={CarearSideImg}   />
                    <br/> <br/> <br/> <br/> <br/>

                       <Carear_Form title=" Who are you and what’s your mission?" />           
              </div>
              <Footer1/>
              <Footer/>
        </div>
    )
}

export default Carear_main
