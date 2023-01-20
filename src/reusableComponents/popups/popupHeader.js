import React from 'react';
import CloseIcon from '../icons/closeIcon';
class PopupHeader extends React.Component {
  render() {
    const { params, headTitle, onCloseClick } = this.props;
    return (
      <div className='pHead'>
        <div className='pHeadCross'>
          <CloseIcon onCloseClick={onCloseClick} params={params} />
        </div>
        <div className='pHeadContent'>{headTitle}</div>
        <div className='pHeadCross'></div>
      </div>
    );
  }
}
export default PopupHeader;
