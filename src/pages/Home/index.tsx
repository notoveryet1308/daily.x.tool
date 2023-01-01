import { Typography } from "antd";

import WeatherReport from "../../component/WeatherReport";
import { StyledHomePageWrapper } from "../Home/style";
import Scrollbars from "react-custom-scrollbars-2";
import { CreateTodo } from "../../component/TodoItem/TodoAction";
import NoDataState from "../../component/UI/NoDataState";

import no_activity_img from "../../assets/no_activity.svg";
import TodoDisplayList from "./TodoDisplayList";
import { useGetTodoData } from "./queryHooks";

const { Title } = Typography;

const Home = () => {
  const { userLogged, allTodoQuery, todoCollectionData } = useGetTodoData();


  return (
    <StyledHomePageWrapper>
      <WeatherReport />
      <div className="main-content-wrapper">
        <div className="main-content">
          <div className="content-left-wrapper">
            <Title className="today-todo-title">My Today</Title>
            <div className="today-todo">
              <div className="today-todo-item-list" id="todo-list-scroll">
                <TodoDisplayList
                  data={
                    userLogged
                      ? allTodoQuery.data?.getTodo || []
                      : todoCollectionData
                  }
                  isLoading={userLogged ? allTodoQuery.loading : false}
                />

                {/* <TodoDisplayList data={todoCollectionData} /> */}
              </div>
              <div className="today-todo-create">
                <CreateTodo
                // className='todo-create-fields'
                // viewContainerID='todo-list-scroll'
                />
              </div>
            </div>
          </div>
          <div className="recent-activities">
            <Title className="recent-activity-title">Recent Activities</Title>
            <Scrollbars autoHide style={{ height: "calc(100% - 60px)" }}>
              <NoDataState message="No activity yet 🎧" img={no_activity_img} />
            </Scrollbars>
          </div>
        </div>
      </div>
    </StyledHomePageWrapper>
  );
};

export default Home;
