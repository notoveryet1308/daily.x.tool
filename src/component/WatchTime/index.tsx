import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';

import { StyledWatchTime } from './style';
import { prefixCharacter } from '../WatchTime/utils';

const { Title } = Typography;

const WatchTime = () => {
  const date = new Date();
  const [timeData, setTimeData] = useState<{
    hours: string;
    mins: string;
    secs: string;
  }>({
    hours: prefixCharacter({ data: date.getHours() }),
    mins: prefixCharacter({ data: date.getMinutes() }),
    secs: prefixCharacter({ data: date.getSeconds() }),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTimeData({
        hours: prefixCharacter({ data: date.getHours() }),
        mins: prefixCharacter({ data: date.getMinutes() }),
        secs: prefixCharacter({ data: date.getSeconds() }),
      });
    }, 1000);

    () => clearInterval(interval);
  }, [timeData.secs]);

  return (
    <StyledWatchTime>
      <div className="hours time-data" title="hours">
        <Title className="time-value">{timeData.hours}</Title>
        <span className="time-info">hours</span>
      </div>
      <div className="hours time-data" title="Minutes">
        <Title className="time-value">{timeData.mins}</Title>
        <span className="time-info">mins</span>
      </div>
      <div className="hours time-data" title="seconds">
        <Title className="time-value">{timeData.secs}</Title>
        <span className="time-info">secs</span>
      </div>
    </StyledWatchTime>
  );
};

export default WatchTime;
