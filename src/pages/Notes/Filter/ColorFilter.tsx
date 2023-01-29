import { useState } from "react";
import { ColorTag } from "../../../component/Tags";
import { StaticColors } from "../../../theme/constants";
import { StyledColorFilter } from "./style";

const ColorFilter = () => {
  const [selectedColors, setSelectedColor] = useState<string[]>([]);

  const handleColorSelection = ({
    hexCode,
    isSelected,
  }: {
    hexCode: string;
    isSelected: boolean;
  }) => {
    if (isSelected) {
      setSelectedColor([...selectedColors, hexCode]);
    } else {
      const selected = selectedColors.filter((d) => d !== hexCode);
      setSelectedColor(selected);
    }
  };

  return (
    <StyledColorFilter>
      <span className="color-label">Color</span>
      <div className="color-wrapper">
        {StaticColors.map((d, id) => (
          <ColorTag key={id} hexCode={d} onClick={handleColorSelection} />
        ))}
      </div>
    </StyledColorFilter>
  );
};

export default ColorFilter;
