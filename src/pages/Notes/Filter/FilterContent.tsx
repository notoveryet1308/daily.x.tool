import { useState, useEffect } from "react";
import { useNoteContext } from "../../../Context/NoteDataProvider";
import ColorFilter from "./ColorFilter";
import NoteTagFilter from "./NoteTagFilter";

import { StyledFilterContent } from "./style";

const FilterContent = () => {
  const { noteDispatch, noteFilter } = useNoteContext();
  const [filterData, setFilterData] = useState<{
    colors: string[] | [];
    noteTags: { id: string; value: string; label: string }[] | [];
  }>(noteFilter);

  const handleFilterData = ({
    colors,
    noteTags,
  }: {
    colors: string[];
    noteTags: { id: string; value: string; label: string }[];
  }) => {
    if (noteTags) {
      setFilterData({
        colors: filterData.colors,
        noteTags: noteTags,
      });
    }
    if (colors) {
      setFilterData({ noteTags: filterData.noteTags, colors });
    }
  };

  useEffect(() => {
    noteDispatch({ type: "update-note-filter", payload: filterData });
  }, [filterData.colors.length, filterData.noteTags.length]);

  return (
    <StyledFilterContent>
      <ColorFilter onDataChange={handleFilterData} />
      <NoteTagFilter onDataChange={handleFilterData} />
    </StyledFilterContent>
  );
};

export default FilterContent;
