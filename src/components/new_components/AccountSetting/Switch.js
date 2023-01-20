import Switch from 'react-ios-switch';
import React, { useState } from 'react';
export default function IOSSwitch(props) {
  const [checked, setChecked] = useState(true);
  return (
    <Switch
      checked={props.value}
      className='switch'
      onChange={() => props.onChange(!props.value)}
      onColor='rgb(76, 217, 100)'
      pendingOffColor='#F5F5F7'
      pendingOnColor='#F5F5F7'
      handleColor={props.value ? '#00C2CB' : '#E0E0E0'}
      offColor='white'
      style={{ border: '1px solid #E0E0E0' }}
    />
  );
}
