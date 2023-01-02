import { StyledDateBanner } from './style';

const DateBanner = () => {
  const date = new Date();
  const dd = date.getDate();
  const mm = new Date(0, date.getMonth(), 1).toLocaleDateString('en', {
    month: 'short',
  });
  const yy = date.getFullYear();

  return (
    <StyledDateBanner>
      {dd}&nbsp;&nbsp;{mm}&nbsp;&nbsp;{yy}
    </StyledDateBanner>
  );
};

export default DateBanner;
