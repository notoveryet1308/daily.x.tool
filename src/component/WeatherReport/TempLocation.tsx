import React from 'react';
import { Typography } from 'antd';
import { NavigationArrow } from 'phosphor-react';

import { kelvinConverter } from '../WeatherReport/constants';
import { StyledTempLocation } from '../WeatherReport/style';

const { Title } = Typography;

const TempLocation = ({
  temperature,
  location = 'Korha, Katihar',
}: {
  temperature?: number;
  location?: string;
}) => {
  const tempInCelcius =
    temperature && Math.floor(temperature - kelvinConverter);

  return (
    <StyledTempLocation>
      <div className="temp-data">
        <Title level={2} className="temp-value">
          {tempInCelcius || '--'}
          <sup>°</sup>C
        </Title>
      </div>
      <div className="location-data">
        <NavigationArrow className="location-icon" />
        <Title className="location-value">{location}</Title>
      </div>
    </StyledTempLocation>
  );
};

export default TempLocation;
