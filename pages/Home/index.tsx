import React from 'react';
import { StyledHomePageWrapper } from '../Home/style';

const Home = () => {
  return (
    <StyledHomePageWrapper>
      <div className="weather-info"></div>
      <div className="main-content-wrapper">
        <div className="main-content">
          <div className="today-todo">Today todo</div>
          <div className="recent-activities">Recent activities</div>
        </div>
      </div>
    </StyledHomePageWrapper>
  );
};

export default Home;
