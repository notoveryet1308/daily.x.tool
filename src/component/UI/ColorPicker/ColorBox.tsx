import { StyledColorBox } from './style';

const ColorBox = ({
  hexCode,
  onClick,
  selectedColor,
}: {
  hexCode: string;
  onClick: Function;
  selectedColor: string;
}) => {
  const onClickHandler = () => {
    onClick(hexCode);
  };
  return (
    <StyledColorBox
      className='color-box-overlay'
      hexCode={hexCode}
      onClick={onClickHandler}
      isSelected={selectedColor === hexCode}
    >
      <div className='color-box-select'></div>
    </StyledColorBox>
  );
};

export default ColorBox;
