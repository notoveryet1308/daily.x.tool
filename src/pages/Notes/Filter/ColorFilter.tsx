import { useCallback, useEffect, useState } from "react";
import { ColorTag } from "../../../component/Tags";
import { StaticColors } from "../../../theme/constants";
import { StyledColorFilter } from "./style";

import { useNoteContext } from "../../../Context/NoteDataProvider";

const ColorFilter = ({ onDataChange }: { onDataChange: Function }) => {
  const { noteFilter } = useNoteContext();
  const [selectedColors, setSelectedColor] = useState<string[]>(
    noteFilter.colors
  );

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

  useEffect(() => {
    onDataChange({ colors: selectedColors });
  }, [selectedColors]);

  return (
    <StyledColorFilter>
      <span className="color-label">Color</span>
      <div className="color-wrapper">
        {StaticColors.map((d, id) => (
          <ColorTag
            key={id}
            hexCode={d}
            onClick={handleColorSelection}
            selected={noteFilter.colors.includes(d)}
          />
        ))}
      </div>
    </StyledColorFilter>
  );
};

export default ColorFilter;
