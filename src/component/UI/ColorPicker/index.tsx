import React, { useEffect, useState } from "react";
import { PlusCircle } from "phosphor-react";

import { useAppDataContext } from "../../../Context/AppDataContext";
import ColorBox from "./ColorBox";
import { StyledColorPicker } from "./style";
import { _debounce } from "../../../utils";

const ColorPicker = ({
  onChange,
  name,
  label = "Apply color",
  value,
}: {
  onChange: Function;
  name: string;
  label?: string;
  value?: string;
}) => {
  const { staticColors, dispatch } = useAppDataContext();
  const [selectedColor, setSelectedColor] = useState<string>(
    value || staticColors[0]
  );

  const onChangeHandler = (d: string) => {
    onChange({ field: name, [name]: d });
    setSelectedColor(d);
  };

  const openColorPicker = () => {
    document.getElementById("color-picker-input")?.click();
  };
  const onColorPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hexValue = e.target.value;
    dispatch({ type: "set-more-static-colors", payload: hexValue });
    setSelectedColor(hexValue);
    onChange({ [name]: hexValue });
  };

  return (
    <StyledColorPicker>
      <label className="color-picker-label">{label}</label>
      <div className="color-picker-content">
        {staticColors.map((d, index) => (
          <ColorBox
            hexCode={d}
            onClick={onChangeHandler}
            selectedColor={selectedColor}
            key={d + index}
          />
        ))}
        <PlusCircle className="plus-circle-icon" onClick={openColorPicker} />
        <input type="color" id="color-picker-input" onChange={onColorPick} />
      </div>
    </StyledColorPicker>
  );
};

export default ColorPicker;
