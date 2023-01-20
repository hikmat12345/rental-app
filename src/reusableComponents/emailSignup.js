import React from 'react'
import DynamicInputGroup from './inputs/dynamicInputGroup'
import InputField from './inputs/inputField'
class EmailSignup extends React.Component{
    render(){
        const {onInputChange,type}=this.props
        return(
            <React.Fragment>
                <DynamicInputGroup onInputChange={onInputChange} type={'signupEmail'}/>
                <InputField onInputChange={onInputChange} type='email' name='email' placeholder='Email' paddingTop='40px'/>
                {type==='emailSignup'?
                    <InputField onInputChange={onInputChange} type='password' name='password' placeholder='Password' paddingTop='40px'/>
                :null}
            </React.Fragment>
        )
    }
}
export default EmailSignup