import { StyledColorBox } from './style';

const ColorBox = ({
  colorHex,
  onClick,
  selectedColor,
}: {
  colorHex: string;
  onClick: Function;
  selectedColor: string;
}) => {
  const onClickHandler = () => {
    onClick(colorHex);
  };
  return (
    <StyledColorBox
      className='color-box-overlay'
      colorHex={colorHex}
      onClick={onClickHandler}
      isSelected={selectedColor === colorHex}
    >
      <div className='color-box-select'></div>
    </StyledColorBox>
  );
};

export default ColorBox;
