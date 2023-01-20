import React from 'react'
import image2 from '../../../images/footer/2.png'
import image3 from '../../../images/footer/3.png'
class Footer extends React.Component{
    render(){
        return(
            <div className='footerContainer f-jCenter-aCenter-fRow'>
                <div className='footerW f-jSpaceBetween-aCenter-fRow'>
                    <div className='copyrightsContainer'>
                        <div>© 2020 <span>Waterpin</span> Inc. All rights reserved</div>
                    </div>
                    <div className='lIContainer f-jSpaceBetween-aCenter-fRow'>
                        <li>Privacy</li>
                        <li>Terms</li>
                    </div>
                    <div className='lanCur f-jSpaceBetween-aCenter-fRow'>
                        <div className='img2'>
                            <img src={image2} style={{width:'100%'}}/>
                        </div>
                        <div className='img3'>
                            <img src={image3} style={{width:'100%'}}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer