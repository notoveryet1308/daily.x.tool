import React from 'react';
import WeatherReport from '../../src/component/WeatherReport';
import { StyledHomePageWrapper } from '../Home/style';

const Home = () => {
  return (
    <StyledHomePageWrapper>
      <WeatherReport />
      <div className="main-content-wrapper">
        <div className="main-content">
          <div className="today-todo"></div>
          <div className="recent-activities"></div>
        </div>
      </div>
    </StyledHomePageWrapper>
  );
};

export default Home;
