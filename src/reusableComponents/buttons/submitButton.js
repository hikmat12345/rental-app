import React from 'react'
class SubmitButton extends React.Component{
    render(){
        const {buttonText,customStyle}=this.props
        return(
            <div className='sBContainer' style={customStyle?customStyle:null}>
                <input type='submit' value={`${buttonText}`}/>
            </div>
        )
    }
}
export default SubmitButton