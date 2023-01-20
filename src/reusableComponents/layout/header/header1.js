import React from 'react'
class Header1 extends React.Component{
    render(){
        return(
            <div className='header1Container f-jCenter-aCenter-fRow'>
                <div className='mainHeaderW f-jSpaceBetween-aCenter-fRow'>
                    <h2 className='h1'>Dashboard</h2>
                    <div className='userW f-jCenter-aEnd-fColumn'>
                        <h2>Welcome back Jack</h2>
                        <div>It pays to be loyal</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header1