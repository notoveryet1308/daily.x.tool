import { useHistory } from 'react-router-dom';

import { ArrowLeft } from 'phosphor-react';
import { StyledBack } from './style';

const Back = () => {
  const history = useHistory();
  return (
    <StyledBack onClick={() => history.goBack()}>
      <ArrowLeft className='ph-arrow-left'/>
    </StyledBack>
  );
};

export default Back;
