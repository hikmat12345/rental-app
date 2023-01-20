import React from 'react'
import Header from '../../reusableComponents/layout/header/header1'
import Sidebar from '../../reusableComponents/layout/sidebar/sidebar'
import Footer1 from '../../reusableComponents/layout/footer/footer1'
class Dashboard extends React.Component{
    render(){
        return(
            <div className='dashboardContainer'>
                <div className='dashboardW'>
                    <div className='dSContainer'>
                        <Sidebar type='renter'/>
                    </div>
                    <div className='headerAndContent'>
                        <Header/>
                        <div style={{height:'100%',width:'100%',background:'#e6e6e6'}}>

                        </div>
                    </div>
                </div>
                <Footer1/>
            </div>
        )
    }
}
export default Dashboard