import Switch from 'react-ios-switch';
import React, { useState } from 'react';
export default function IOSSwitch(props) {
  const [checked, setChecked] = useState(true);
  return (
    <Switch
      checked={props.value}
      className='switch'
      onChange={() => props.onChange(!props.value)}
      onColor={props.onColor ? props.onColor : 'rgb(76, 217, 100)'}
      pendingOffColor={
        props.pendingOffColor ? props.pendingOffColor : '#F5F5F7'
      }
      pendingOnColor={props.pendingOnColor ? props.pendingOnColor : '#F5F5F7'}
      handleColor={props.value ? '#00C2CB' : '#E0E0E0'}
      offColor={props.offColor ? props.offColor : 'white'}
      style={{ border: props.border ? props.border : '1px solid #E0E0E0' }}
    />
  );
}
