import React from 'react'
class InputField extends React.Component{
    render(){
        const {type,onInputChange,placeholder,paddingTop,name}=this.props
        return(
            <div style={{paddingTop}}>
                <input type={type} onChange={onInputChange} placeholder={placeholder} name={name} className='iF'/>
            </div>
            
        )
    }
}
export default InputField