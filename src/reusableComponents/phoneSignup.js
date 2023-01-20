import React from 'react';
import DynamicInputGroup from './inputs/dynamicInputGroup';
import InputField from '../reusableComponents/inputs/inputField';
class PhoneSignup extends React.Component {
  render() {
    const { onInputChange, type } = this.props;
    return (
      <React.Fragment>
        <DynamicInputGroup onInputChange={onInputChange} type={'phoneSignup'} />

        {/* {type === 'phoneSignup' ? (
          <InputField
            onInputChange={onInputChange}
            type='password'
            name='password'
            placeholder='Password'
            paddingTop='40px'
          />
        ) : null} */}
      </React.Fragment>
    );
  }
}
export default PhoneSignup;
