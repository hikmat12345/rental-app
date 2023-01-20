import React from 'react';
import './pointsreward.css';
import Modal from 'react-modal';
import Point_System_Start from './assets/Point_System_Start.png';
import Point_System_Bronze from './assets/Point_System_Bronze.png';
import Point_System_Silver from './assets/Point_System_Silver.png';
import Point_System_Gold from './assets/Point_System_Gold.png';
import Point_System_Platinum from './assets/Point_System_Platinum.png';
import start from './assets/bronze_dir.png';
import bronze from './assets/bronze_dir.png';
import silver from './assets/silver_dir.png';
import gold from './assets/gold_dir.png';
import platinum from './assets/platinum_dir.png';

import reward_check from './assets/reward_check.png';
import pink_uncheck from './assets/pink_uncheck.png';
import yellow_uncheck from './assets/yellow_uncheck.png';
import blue_uncheck from './assets/blue_uncheck.png';

export default function PointsRewardCard({
  level,
  setRankUp,
  points,
  levelImage,
  levelIndex,
  setLevelIndex,
}) {
  return (
    <>
      <div className='option-details reward-points'>
        <div className='point-reward-container'>
          <div className='header'>
            <div className='head'>Earn Points and Maximize Your Benefits!</div>
            <div className='reward-image'>
              <img src={levelImage[levelIndex]} />
            </div>
          </div>
        </div>
      </div>
      <br />
      {levelIndex < 4 ? (
        <div className='option-details reward-points'>
          <div className='point-reward-container'>
            <div className='header'>
              <div className='head'>
                <span className={level[levelIndex].title}>
                  {level[levelIndex].title}{' '}
                </span>
                <img src={level[levelIndex + 1].image} />{' '}
                <span className={level[levelIndex + 1].title}>
                  {level[levelIndex + 1].title}
                </span>{' '}
                : How To Level Up
              </div>
            </div>
            <div className='reward-list'>
              {level[levelIndex].pointList.map((point, i, arr) => (
                <div
                  className={
                    i === 0
                      ? 'option option-top'
                      : arr.length - 1 === i
                      ? 'option option-bottom'
                      : 'option'
                  }
                >
                  {' '}
                  <img
                    src={point.total <= points ? reward_check : point.icon}
                  />
                  <span>
                    <span
                      className={
                        point.total <= points
                          ? 'reward-check'
                          : 'reward-uncheck'
                      }
                      dangerouslySetInnerHTML={{ __html: point.point }}
                    ></span>
                    <span className='reward-right'>
                      <span>{point.value}</span>{' '}
                      <span className='reward-points'>Points</span>
                    </span>
                  </span>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'right' }}>
              <button
                className='rank-up-btn'
                onClick={() => {
                  if (points >= level[levelIndex + 1].point) {
                    setLevelIndex(levelIndex + 1);
                    setRankUp(true);
                  }
                }}
              >
                Rank Up!
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
