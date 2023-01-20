import React from 'react';
import Modal from 'react-modal';
import './modalauth.css';
export default function ModalAuth({
  auth,
  handleChangeClose,
  handleChangeLeft,
  handleChangeRight,
  icon,
  email,
}) {
  return (
    <Modal isOpen={true}>
      <div className='col-md-9 mx-auto mt-5'>
        <div className='modal-Auth-container'>
          <div className='header'>
            <div
              className='float-left close-btn'
              onClick={() => {
                handleChangeClose();
              }}
            >
              <img src={icon} />
            </div>
            <div className='head'>{auth.header}</div>
          </div>
          <div className='body'>
            {auth.body} {email ? <span>{email}</span> : null}
          </div>
          <div className='btn-container'>
            <div>
              <button
                className={auth.left_btn.style}
                onClick={() => {
                  handleChangeLeft();
                }}
              >
                {auth.left_btn.text}
              </button>
              {auth.right_btn ? (
                <button
                  className={auth.right_btn.style}
                  onClick={() => {
                    handleChangeRight();
                  }}
                >
                  {auth.right_btn.text}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
