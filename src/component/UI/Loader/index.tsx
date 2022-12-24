import { Spin } from 'antd';
import { StyledLoader } from './style';

const Loader = () => {
  return (
    <StyledLoader>
      <Spin />
    </StyledLoader>
  );
};

export default Loader;
