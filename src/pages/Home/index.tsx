import React from 'react';
import { Typography } from 'antd';
import TodoItem from '../../component/TodoItem';
import WeatherReport from '../../component/WeatherReport';
import { StyledHomePageWrapper } from '../Home/style';
import Scrollbars from 'react-custom-scrollbars-2';
import CreateTodo from '../../component/TodoItem/CreateTodo';
import NoDataState from '../../component/UI/NoDataState';

import no_data_img from '../../assets/no_data.svg';
import no_activity_img from '../../assets/no_activity.svg';
import { useTodoCollectionContext } from '../../Context/TodoCollectionContext';

const { Title } = Typography;

const Home = () => {
  const { todoCollectionData } = useTodoCollectionContext();

  return (
    <StyledHomePageWrapper>
      <WeatherReport />
      <div className='main-content-wrapper'>
        <div className='main-content'>
          <div className='content-left-wrapper'>
            <Title className='today-todo-title'>My Today</Title>
            <div className='today-todo'>
              <div className='today-todo-item-list' id='todo-list-scroll'>
                {todoCollectionData.length > 0 ? (
                  todoCollectionData.map(
                    ({ id, description, isCompleted, createdOn, duration }) => (
                      <TodoItem
                        key={id}
                        description={description}
                        isCompleted={isCompleted}
                        createdOn={createdOn}
                        duration={duration}
                      />
                    )
                  )
                ) : (
                  <NoDataState
                    message="Add today's items to be done 🚀"
                    img={no_data_img}
                  />
                )}
              </div>
              <div className='today-todo-create'>
                <CreateTodo
                  className='todo-create-fields'
                  viewContainerID='todo-list-scroll'
                />
              </div>
            </div>
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
