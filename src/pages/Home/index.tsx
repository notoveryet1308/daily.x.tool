import { Typography } from "antd";

import WeatherReport from "../../component/WeatherReport";
import { StyledHomePageWrapper } from "../Home/style";
import { CreateTodo } from "../../component/TodoItem/TodoAction";
import NoDataState from "../../component/UI/NoDataState";

import no_activity_img from "../../assets/no_activity.svg";
import TodoDisplayList from "./TodoDisplayList";
import { useGetTodoData } from "./queryHooks";
import { shouldShowInToday } from "../../component/TodoItem/utils";

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
                      ? allTodoQuery.data?.getTodo.filter((data) =>
                          shouldShowInToday({ ...data })
                        ) || []
                      : todoCollectionData.filter((data) =>
                          shouldShowInToday({ ...data })
                        )
                  }
                  isLoading={userLogged ? allTodoQuery.loading : false}
                />
              </div>
              <div className="today-todo-create">
                <CreateTodo
                  className="todo-create-fields"
                  viewContainerID="todo-list-scroll"
                />
              </div>
            </div>
          </div>
          <div className="recent-activities">
            <Title className="recent-activity-title">Recent Activities</Title>
            <div className="recent-activities-content">
              <NoDataState message="No activity yet 🎧" img={no_activity_img} />
            </div>
          </div>
        </div>
      </div>
    </StyledHomePageWrapper>
  );
};

export default Home;
