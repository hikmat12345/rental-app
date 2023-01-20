import React, { useState } from 'react';

import Modal from 'react-modal';
import PointsRewardCard from './components/PointRewardCard';
import RewardModal from './components/RewardModal';
import Point_System_Start from '../assets/Point_System_Start.png';
import Point_System_Bronze from '../assets/Point_System_Bronze.png';
import Point_System_Silver from '../assets/Point_System_Silver.png';
import Point_System_Gold from '../assets/Point_System_Gold.png';
import Point_System_Platinum from '../assets/Point_System_Platinum.png';
import start from '../assets/bronze_dir.png';
import bronze from '../assets/bronze_dir.png';
import silver from '../assets/silver_dir.png';
import gold from '../assets/gold_dir.png';
import platinum from '../assets/platinum_dir.png';

import reward_check from '../assets/reward_check.png';
import pink_uncheck from '../assets/pink_uncheck.png';
import yellow_uncheck from '../assets/yellow_uncheck.png';
import blue_uncheck from '../assets/blue_uncheck.png';
import reward_modal from '../assets/reward_modal.png';

export default function PointsReward() {
  const [rankUp, setRankUp] = useState(false);
  const [points, setPoints] = useState(200);
  const [levelImage, setLevelImage] = useState([
    Point_System_Start,
    Point_System_Bronze,
    Point_System_Silver,
    Point_System_Gold,
    Point_System_Platinum,
  ]);
  const [level, setLevel] = useState([
    {
      title: 'start',
      image: start,
      point: 0,
      pointList: [
        {
          point: 'Complete your profile:',
          icon: pink_uncheck,
          value: '10',
          total: '10',
        },
        {
          point: 'Verify your profile:',
          icon: yellow_uncheck,
          value: '10',
          total: '20',
        },
        {
          point: '<span>(1/5)</span> Invite 5 Friends:',
          icon: yellow_uncheck,
          value: '75',
          total: '95',
        },
        {
          point: '<span>(0/1)</span> Complete a Trip or Booking:',
          icon: pink_uncheck,
          value: '25',
          total: '120',
        },
        {
          point: '<span>(0/1)</span> Leave a Review:',
          icon: pink_uncheck,
          value: '15',
          total: '135',
        },
        {
          point: '<span>(0/1)</span> Get A 5 Star Review:',
          icon: pink_uncheck,
          value: '15',
          total: '150',
        },
      ],
    },
    {
      title: 'bronze',
      image: bronze,
      point: 150,
      pointList: [
        {
          point: '<span>(2/5)</span> Invite 5 Friends:',
          icon: blue_uncheck,
          value: '75',
          total: '225',
        },
        {
          point: '<span>(2/3)</span> Complete a Trip or Booking:',
          icon: yellow_uncheck,
          value: '75',
          total: '300',
        },
        {
          point: '<span>(0/1)</span> Leave a Review:',
          icon: pink_uncheck,
          value: '30',
          total: '330',
        },
        ,
        {
          point: '<span>(0/1)</span> Get A 5 Star Review:',
          icon: pink_uncheck,
          value: '30',
          total: '360',
        },
      ],
    },
    {
      title: 'silver',
      image: silver,
      point: 350,
      pointList: [
        {
          point: '<span>(3/3)</span> Invite 3 Friends:',
          icon: yellow_uncheck,
          value: '45',
          total: '405',
        },
        {
          point: '<span>(0/7)</span> Complete a Trip or Booking:',
          icon: pink_uncheck,
          value: '175',
          total: '580',
        },
        {
          point: '<span>(0/7)</span> Leave a Review:',
          icon: pink_uncheck,
          value: '105',
          total: '685',
        },
        {
          point: '<span>(0/5)</span> Get A 5 Star Review:',
          icon: pink_uncheck,
          value: '75',
          total: '760',
        },
      ],
    },
    {
      title: 'gold',
      image: gold,
      point: 750,
      pointList: [
        {
          point: '<span>(0/3)</span> Invite 3 Friends:',
          icon: pink_uncheck,
          value: '45',
          total: '805',
        },
        {
          point: '<span>(0/15)</span> Complete a Trip or Booking:',
          icon: pink_uncheck,
          value: '375',
          total: '1180',
        },
        {
          point: '<span>(0/15)</span> Leave a Review:',
          icon: pink_uncheck,
          value: '225',
          total: '1405',
        },
        {
          point: '<span>(0/7)</span> Get A 5 Star Review:',
          icon: pink_uncheck,
          value: '105',
          total: '1510',
        },
      ],
    },
    {
      title: 'platinum',
      image: platinum,
      point: 1510,
      pointList: [],
    },
  ]);

  const [levelIndex, setLevelIndex] = useState(0);

  return (
    <>
      <PointsRewardCard
        level={level}
        setRankUp={setRankUp}
        points={points}
        levelImage={levelImage}
        levelIndex={levelIndex}
        setLevelIndex={setLevelIndex}
      />

      <RewardModal
        setRankUp={setRankUp}
        level={level}
        levelIndex={levelIndex}
        reward_modal={reward_modal}
        rankUp={rankUp}
      />
    </>
  );
}
