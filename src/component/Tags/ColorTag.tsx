import { useState } from "react";

import { StyledColorTag } from "./style";

type ColorTagPropType = {
  hexCode: string;
  onClick: Function;
};

const ColorTag = ({ hexCode, onClick }: ColorTagPropType) => {
  const [isSelected, setSelected] = useState(false);

  const handleOnClick = () => {
    setSelected(!isSelected);
    onClick({ hexCode, isSelected: !isSelected });
  };

  return (
    <StyledColorTag
      isSelected={isSelected}
      hexCode={hexCode}
      onClick={handleOnClick}
    >
      <div className="selected"> </div>
    </StyledColorTag>
  );
};

export default ColorTag;
