import React from 'react';
import { Typography } from 'antd';
import TodoItem from '../../component/TodoItem';
import WeatherReport from '../../component/WeatherReport';
import { StyledHomePageWrapper } from '../Home/style';
import { todoData } from './todayItem.data';
import Scrollbars from 'react-custom-scrollbars-2';
import CreateTodo from '../../component/TodoItem/CreateTodo';
import NoDataState from '../../component/UI/NoDataState';

import no_data_img from '../../assets/no_data.svg';
import no_activity_img from '../../assets/no_activity.svg';

const { Title } = Typography;

const Home = () => {
  return (
    <StyledHomePageWrapper>
      <WeatherReport />
      <div className='main-content-wrapper'>
        <div className='main-content'>
          <div className='content-left-wrapper'>
            <Title className='today-todo-title'>My Today</Title>
            <Scrollbars autoHeightMax='100%' autoHide>
              <div className='today-todo'>
                <div className='today-todo-item-list'>
                  <NoDataState
                    message="Add today's items to be done 🚀"
                    img={no_data_img}
                  />
                  {/* {todoData.map(({ id, description, isCompleted }) => (
                    <TodoItem
                      description={description}
                      key={id}
                      isCompleted={isCompleted}
                    />
                  ))}
                  */}
                </div>
                <div className='today-todo-create'>
                  <CreateTodo className='todo-create-fields' />
                </div>
              </div>
            </Scrollbars>
          </div>
          <div className='recent-activities'>
            <Title className='recent-activity-title'>Recent Activities</Title>
            <Scrollbars autoHide style={{ height: 'calc(100% - 60px)' }}>
              <NoDataState message='No activity yet 🎧' img={no_activity_img} />
            </Scrollbars>
          </div>
        </div>
      </div>
    </StyledHomePageWrapper>
  );
};

export default Home;
