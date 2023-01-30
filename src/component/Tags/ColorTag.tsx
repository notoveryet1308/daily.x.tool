import { useState } from "react";

import { StyledColorTag } from "./style";

type ColorTagPropType = {
  hexCode: string;
  onClick: Function;
  selected?: boolean;
};

const ColorTag = ({ hexCode, onClick, selected = false }: ColorTagPropType) => {
  const [isSelected, setSelected] = useState(selected);

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
