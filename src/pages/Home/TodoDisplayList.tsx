import NoDataState from '../../component/UI/NoDataState';
import TodoItem from '../../component/TodoItem';
import no_data_img from '../../assets/no_data.svg';
import { TodoCollectionType } from '../../Context/types';
import Loader from '../../component/UI/Loader';

const TodoDisplayList = ({
  data,
  isLoading,
}: {
  data: TodoCollectionType[] | [];
  isLoading: boolean;
}) => {


  if (isLoading) {
    return <Loader />;
  }

  if (!data.length) {
    return (
      <NoDataState
        message="Add today's items to be done 🚀"
        img={no_data_img}
      />
    );
  }
  
  return (
    <>
      {data.map(({ id, description, isCompleted, createdOn, duration }) => (
        <TodoItem
          id={id}
          key={id}
          description={description}
          isCompleted={isCompleted}
          createdOn={createdOn}
          duration={duration}
        />
      ))}
    </>
  );
};

export default TodoDisplayList;
