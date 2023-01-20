import React from 'react';
import './pointsreward.css';
import Modal from 'react-modal';

export default function RewardModal({
  setRankUp,
  level,
  levelIndex,
  reward_modal,
  rankUp,
}) {
  return (
    <>
      <Modal isOpen={rankUp}>
        <div className='col-md-5 col-sm-9 mx-auto mt-5'>
          <div className='modal-reward-container'>
            <div className='head'>Congratulations!</div>
            <div className='body'>
              you are now a {level[levelIndex].title} member
            </div>
            <div className='btn-container'>
              <button
                className={`btn btn-${level[levelIndex].title}`}
                onClick={() => setRankUp(false)}
              >
                Review Benifits
              </button>
              <img src={reward_modal} className='btn-container' />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
