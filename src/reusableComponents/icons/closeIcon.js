import React from 'react';
import closeicon from '../../images/social/close_icon.png';
class CloseIcon extends React.Component {
  render() {
    const { params, onCloseClick } = this.props;
    return (
      <div className='closeIcon'>
        <img
          src={closeicon}
          onClick={() => {
            onCloseClick(params || null);
          }}
        />
      </div>
    );
  }
}
export default CloseIcon;
